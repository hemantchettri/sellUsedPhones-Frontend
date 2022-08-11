import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../Header/Header.component";
import Cart from "./Cart.component";
import Homepage from "./Homepage.component";
import Phones from "./Phones.component";
import Login from "./Login.component";
import Register from "./Register.component";
import EditProfile from "./EditProfile.component";

export default class Container extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    
                    {/*  */}
                    <Fragment>
                        <Header />
                        <Route exact path="/" component={Homepage} />
                        <Route path="/phones" component={Phones} />
                        <Route path="/my-cart/:id" component={Cart} />
                        <Route path="/edit-profile/:id" component={EditProfile} />
                        {/* <Route path="/iphones" component={Homepage} /> */}
                        {/* <Route path="/samsungs" component={Homepage} /> */}
                        {/* <Route path="/lg" component={Homepage} /> */}
                    </Fragment>
                </Switch>
            </BrowserRouter>
        )
    }
}