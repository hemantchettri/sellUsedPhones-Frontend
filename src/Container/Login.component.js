import React from "react";
import { Link } from "react-router-dom";
// import '../css/loginSignup.css'
import axios from "axios";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.post("/api/login", { email: this.state.email, password: this.state.password })
            .then(data => {
                var _tmp = data.data;
                if (_tmp.success === true) {
                    localStorage.setItem("token", _tmp.token);
                    this.props.history.push("/homepage");
                } else {
                    this.setState({ error: _tmp.message.split(":"), loading: false });
                }
            }
            )
    }

    render() {
        return (
            <div className="main">
                <section className="sign-in">
                    <div className="container2">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src="images/signin-image.jpg" alt="log in" /></figure>
                                <Link to="/register" className="signup-image-link">Create an account</Link>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Log In</h2>
                                <form method="POST" className="register-form" id="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="email" id="your_name" placeholder="Email" onChange={this.handleChange} value={this.state.email} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="password" id="your_pass" placeholder="Password" onChange={this.handleChange} value={this.state.password} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div className="form-group form-button">
                                        <button style={{ border: "none" }} type="submit" name="signup" id="signup" className="form-submit" value="Register" disabled={this.state.loading}>{this.state.loading ? "Loading..." : "Log in"}</button>

                                    </div>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><Link to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="display-flex-center zmdi zmdi-google"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}