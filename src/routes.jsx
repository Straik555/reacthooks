import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Article from "./page/Article";
import GlobalFeed from "./page/GlobalFeed";
import Authentication from "./page/Authentication";
import TagFeed from './page/TagFeed';
import YourFeed from './page/YourFeed';

const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                <Route path='/feed' component={YourFeed} />
                <Route path='/main' component={GlobalFeed} />
                <Route path='/tags/:slug' component={TagFeed} />
                <Route path='/login' component={Authentication} />
                <Route path='/register' component={Authentication} />
                <Route path='/articles/:slug' component={Article} />
            </Switch>
    )
}

export default Routes;