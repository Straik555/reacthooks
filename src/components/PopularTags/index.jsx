import React, {useEffect} from "react";

import useFetch from '../../hooks/UseFetch';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {NavLink} from "react-router-dom";
import styled, {css} from 'styled-components';

const PopularTagsContainer = styled.div`
  padding: 5px 10px 10px;
  border-radius: 4px;
  font-size: .8rem;
  
  ${({theme}) => css`
    background: ${theme.colors.popularTagsBackground};
  `}
  p{
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  li{
    list-style: none;
    padding: 2px;
  }
`;

const PopularTagsLink = styled(NavLink)`
  text-decoration: none;
  padding-right: .6em;
  padding-left: .6em;
  padding-bottom: 0.2em;
  border-radius: 10rem;

  :hover{
      ${({theme}) => css`
        color: ${theme.colors.titleMenuHover}
      `} ;
    }
  &.active{
    ${({theme}) => css`
      text-decoration: underline;
      background: ${theme.colors.titleMenuHover};
    `};
    :hover{
      ${({theme}) => css`
        color: ${theme.colors.titleWhite};
      `}
    }
  }
   
  ${({theme}) => css`
   color: ${theme.colors.titleWhite};
   background: ${theme.colors.popularTags};
 `}

  
    

`;

const PopularTags = () => {
    const [{response, isLoading, error}, doFetch] = useFetch('/tags');

    useEffect(() => {
        doFetch()
    }, [doFetch])

    if(isLoading || !response) {
        return <Loading />
    }
    if(error){
        return <ErrorMessage />
    }

    return (
        <PopularTagsContainer>
            <p>Popular tags</p>
            <ul>
                {response.tags.map(tag => {
                    return (
                        <li key={tag}>
                            <PopularTagsLink
                                to={`/tags/${tag}`}
                            >
                                {tag}
                            </PopularTagsLink>
                        </li>
                    )

                })}
            </ul>
        </PopularTagsContainer>
    )
}

export default PopularTags;