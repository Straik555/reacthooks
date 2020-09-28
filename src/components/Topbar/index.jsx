import React, {useState, useContext, Fragment} from "react";

import {LINK, Link} from "./links";
import {
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
} from './style';
import {CurrentUserContext} from "../../context/currentUser";

const TopBar = () => {
    const [open, setOpen] = useState(false);
    const [currentUserState] = useContext(CurrentUserContext);

    return (
        <HeaderBar>
            <LeftBar>
                <Title to='/'>
                    Conduit
                </Title>
            </LeftBar>
            <RightBar>
                <Hamburger onClick={() => setOpen(true)} />
                <MenuWrap open={open}>
                    {open && <BodyOverflow />}
                    <Overlay onClick={() => setOpen(false)} />
                    <MenuList>
                        <CloseMenu onClick={() => setOpen(false)} />
                        {
                            currentUserState.isLoggedIn ?
                                <Fragment>
                                    {Link.map((item, index) => {
                                        return (
                                            <MenuLink
                                                key={index}
                                                to={item.route}
                                                onClick={() => setOpen(false)}
                                            >
                                                {(item.icon === false && <NewPostIcon />) || (item.icon === null && <SettingsIcon />)} {item.name}
                                            </MenuLink>

                                        )
                                    })}
                                    <MenuLink
                                        to={`/profiles/${currentUserState.currentUser.username}`}
                                    >
                                        {currentUserState.currentUser.image && <img src={currentUserState.currentUser.image} alt='' />}

                                        {currentUserState.currentUser.username}
                                    </MenuLink>
                            </Fragment> :
                                (
                                    LINK.map((item, index) => {
                                        return (
                                            <MenuLink
                                                key={index}
                                                to={item.route}
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.name}
                                            </MenuLink>

                                        )
                                    })
                                )
                        }

                    </MenuList>
                </MenuWrap>
            </RightBar>
        </HeaderBar>
    )
}

export default TopBar;