import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styled, {css} from 'styled-components';

import useFetch from '../../hooks/UseFetch'
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TagList from "../../components/TagList";

const ArticleBanner = styled.div`
  width: 100%;
`;

const ArticleContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  ${({theme}) => css`
    background: ${theme.colors.backgroundArticleUser};
  `}
`;

const ArticleHeader = styled.div`
  width: 1000px;
  padding: 30px 20px 10px 20px;
  
  h1{
    font-size: 2.8rem;
    font-weight: 600;
    ${({theme}) => css`
      color: ${theme.colors.titleWhite};
   `}
  }
`

const ArticleHeaderUser = styled.div`
  display: flex;
  padding: 30px 0 20px 0;
  align-items: flex-start;
  
  img{
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`;

const ArticleHeaderUserName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  .ArticleHeaderUserName{
    text-decoration: none;
    line-height: 1rem;
    ${({theme}) => css`
      color: ${theme.colors.titleLogo};
    `}
    :hover{
      text-decoration: underline;
    }
  }
  
  span{
    font-size: 12.8px;
    ${({theme}) => css`
      color: ${theme.colors.spanSilver};
    `}
  }
  
`;

const ArticleContainerBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArticleBottom = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  
  p{
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const Article = ({match}) => {
    const slug = match.params.slug;
    const apiUrl = `/articles/${slug}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    }, [doFetch])

    console.log('r', response)

    return (
        <ArticleBanner>
            <ArticleContainerHeader>
                {!isLoading && response && (
                    <ArticleHeader>
                        <h1>
                            {response.article.title}
                        </h1>
                        <ArticleHeaderUser>
                            <Link to={`/profiles/${response.article.author.username}`}>
                                <img src={response.article.author.image} />
                            </Link>
                            <ArticleHeaderUserName>
                                <Link to={`/profiles/${response.article.author.username}`} className='ArticleHeaderUserName'>
                                    {response.article.author.username}
                                </Link>
                                <span>
                                    {new Date(response.article.createdAt).toLocaleString()}
                                </span>
                            </ArticleHeaderUserName>
                        </ArticleHeaderUser>
                    </ArticleHeader>
                )}
            </ArticleContainerHeader>
            <ArticleContainerBottom>
                {isLoading && <Loading />}
                {error && <ErrorMessage />}
                {!isLoading && response && (
                    <ArticleBottom>
                        <p>
                            {response.article.body}
                        </p>
                        <TagList tags={response.article.tagList} />
                    </ArticleBottom>
                )}
            </ArticleContainerBottom>
        </ArticleBanner>
    )
}

export default Article
