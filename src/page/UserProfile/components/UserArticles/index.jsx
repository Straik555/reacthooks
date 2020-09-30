import React, {useEffect} from "react";
import {stringify} from "query-string";

import Paginator from "../../../../components/Pagination";
import {getPaginator, limit} from "../../../../utils/range";
import useFetch from '../../../../hooks/UseFetch';
import Feed from "../../../../components/Feed";
import Loading from "../../../../components/Loading";
import ErrorMessage from "../../../../components/ErrorMessage";

const getApiUrl = ({username, offset, isFavorites}) => {
    const params = isFavorites
        ? {limit, offset, favorited: username}
        : {limit, offset, author: username}
    return `/articles?${stringify(params)}`
};

const UserArticles = ({username, location, isFavorites, url}) => {
    const {offset, currentPage} = getPaginator(location.search);
    const apiUrl = getApiUrl({username, offset, isFavorites});
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

    useEffect(() => {
        doFetch()
    }, [doFetch, isFavorites, currentPage, apiUrl])

    return (
        <div>
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
                <>
                    <Feed articles={response.articles} />
                    <Paginator
                        total={response.articlesCount}
                        limit={limit}
                        url={url}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    )
}

export default UserArticles;