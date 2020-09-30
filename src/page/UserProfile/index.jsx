import React, {useEffect} from "react";
import styled, {css} from 'styled-components';

import useFetch from '../../hooks/UseFetch';
import {NavLink} from "react-router-dom";
import UserArticles from './components/UserArticles';

const UserProfileBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserProfileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f3f3f3;
`;

const UserProfileHeaderContainer = styled.div`
  width: 1200px;
  padding: 30px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  h4{
    font-size: 1.5rem;
    padding-top: 20px;
    color: #373a3c;
  }
  p{
    padding-top: 10px;
    color: #aaa;;
  }
`;

const UserProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const UserProfileContainerBanner = styled.div`
  width: 800px;
  ul{
    display: flex;
  }
  li{
    list-style: none;
    padding: 0 0 10px 0;
  }
`;

const UserArticlesContainer = styled.div`
  width: 800px;
`;

const NavLinkUserProfile = styled(NavLink)`
  padding: 0 20px 9.5px 20px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  transition: all .3s;
  
  :hover{
      ${({theme}) => css`
        color: ${theme.colors.titleMenuHover}
      `} ;
    }
  &.active{
    ${({theme}) => css`
      border-bottom: 3px solid ${theme.colors.titleLogo};
      color: ${theme.colors.titleLogo}
    `};
  }
   
  ${({theme}) => css`
    color: ${theme.colors.titleMenu}
  `}
`;

const UserProfile = ({match, location}) => {
    const slug = match.params.slug;
    const isFavorites = location.pathname.includes('favorites');
    const apiUrl = `/profiles/${slug}`
    const [{response}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch();
    }, [doFetch, apiUrl])

    if(!response){
        return null
    }

    return (
        <UserProfileBanner>
            <UserProfileHeader>
                <UserProfileHeaderContainer>
                    <img src={response.profile.image} alt='' />
                    <h4>{response.profile.username}</h4>
                    <p>{response.profile.bio}</p>
                </UserProfileHeaderContainer>
            </UserProfileHeader>
            <UserProfileContainer>
                <UserProfileContainerBanner>
                    <ul>
                        <li>
                            <NavLinkUserProfile exact to={`/profiles/${response.profile.username}`}>
                                My Posts
                            </NavLinkUserProfile>
                        </li>
                        <li>
                            <NavLinkUserProfile exact to={`/profiles/${response.profile.username}/favorites`}>
                                Favorites Posts
                            </NavLinkUserProfile>
                        </li>
                    </ul>
                </UserProfileContainerBanner>
                <UserArticlesContainer>
                    <UserArticles
                        username={response.profile.username}
                        location={location}
                        isFavorites={isFavorites}
                        url={match.url}
                    />
                </UserArticlesContainer>
            </UserProfileContainer>
        </UserProfileBanner>
    )
}

export default UserProfile;