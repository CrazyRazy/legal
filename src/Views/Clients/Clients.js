import React from 'react';
import {Link} from "react-router-dom";
import {useAxiosGet} from "../../Hooks/HTTPRequests";
import Table from "../../Components/Table";


function Clients(props) {

    let content = null;
    const url = `http://localhost:5000/clients`;

    let clients = useAxiosGet(url);

    if (clients.loading){
        content = <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"></i>
                </div>
            </div>
        </div>
    } else if (clients.error){
        content = <p>An error occurred</p>
    }

    if (clients.data) {
        console.log(clients.data);
        content =
            <table id="datatable" className="table table-bordered dt-responsive nowrap"
                   style={{
                       borderCollapse: "collapse",
                       borderSpacing: "0",
                       width: "100%",
                   }}>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Client Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {clients.data.map((client) =>

                    <tr>
                        <td className="">{client.firstName}</td>
                        <td className="">{client.lastName}</td>
                        <td className="">{client.clientType}</td>
                        <td className=""><Link to={`/clients/${client.id}`}>
                            <button>
                                View
                            </button>
                        </Link>
                        </td>
                    </tr>


                )}
                </tbody>
            </table>

    }



    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Clients</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Clients</a></li>
                                    <li className="breadcrumb-item active">Clients</li>
                                </ol>
                            </div>

                        </div>
                        <div className="btn-group float-right mb-3">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target=".bs-example-modal-lg">New Client
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Clients</h4>



                                {content}


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Clients;
