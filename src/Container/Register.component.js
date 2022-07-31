import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
        this.setState({
            loading: true
        })
        const { username, email, password } = this.state;
        axios.post("/api/register", { username, email, password })
            .then(res => {
                if (res.data.error) {
                    this.setState({
                        error: res.data.error,
                        loading: false
                    })
                } else {
                    this.setState({
                        error: "",
                        loading: false
                    })
                    this.props.history.push("/");
                }
            })
    }

    render(){
        return(
            <div className="main">
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="register-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label hmtlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="username" id="name" placeholder="Username" onChange={this.handleChange} value={this.state.username} required />
                                    </div>
                                    <div className="form-group">
                                        <label hmtlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required />
                                    </div>
                                    <div className="form-group">
                                        <label hmtlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="password" id="pass" placeholder="Password" onChange={this.handleChange} value={this.state.password} required />
                                    </div>
                                    {/* <div className="form-group">
                                        <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"  onChange={this.handleChange} value={this.state.password} />
                                    </div> */}
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label hmtlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" className="term-service">Terms of service</Link></label>
                                    </div>
                                    <div className="form-group form-button">
                                        <button style={{ border: "none" }} type="submit" name="signup" id="signup" className="form-submit" value="Register" disabled={this.state.loading}>{this.state.loading ? "Loading..." : "Register"}</button>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src="images/signup-image.jpg" alt="sing up" /></figure>
                                <Link to="/" className="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}