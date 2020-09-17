import styled, {css} from "styled-components";
import {heart} from 'react-icons-kit/icomoon/heart'
import {Icon} from "react-icons-kit";

const FeedBanner = styled.div`
  width: 100%;
`;

const FeedContainer = styled.div`
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 24px 0;
    
    .preview-link{
      text-decoration: none;
      h1{
      color: black;
        font-weight: 600!important;
        font-size: 1.5rem!important;
        margin-bottom: 3px;
      }
      p{
          font-weight: 300;
          color: #999;
          margin-bottom: 15px;
          font-size: 1rem;
          line-height: 1.3rem;
      }
      span{
        font-size: 12.8px;
        ${({theme}) => css`
          color: ${theme.colors.spanSilver};
        `}
      }
      ul{
        display: flex;
        justify-content: flex-end;
        li{
            list-style: none;
            font-weight: 300;
            font-size: .8rem!important;
            padding: 1px 5px;
            border: 1px solid #ddd;
            color: #aaa!important;
            border-radius: 25px;
        }
      }
    }
    
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const FeedContainerImg = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
`;

const FeedContainerUser = styled.div`
  width: 70%;
  display: flex;
`;

const FeedContainerUsername = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  
  .username-link{
    text-decoration: none;
    ${({theme}) => css`
      color: ${theme.colors.titleLogo};
    `}
  }
  span{
    font-size: 12.8px;
    ${({theme}) => css`
      color: ${theme.colors.spanSilver};
    `}
  }
`;

const FeedContainerLike = styled.div`
    width: 30%;
    height: 30px;
    display: flex;
    justify-content: flex-end;

`;

const FeedLike = styled.div`
   display: flex;
   justify-items: baseline;
   justify-content: space-between;
   border: 1px solid #5cb85c;
   padding: 3px 15px;
   border-radius: 5px;
   transition: .3s;
   cursor: pointer;
   
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
   
   span{
    padding: 1px 0 0 4px;
    ${({theme}) => css`
      color: ${theme.colors.titleLogo};
    `}
`;

const FeedImg = styled(Icon).attrs({
    icon: heart,
    size: 12
})`
  ${({theme}) => css`
    color: ${theme.colors.titleLogo};
  `}

`;

export {
    FeedBanner,
    FeedContainer,
    Img,
    FeedContainerImg,
    FeedContainerUser,
    FeedContainerUsername,
    FeedContainerLike,
    FeedLike,
    FeedImg
};