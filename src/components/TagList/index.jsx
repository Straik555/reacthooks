import React from "react";

import styled, {css} from 'styled-components';

const TagListContainer = styled.ul`
        
        
        ${({justify, width}) => css`
          width: ${width};
          ${justify && 'justify-content: flex-end'}
        `};
        display: flex;
        flex-wrap: wrap;
        li{
            margin: 0 4px 4px 0;
            list-style: none;
            font-weight: 300;
            font-size: .8rem!important;
            padding: 1px 5px;
            border: 1px solid #ddd;
            color: #aaa!important;
            border-radius: 25px;
        }
`;

const TagList = ({tags, justify, width = '100%'}) => {
    return (
        <TagListContainer width={width} justify={justify}>
            {tags.map(tag => {
                return (
                    <li key={tag}>
                        {tag}
                    </li>
                )
            })}
        </TagListContainer>
    )
}

export default TagList;