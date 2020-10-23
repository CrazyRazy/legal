import React, {useState} from 'react';
import '../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import '../../assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import '../../assets/libs/datatables.net-select-bs4/css/select.bootstrap4.min.css';
import '../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import {Link, Prompt} from "react-router-dom";
import * as httpApi from "../../Hooks/HTTPRequests";
import Table from "../../Components/Table";
import RoleForm from "../../Components/RoleForm";


function Roles(props) {

    let content = null;
    /*const url = `http://localhost:5000/roles`;*/
    const url = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchRole`;

    let roles = httpApi.useAxiosGet(url);

    if (roles.loading) {
        content = <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"/>
                </div>
            </div>
        </div>
    } else if (roles.error) {
        content = <p>An error occurred</p>
    }

    if (roles.data) {
        console.log(roles.data.resultStatus.StatusCode);

        const statusCode = roles.data.resultStatus.StatusCode;

        if (statusCode !== 200){
            content = <p>An error occurred</p>
        } else {
               content =
           <table id="datatable" className="table table-bordered dt-responsive nowrap"
                  style={{
                      borderCollapse: "collapse",
                      borderSpacing: "0",
                  }}>
               <thead>
               <tr>
                   <th>Role</th>
                   <th>Description</th>
                   <th>Actions</th>
               </tr>
               </thead>
               <tbody>

               {roles.data.result.map((role) =>

                  <tr key={role.roleID}>
                       <td className="">{role.role}</td>
                       <td className="">{role.roleDescription}</td>
                       <td className="">
                           <div className="col-md-6">
                               <div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
                                   <Link className="btn btn-info" to={`/roles/${roles.roleID}`}> View </Link>
                                   <Link className="btn btn-primary" to={`/roles/${roles.roleID}`}> Edit </Link>
                                   <Link className="btn btn-danger" to={`/roles/${roles.roleID}`}> Delete </Link>

                               </div>
                           </div>


                       </td>
                   </tr>
               )}

               </tbody>
           </table>
        }
    }


    const [role, setRole] = useState({
        id: null,
        roleType: "",
        roleDescription: ""
    });

    function handleChange({target}) {
        const updatedRole = {...role, [target.name]: target.value};
        setRole(updatedRole);
    }

    function handleSubmit(event) {
        event.preventDefault();
        httpApi.useAxiosPost(url, role).then(()=>
        props.history.push("/roles"));
    }

    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Roles</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="#">Administration</a></li>
                                    <li className="breadcrumb-item active">Roles</li>
                                </ol>
                            </div>

                        </div>
                        <div className="btn-group float-right mb-3">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target=".bs-example-modal-center">New Role
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Roles</h4>


                                {content}

                                <div className="modal fade bs-example-modal-center" tabIndex="-1" role="dialog"
                                     aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0">Center modal</h5>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <RoleForm role={role} onChange={handleChange} onSubmit={handleSubmit}/>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Roles;
