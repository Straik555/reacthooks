import React, {useEffect, Fragment} from "react";

import Feed from "../../components/Feed";
import useFetch from '../../hooks/UseFetch';
import {
    GlobalFeedSection,
    GlobalFeedHeader,
    GlobalFeedHeaderContainer,
    GlobalFeedHeaderTitle,
    GlobalFeedHeaderDescription,
    GlobalFeedBanner,
    GlobalFeedBannerContainer,
    GlobalFeedBannerContainerLeft,
    GlobalFeedBannerContainerRight
} from './styled';
import Paginator from "../../components/Pagination";
import {getPaginator, limit} from "../../utils/range";
import {stringify} from "query-string";

const GlobalFeed = ({location, match}) => {
    const {offset, currentPage} = getPaginator(location.search);
    const stringifyParams = stringify({
        limit,
        offset
    })
    const apiUrl = `/articles?${stringifyParams}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    const url = match.url;

    useEffect(() => {
        doFetch()
    }, [doFetch, currentPage])

    return (
        <GlobalFeedSection>
            <GlobalFeedHeader>
                <GlobalFeedHeaderContainer>
                    <GlobalFeedHeaderTitle>Medium clone</GlobalFeedHeaderTitle>
                    <GlobalFeedHeaderDescription>A place to share knowledge</GlobalFeedHeaderDescription>
                </GlobalFeedHeaderContainer>
            </GlobalFeedHeader>
            <GlobalFeedBanner>
                <GlobalFeedBannerContainer>
                    <GlobalFeedBannerContainerLeft>
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Some error happened</div>}
                        {!isLoading && response && (
                            <Fragment>
                                <Feed articles={response.articles} />
                                <Paginator
                                    total={response.articlesCount}
                                    limit={limit}
                                    url={url}
                                    currentPage={currentPage}
                                />
                            </Fragment>
                        )}
                    </GlobalFeedBannerContainerLeft>
                    <GlobalFeedBannerContainerRight>
                        Popular tags
                    </GlobalFeedBannerContainerRight>
                </GlobalFeedBannerContainer>
            </GlobalFeedBanner>
        </GlobalFeedSection>
    )
}

export default GlobalFeed;