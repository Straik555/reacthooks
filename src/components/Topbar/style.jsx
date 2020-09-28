import {NavLink, Link} from "react-router-dom";
import styled, {css, createGlobalStyle} from 'styled-components';
import {Icon} from "react-icons-kit";
import {cross} from 'react-icons-kit/icomoon/cross';
import {edit} from 'react-icons-kit/fa/edit';
import {cogs} from 'react-icons-kit/icomoon/cogs'
import {ic_dehaze} from 'react-icons-kit/md/ic_dehaze'
import {customMedia} from "../../-styles/theme";

const HeaderBar = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
  
`;

const LeftBar = styled.div`
  width: 50%;
  
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
  
  ${({theme}) => css`
    color: ${theme.colors.titleLogo}
  `}
`;

const RightBar = styled.div`
  width: 50%;  
  display: flex;
  justify-content: flex-end;
`;

const BodyOverflow = createGlobalStyle`
  body {
  ${customMedia.lessThan("tablet")`
    max-height: 100%;
    overflow:hidden;
  `}
  }
`;

const Overlay = styled.div`
  display:none;
  
  ${customMedia.lessThan("tablet")`
    display:block;
    flex: 1;
  `}
`;

const MenuList = styled.div`

  ${customMedia.lessThan("tablet")`
    width: 250px;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
  `}
  
  
 
`;

const MenuLink = styled(NavLink)`
  padding: 0 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  font-weight: 500;
  font-style: normal;
  transition: all .3s;
  
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-bottom: -10px;
    margin-right: 5px;
  }
  
  :hover{
      ${({theme}) => css`
        color: ${theme.colors.titleMenuHover}
      `} ;
    }
  &.active{
    ${({theme}) => css`
    color: ${theme.colors.titleMenuActive}
  `}  
  }
  
  
  
  ${({theme}) => css`
    color: ${theme.colors.titleMenu}
  `}
  
  `;

const NewPostIcon = styled(Icon).attrs({
    icon: edit,
    size: 18,
    })``;
const SettingsIcon = styled(Icon).attrs({
    icon: cogs,
    size: 18,
})``;

const CloseMenu = styled(Icon).attrs({
    icon: cross,
    size: 20
})`
  display: none !important;
  position: absolute;
  top: 18px;
  right: 10px;
  cursor: pointer;
    
  ${customMedia.lessThan("tablet")`
    display: block !important;
  `}
`
const Hamburger = styled(Icon).attrs({
    icon: ic_dehaze,
    size: 28,
})`
  display: none !important;
  cursor: pointer;
  margin-right: 20px;
  
  ${customMedia.lessThan("tablet")`
    display: flex !important;
  `}
`;

const MenuWrap = styled.div`
  display: flex;
  ${customMedia.lessThan("tablet")`
    position: fixed;
    top: 0;
    right: 0;
    button: 0;
    z-index: 100;
    transition: 0.3s;
    transform: translateX(1101%);
    height: 100%;
  `}

 ${({open}) => open && css`
  ${customMedia.lessThan("tablet")`
    transform: translateX(0);
  `}
`}
`;

export {
    HeaderBar,
    LeftBar,
    Title,
    RightBar,
    Hamburger,
    MenuWrap,
    BodyOverflow,
    Overlay,
    MenuList,
    CloseMenu,
    MenuLink,
    NewPostIcon,
    SettingsIcon
}