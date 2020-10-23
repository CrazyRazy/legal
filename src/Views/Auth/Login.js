import React from 'react';
import logoDark from '../../assets/images/logo-dark.png'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4">
                        <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                            <div className="w-100">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9">
                                        <div>
                                            <div className="text-center">
                                                <div>
                                                    <Link to='/' className="logo"> <img
                                                        src={logoDark} height="20" alt="logo"/></Link>
                                                </div>
                                                <h4 className="font-size-18 mt-4">Sign in</h4>
                                            </div>
                                            <div className="p-2 mt-5">
                                                <form className="form-horizontal"
                                                      action="https://themesdesign.in/nazox/layouts/horizontal/index.html">

                                                    <div className="form-group auth-form-group-custom mb-4">
                                                        <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                        <label htmlFor="username">Username</label>
                                                        <input type="text" className="form-control" id="username"
                                                               placeholder="Enter username"/>
                                                    </div>

                                                    <div className="form-group auth-form-group-custom mb-4">
                                                        <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                        <label htmlFor="userpassword">Password</label>
                                                        <input type="password" className="form-control"
                                                               id="userpassword" placeholder="Enter password"/>
                                                    </div>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customControlInline"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customControlInline">Remember me</label>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <button
                                                            className="btn btn-primary w-md waves-effect waves-light"
                                                            type="submit">Log In
                                                        </button>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <a href="auth-recoverpw.html" className="text-muted"><i
                                                            className="mdi mdi-lock mr-1"></i> Forgot your password?</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="mt-5 text-center">
                                                <p>© 2020  Powered by Primenet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="authentication-bg">
                            <div className="bg-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    );
}

export default Login;