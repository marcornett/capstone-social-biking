import React from 'react'
import { HomeSignedOut, NotFound, GroupPage, HomeSignedIn } from "../../screens"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path="/group/:groupName" component={GroupPage} />
                <Route path="/registered" component={HomeSignedIn} />
                <Route exact path="/" component={HomeSignedOut} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}
