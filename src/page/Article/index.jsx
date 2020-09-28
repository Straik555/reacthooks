import React, {useContext, useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";

import useFetch from '../../hooks/UseFetch'
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TagList from "../../components/TagList";
import {
    ArticleBanner,
    ArticleContainerHeader,
    ArticleHeader,
    IconEdit,
    IconDelete,
    ArticleHeaderUser,
    ArticleHeaderUserName,
    ArticleContainerBottom,
    ArticleBottom
} from './style';
import {CurrentUserContext} from "../../context/currentUser";


const Article = ({match}) => {
    const slug = match.params.slug;
    const apiUrl = `/articles/${slug}`;
    const [{
        response: fetchArticleResponse,
        isLoading: fetchArticleIsLoading,
        error: fetchArticleError}, doFetch] = useFetch(apiUrl)
    const [{response: deleteArticleResponse}, doDeleteArticle] = useFetch(apiUrl)
    const [currentUserState] = useContext(CurrentUserContext);
    const [isSuccessfullDelete, setIsSuccessfullDelete] = useState(false)

    const isAuthor = () => {
        if(!fetchArticleResponse || !currentUserState.isLoggedIn){
            return false
        }
        return fetchArticleResponse.article.author.username === currentUserState.currentUser.username
    }

    const deleteArticle = () => {
        doDeleteArticle({
            method: 'delete'
        })
    }

    useEffect(() => {
        doFetch()
    }, [doFetch])

    useEffect(() => {
        if(!deleteArticleResponse){
            return
        }
        setIsSuccessfullDelete(true)
    }, [deleteArticleResponse])

    if(isSuccessfullDelete){
        return <Redirect to='/' />
    }

    return (
        <ArticleBanner>
            <ArticleContainerHeader>
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <ArticleHeader>
                        <h1>
                            {fetchArticleResponse.article.title}
                        </h1>
                        <ArticleHeaderUser>
                            <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                                <img src={fetchArticleResponse.article.author.image} alt=''/>
                            </Link>
                            <ArticleHeaderUserName>
                                <Link to={`/profiles/${fetchArticleResponse.article.author.username}`} className='ArticleHeaderUserName'>
                                    {fetchArticleResponse.article.author.username}
                                </Link>
                                <span>
                                    {new Date(fetchArticleResponse.article.createdAt).toLocaleString()}
                                </span>
                            </ArticleHeaderUserName>
                            {isAuthor() && (
                                <span className='article'>
                                    <Link to={`/articles/${fetchArticleResponse.article.slug}/edit`} className='edit-article'>
                                        <IconEdit /> Edit Article
                                    </Link>
                                    <button
                                        onClick={deleteArticle}
                                        className='delete-article'
                                    >
                                        <IconDelete /> Delete Article
                                    </button>
                                </span>
                            )}
                        </ArticleHeaderUser>
                    </ArticleHeader>
                )}
            </ArticleContainerHeader>
            <ArticleContainerBottom>
                {fetchArticleIsLoading && <Loading />}
                {fetchArticleError && <ErrorMessage />}
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <ArticleBottom>
                        <p>
                            {fetchArticleResponse.article.body}
                        </p>
                        <TagList tags={fetchArticleResponse.article.tagList} />
                    </ArticleBottom>
                )}
            </ArticleContainerBottom>
        </ArticleBanner>
    )
}

export default Article
