import React from 'react';
import {Link} from "react-router-dom";
import {useAxiosGet} from "../../Hooks/HTTPRequests";
import Table from "../../Components/Table";


function Cases(props) {

    let content = null;
    const url = `http://localhost:5000/roles`;

    let roles = useAxiosGet(url);

    if (roles.loading){
        content = <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"></i>
                </div>
            </div>
        </div>
    } else if (roles.error){
        content = <p>An error occurred</p>
    }

    if (roles.data) {
        console.log(roles.data);
        content =
            <table id="datatable" className="table table-bordered dt-responsive nowrap"
                   style={{
                       borderCollapse: "collapse",
                       borderSpacing: "0",
                       width: "100%",
                   }}>
                <thead>
                <tr>
                    <th>Role</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>


                <tbody>

                </tbody>
            </table>

    }



    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Cases</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Cases</a></li>
                                    <li className="breadcrumb-item active">Cases</li>
                                </ol>
                            </div>

                        </div>
                        <div className="btn-group float-right mb-3">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target=".bs-example-modal-lg">New Case
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Cases</h4>



                                {content}


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Cases;
