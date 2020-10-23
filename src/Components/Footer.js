import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-right d-none d-sm-block">
                            © {(new Date().getFullYear())} Powered by <i className="mdi mdi-heart text-danger"></i> by Primenet
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;