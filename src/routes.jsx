import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Article from "./page/Article";
import GlobalFeed from "./page/GlobalFeed";
import Authentication from "./page/Authentication";

const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                <Route exact path='/main' component={GlobalFeed} />
                <Route exact path='/login' component={Authentication} />
                <Route exact path='/register' component={Authentication} />
                <Route exact path='/article' component={Article} />
            </Switch>
    )
}

export default Routes;