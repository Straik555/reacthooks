import React from "react";

import {range} from "../../utils/range";
import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";
import classNames from 'classnames';

const Li = styled.li`
  list-style: none;
  height: 27.5px;
  padding: 0;
  margin: 0;
  transition: .3s;
  cursor: pointer;
  .page{
    text-decoration: none;
    border: 1px solid #DADADA;
    padding: 3px 15px;
    
    ${({theme}) => css`
      color: ${theme.colors.titleMenuActive};
    `};
    
    :hover{
      ${({theme}) => css`
        background: ${theme.colors.paginatorHover};
        border: 1px solid ${theme.colors.paginatorHover}
      `}
    }   
  }
  .active{
    ${({theme}) => css`
      background: ${theme.colors.titleLogo};
      color: ${theme.colors.titleWhite};
      border: 1px solid ${theme.colors.titleLogo};
    `}
     :hover{
      ${({theme}) => css`
        background: ${theme.colors.titleLogo};
        color: ${theme.colors.titleWhite};
        border: 1px solid ${theme.colors.titleLogo};
        cursor: default;
      `}
    }  
  }
  

`;

const PaginatorUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;


const PaginationItem = ({page, currentPage, url}) => {

    const liClasses = classNames({
        page: true,
        active: currentPage === page
    });
    return (
        <Li className='page'>
            <Link to={`${url}?page=${page}`} className={liClasses}>
                {page}
            </Link>
        </Li>
    )
}


const Paginator = ({total, limit, url, currentPage}) => {
    const pageCount = Math.ceil(total/limit);
    const pages = range(1, pageCount);

    return (
        <PaginatorUl>
            {pages.map(page => (
                <PaginationItem
                page={page}
                currentPage={currentPage}
                url={url}
                key={page}
                />
            ))}
        </PaginatorUl>
    )
}

export default Paginator;