import React from "react";
import styled, {css} from 'styled-components';
import {Icon} from "react-icons-kit";
import {heart} from 'react-icons-kit/icomoon/heart'
import classNames from 'classnames';

import useFetch from '../../hooks/UseFetch';

const AddToImg = styled(Icon).attrs({
    icon: heart,
    size: 12
})`
  
  ${({theme}) => css`
    color: ${theme.colors.titleLogo};
  `}

`;

const AddToFavoriteButton = styled.div`
  
   .btn-primary, .btn-outline-primary{
       border: 1px solid #5cb85c;
       padding: 3px 10px;
       border-radius: 5px;
       transition: .3s;
       cursor: pointer;
       outline: none;
       :hover{
        ${({theme}) => css`
          background: ${theme.colors.titleLogo};
        `}
          * {
              ${({theme}) => css`
                color: ${theme.colors.titleWhite};
              `}
            }
    
        }
        ${({theme}) => css`
          color: ${theme.colors.titleLogo};
        `}
   }
   
   .btn-outline-primary{
    ${({theme}) => css`
         background: ${theme.colors.titleWhite};
          }
      `}
   }

    
    .btn-primary{
       ${({theme}) => css`
         background: ${theme.colors.titleLogo};
        * {
            color: ${theme.colors.titleWhite};
          }
      `}
    }
`;

const AddToFavorite = ({isFavorited, favoriteCount, articleSlug}) => {
    const apiUrl = `/articles/${articleSlug}/favorite`;
    const [{response}, doFetch] = useFetch(apiUrl);
    const favoritesCountWithResponse = response ? response.article.favoritesCount : favoriteCount;
    const isFavoritedWhithResponse = response ? response.article.favorited : isFavorited;

    const buttonClasses = classNames({
        'btn-primary': isFavoritedWhithResponse,
        'btn-outline-primary': !isFavoritedWhithResponse

    })

    const handleLike = e => {
        e.preventDefault()
        doFetch({
            method: isFavoritedWhithResponse ? 'delete' : 'post'
        })
    }



    return (
        <AddToFavoriteButton>
            <button className={buttonClasses} onClick={handleLike}>
                <AddToImg />
                <span>&nbsp; {favoritesCountWithResponse}</span>
            </button>
        </AddToFavoriteButton>
    )
}

export default AddToFavorite;