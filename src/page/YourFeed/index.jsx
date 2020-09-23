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
} from '../GlobalFeed/styled';
import Paginator from "../../components/Pagination";
import {getPaginator, limit} from "../../utils/range";
import {stringify} from "query-string";
import PopularTags from "../../components/PopularTags";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import FeedToggle from '../../components/FeedToggle';

const YourFeed = ({location, match}) => {
    const {offset, currentPage} = getPaginator(location.search);
    const stringifyParams = stringify({
        limit,
        offset
    })
    const apiUrl = `/articles/feed?${stringifyParams}`;
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
                        <FeedToggle />
                        {isLoading && <Loading />}
                        {error && <ErrorMessage />}
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
                        <PopularTags />
                    </GlobalFeedBannerContainerRight>
                </GlobalFeedBannerContainer>
            </GlobalFeedBanner>
        </GlobalFeedSection>
    )
}

export default YourFeed;