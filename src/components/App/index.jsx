import React from 'react';

import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from "../../routes";
import TopBar from "../Topbar";
import {CurrentUserProvider} from "../../context/currentUser";
import CurrentUserChecker from "../CurrentUserChecker";
import '../../-styles/main.scss';

const Banner = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Banner>
                    <Router>
                        <TopBar />
                        <Routes />
                    </Router>
                </Banner>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}


export default App;