import React from 'react';

import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from "../../routes";
import TopBar from "../Topbar";
import {CurrentUserProvider} from "../../context/currentUser";

const Banner = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const App = () => {
    return (
        <CurrentUserProvider>
            <Banner>
                <Router>
                    <TopBar />
                    <Routes />
                </Router>
            </Banner>
        </CurrentUserProvider>
    )
}


export default App;