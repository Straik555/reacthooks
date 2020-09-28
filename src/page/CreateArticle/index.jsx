import React, {useEffect, useState, useContext} from "react";
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import ArticleForm from "../../components/ArticleForm";
import useFetch from '../../hooks/UseFetch';
import {CurrentUserContext} from "../../context/currentUser";

const CreateArticleBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CreateArticleContainer = styled.div`
  width: 1000px;
`;

const CreateArticle = () => {
    const apiUrl = '/articles'
    const [{response, error}, doFetch] = useFetch(apiUrl);
    const [currentUserState] = useContext(CurrentUserContext)
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: []
    };
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)

    const handleSubmit = article => {
        doFetch({
            method: 'post',
            data: {
                article
            }
        });
    }

    useEffect(() => {
        if(!response){
            return
        }
        setIsSuccessfullSubmit(true)
    }, [response])

    if(currentUserState.isLoggedIn === false) {
        return <Redirect to='/' />
    }
    if(isSuccessfullSubmit) {
        return <Redirect to={`/articles/${response.article.slug}`} />
    }

    return (
        <CreateArticleBanner>
            <CreateArticleContainer>
                <ArticleForm
                    error={(error && error.errors) || {}}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </CreateArticleContainer>
        </CreateArticleBanner>
    )
}

export default CreateArticle;