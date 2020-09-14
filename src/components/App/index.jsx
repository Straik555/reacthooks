import React from 'react';

import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from "../../routes";
import TopBar from "../Topbar";

const Banner = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const App = () => {
    return <Banner>
        <Router>
            <TopBar />
            <Routes />
        </Router>
    </Banner>
}


export default App;