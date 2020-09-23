import styled, {css} from "styled-components";

const GlobalFeedSection = styled.div`
  width: 100%;
`;

const GlobalFeedHeader = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  
  ${({theme}) => css`
    background: ${theme.colors.titleLogo};
  `}
`;

const GlobalFeedHeaderContainer = styled.div`
  max-width: 1400px;
  text-align: center; 
`;

const GlobalFeedHeaderTitle = styled.h1`
    text-shadow: 0 1px 3px rgba(0,0,0,.3);
    font-weight: 700!important;
    font-size: 3.5rem;
    padding-bottom: .5rem;
    
  ${({theme}) => css`
    color: ${theme.colors.titleWhite};
  `}
`;

const GlobalFeedHeaderDescription = styled.p`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300!important;
    margin-bottom: 0;
    ${({theme}) => css`
      color: ${theme.colors.titleWhite};
    `}
`;

const GlobalFeedBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const GlobalFeedBannerContainer = styled.div`
  width: 1200px;
  display: flex;
 
`;

const GlobalFeedBannerContainerLeft = styled.div`
  width: 75%;
  padding: 0 20px;
`;

const GlobalFeedBannerContainerRight = styled.div`
  width: 25%;
  padding: 0 15px;
`;

export {
    GlobalFeedSection,
    GlobalFeedHeader,
    GlobalFeedHeaderContainer,
    GlobalFeedHeaderTitle,
    GlobalFeedHeaderDescription,
    GlobalFeedBanner,
    GlobalFeedBannerContainer,
    GlobalFeedBannerContainerLeft,
    GlobalFeedBannerContainerRight
}