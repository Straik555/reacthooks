import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import styled from "styled-components";

import Article from "./page/Article";
import GlobalFeed from "./page/GlobalFeed";
import Authentication from "./page/Authentication";
import TagFeed from './page/TagFeed';
import YourFeed from './page/YourFeed';
import CreateArticle from './page/CreateArticle';
import EditArticle from './page/EditArticle';
import Settings from "./page/Settings";

const PageNot = styled.h3`
  text-align: center;
`;

const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                <Route path='/settings' component={Settings} />
                <Route path='/articles/new' component={CreateArticle} />
                <Route path='/articles/:slug/edit' component={EditArticle} />
                <Route path='/feed' component={YourFeed} />
                <Route path='/main' component={GlobalFeed} />
                <Route path='/tags/:slug' component={TagFeed} />
                <Route path='/login' component={Authentication} />
                <Route path='/register' component={Authentication} />
                <Route path='/articles/:slug' component={Article} />
                <Route render={() => <PageNot>Page not found</PageNot> } />
            </Switch>
    )
}

export default Routes;