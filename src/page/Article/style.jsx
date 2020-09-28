import styled, {css} from "styled-components";
import {Icon} from "react-icons-kit";
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {trashO} from 'react-icons-kit/fa/trashO'

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
  
  .article{
    padding: 0 20px;
    display: flex;
  }
  .edit-article, .delete-article{
    display: flex;
    align-items: center;
    font-weight: 400;
    cursor: pointer;
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
    background: transparent;
  }
  .edit-article{
    text-decoration: none;
    ${({theme}) => css`
      border: 1px solid ${theme.colors.backgroundArticle};
      color: ${theme.colors.backgroundArticle};
    `}
    :hover{
      ${({theme}) => css`
        background: ${theme.colors.backgroundArticle};
        & {
          color: ${theme.colors.titleWhite};
        }
      `}
    }
  }
  .delete-article{
    text-decoration: none;
    ${({theme}) => css`
      border: 1px solid ${theme.colors.titleLogo};
      color: ${theme.colors.titleLogo};
    `}
    :hover{
      ${({theme}) => css`
        background: ${theme.colors.titleLogo};
        & {
          color: ${theme.colors.titleWhite};
        }
      `}
    }
  }
  
`

const IconEdit = styled(Icon).attrs({
    icon: pencil,
    size: 14
})`
  padding-right: 3px;
  padding-bottom: 3px;
`;

const IconDelete = styled(Icon).attrs({
    icon: trashO,
    size: 16
})`
  padding-right: 3px;
  padding-bottom: 3px;
`;

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
export {
    ArticleBanner,
    ArticleContainerHeader,
    ArticleHeader,
    IconEdit,
    IconDelete,
    ArticleHeaderUser,
    ArticleHeaderUserName,
    ArticleContainerBottom,
    ArticleBottom
}