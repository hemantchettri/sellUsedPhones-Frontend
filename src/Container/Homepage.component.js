import React from "react";
import { Link } from "react-router-dom";
import '../css/sellUsedPhones.css'

export default class Homepage extends React.Component {
    render() {

        if (!localStorage.getItem("token")) {
            this.props.history.push("/");
        }

        return (
            <>
                {/* <!-- overview part --> */}
                <div className="container mt-5">
                    <div className="row">
                        <div id="overview1" className="col-md-6 col-lg-6 mt-5">
                            <div id="info">
                                <h1> <strong> Sell Your Used Phone &amp; Tablet in Minutes!</strong></h1>
                                <p style={{ fontSize: "26px" }}>Dial/Text 9869672231 or use Live <br /> Chat or our Instant Quote feature
                                    <br /> below!</p>
                            </div>
                        </div>
                        <div className="col-md-1 col-lg-1"></div>
                        <div className="overview2 col-md-5 col-lg-5 mt-5">
                            <div style={{ fontSize: "20px" }} className="mt-5" id="info">
                                <p style={{ lineHeight: "1.2" }}> <i className="fa fa-check" style={{ fontSize: "25px", color: " #D62226" }} />
                                    <strong>We
                                        Come to
                                        You</strong></p>
                                <p style={{ lineHeight: "1.2" }}> <i className="fa fa-check" style={{ fontSize: "25px", color: " #D62226" }} />
                                    <strong>Great Value</strong></p>
                                <p style={{ lineHeight: "1.2" }}> <i className="fa fa-check" style={{ fontSize: "25px", color: " #D62226" }} />
                                    <strong>Safe, Secure and in-Person</strong></p>
                                <p style={{ lineHeight: "1.2" }}> <i className="fa fa-check" style={{ fontSize: "25px", color: " #D62226" }} /> <strong>No
                                    Shipping. Cash on the Spot</strong></p>
                                <p style={{ lineHeight: "1.2" }}> <i className="fa fa-check" style={{ fontSize: "25px", color: " #D62226" }} />
                                    <strong>Blacklisted and Cracked Phones Accepted</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end of overview --> */}

                {/* <!-- start how it works section --> */}
                <div id="howitworks-section">
                    <div>
                        <h1 className="overview2 text-center" style={{ color: "#D62226" }}> How it works?</h1>
                        <hr width="90%" />
                    </div>
                    <div className="container-fluid mid-part">
                        <div className="row text-center text-justify">
                            <div className="col-md-4 col-lg-4 py-2">
                                <div id="getquote-section">
                                    <img id="cardimg" src="" style={{ width: "130px" }} alt="" />
                                    <h2 id="cardheader">Get Link Quote</h2>
                                    <p className="card-body">
                                        <span className="card-text">
                                            Use our Instant Quote feature or<br />
                                            Dial/Text @ 9869672231 get an
                                            instant <br /> offer on your Phone. You
                                            can also reach us via live chat
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 py-2">
                                <div className="meetup-section">
                                    <img id="cardimg" src="" style={{ width: "130px" }} className="center" alt="" />
                                    <h2 id="cardheader"> Meet Up </h2>
                                    <p className="card-body">
                                        <span className="card-text">
                                            We will meet at the predetermined<br />
                                            public location nearby your place.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 py-2">
                                <div id="getpaid-section">
                                    <img id="cardimg" src="" style={{ width: "130px" }} alt="" />
                                    <h2 id="cardheader">Get Paid</h2>
                                    <p className="card-body">
                                        <span className="card-text">
                                            Give us your Device. Get Cash on the Spot!</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end of how it works section --> */}

                {/* <!-- start of sell your phone section --> */}
                <h1 id="sellphone-section" className="text-center" style={{ color: "#D62226", marginTop: "8px" }}>Pick Your Phone and Get an
                    Instant
                    Quote</h1>
                <hr width="85%" />
                <div className="sellphones-section">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6 col-lg-4">
                                <Link to="#"> <img style={{ width: "300px", height: "300px" }} src=""
                                    className="img-fluid img-thumbnail item-img" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end of sell your phone section --> */}

                {/* <!-- start of get in touch section --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <h1 id="getintouch" className="text-center" style={{ color: "#D62226" }}>Get in Touch</h1>
                            <hr width="100%" />
                            <form action="" method="POST">
                                <div className="form-group">
                                    <label>Your Name (required)</label>
                                    <input type="text" name="name" className="form-control" required />
                                    <span className="message text-danger"></span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Your Email (required)</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" required />
                                    <span className="message text-danger"></span>
                                </div>

                                <div className="form-group">
                                    <label>Your Phone Number</label>
                                    <input type="text" name="phone" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <select name="subject" className="form-control" id="subject" >
                                        <option value="iPhone" defaultValue={"selected"}>iPhone</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="LG">LG</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Your Message</label>
                                    <textarea type="text" name="messages" rows="4" className="form-control" id="subject"></textarea>
                                    <span className="message"></span>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Send" className="btn btn-outline-secondary btn-lg" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="embed-responsive embed-responsive-4by3 bg-dark mt-5 mb-4">
                                <iframe className="embed-responsive-item" title="google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14134.6133651982!2d83.45792859792707!3d27.666195099711565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968431a6db2d17%3A0xd66de79eb934b249!2zMjfCsDM5JzQ3LjQiTiA4M8KwMjgnMTcuMSJF!5e0!3m2!1sen!2snp!4v1594479894242!5m2!1sen!2snp"
                                    width="600" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false"
                                    tabIndex="0" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}