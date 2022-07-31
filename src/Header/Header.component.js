import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-light bg-white navbar-expand-lg">
                            <Link className="navbar-brand" to="">
                                <img src="./images/sellusedphone.png" alt="sell used phone logo" width="250" height="138" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="container ml-5">
                                <div className="row justify-content-around bg-white">
                                    <div className="col-lg-8 d-flex align-items-center justify-content-around">
                                        <div className="collapse navbar-collapse" id="navbarCollapse">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link style={{ color: "#D62226", fontSize: "15px" }} className="nav-link"
                                                        to="#overview"><strong>Overview</strong></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link style={{ color: "#D62226", fontSize: "15px" }} className="nav-link" to="#howitworks-section"><strong>How
                                                        it
                                                        works?</strong></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link style={{ color: "#D62226", fontSize: "15px" }} className="nav-link" to="#sellphone-section"><strong>Sell
                                                        your
                                                        phone</strong></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link style={{ color: "#D62226", fontSize: "15px" }} className="nav-link" to="#getintouch"><strong>Get in
                                                        Touch</strong></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

