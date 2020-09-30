import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import ArticleForm from "../../components/ArticleForm";
import useFetch from '../../hooks/UseFetch';
import {CurrentUserContext} from "../../context/currentUser";

const EditArticleBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const EditArticleContainer = styled.div`
  width: 1000px;
`;

const EditArticle = ({match}) => {
    const slug = match.params.slug;
    const apiUrl = `/articles/${slug}`
    const [currentUserState] = useContext(CurrentUserContext);
    const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl)
    const [{
        response: updateArticleResponse,
        error: updateArticleError},
        doUpdateArticle
    ] = useFetch(apiUrl)
    const [initialValues, setInitialValues] = useState(null)
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)

    const handleSubmit = (article) => {
        doUpdateArticle({
            method: 'put',
            data: {
                article
            }
        })
    }

    useEffect(() => {
        doFetchArticle()
    }, [doFetchArticle])

    useEffect(() => {
        if(!fetchArticleResponse){
            return
        }
        setInitialValues({
            title: fetchArticleResponse.article.title,
            description: fetchArticleResponse.article.description,
            body: fetchArticleResponse.article.body,
            tagList: [fetchArticleResponse.article.tagList]
        })
    }, [fetchArticleResponse])

    useEffect(() => {
        if(!updateArticleResponse){
            return
        }
        setIsSuccessfullSubmit(true)
    }, [updateArticleResponse])

    if(currentUserState.isLoggedIn === false){
        return <Redirect to='/' />
    }

    if(isSuccessfullSubmit){
        return <Redirect to={`/articles/${slug}`} />
    }

    return (
        <EditArticleBanner>
            <EditArticleContainer>
                <ArticleForm
                    onSubmit={handleSubmit}
                    error={(updateArticleError && updateArticleError.errors) || {}}
                    initialValues={initialValues}
                />
            </EditArticleContainer>
        </EditArticleBanner>
    )
}

export default EditArticle;