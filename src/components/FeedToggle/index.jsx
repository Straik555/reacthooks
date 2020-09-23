import React, {useContext} from "react";

import {NavLink} from "react-router-dom";
import styled, {css} from 'styled-components';
import {Icon} from "react-icons-kit";
import {pound} from 'react-icons-kit/ionicons/pound'
import {CurrentUserContext} from "../../context/currentUser";

const FeedToggleContainer = styled.div`
  width: 100%;
  ul{
    display: flex;
  }
  li{
    list-style: none;
    padding: 0 0 10px 0;
  }
  
`;

const NavLinkFeed = styled(NavLink)`
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

const NavIcon = styled(Icon).attrs({
    icon: pound,
    size: 20
})`
  padding-right: 5px;
`;

const FeedToggle = ({tagName}) => {
    const [currentUserState] = useContext(CurrentUserContext);
    return (
        <FeedToggleContainer>
            <ul>
                {currentUserState.isLoggedIn && (
                    <li>
                        <NavLinkFeed to='/feed' exact>
                            Your Feed
                        </NavLinkFeed>
                    </li>
                )}
                <li>
                    <NavLinkFeed to='/main' exact>
                        Global feed
                    </NavLinkFeed>
                </li>
                <li>
                    {tagName && (
                        <NavLinkFeed to={`/tags/${tagName}`} exact>
                            <NavIcon />
                            {tagName}
                        </NavLinkFeed>
                    )}
                </li>
            </ul>
        </FeedToggleContainer>
    )
}

export default FeedToggle;