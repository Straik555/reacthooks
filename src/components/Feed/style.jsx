import styled, {css} from "styled-components";

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
        width: 50%;
        font-size: 12.8px;
        ${({theme}) => css`
          color: ${theme.colors.spanSilver};
        `}
      }
      
    }
    
    .preview-link-ul{
      width: 100%;
      display: flex;
    }
    
`;

const FeedContainerImg = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
`;

const FeedContainerUser = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  img{
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`;

const FeedContainerUsername = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  
  .username-link{
    text-decoration: none;
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

const FeedContainerLike = styled.div`
    width: 30%;
    height: 30px;
    display: flex;
    justify-content: flex-end;

`;

export {
    FeedBanner,
    FeedContainer,
    FeedContainerImg,
    FeedContainerUser,
    FeedContainerUsername,
    FeedContainerLike
};