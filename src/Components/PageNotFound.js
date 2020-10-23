import React from 'react';
import errorImg from '../assets/images/error-img.png';

function PageNotFound(props) {
    return (
        <div className="my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center my-5">
                            <h1 className="font-weight-bold text-error">4 <span className="error-text">0<img
                                src={errorImg} alt="" className="error-img"/></span> 4</h1>
                            <h3 className="text-uppercase">Sorry, page not found</h3>
                            <div className="mt-5 text-center">
                                <a className="btn btn-primary waves-effect waves-light" href="index.html">Back to
                                    Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
