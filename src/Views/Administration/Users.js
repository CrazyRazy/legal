import React, {useState} from 'react';
import '../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import '../../assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import '../../assets/libs/datatables.net-select-bs4/css/select.bootstrap4.min.css';
import '../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import {Link, Prompt} from "react-router-dom";
import * as httpApi from "../../Hooks/HTTPRequests";
import UserForm from "../../Components/UserForm";

function Users(props) {

    let content = null;
    /*const url = `http://localhost:5000/users`;*/
    const url = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchUser`;

    let users = httpApi.useAxiosGet(url);

    if (users.loading) {
        content = <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"/>
                </div>
            </div>
        </div>
    } else if (users.error) {
        content = <p>An error occurred</p>
    }

    if (users.data) {
        const statusCode = users.data.resultStatus.StatusCode;

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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>Date Created</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    {users.data.result.map((user) =>

                        <tr key={user.userID}>
                            <td className="">{user.profile.firstname}</td>
                            <td className="">{user.profile.lastname}</td>
                            <td className="">{user.profile.emailAddress}</td>
                            <td className="">{user.role.role}</td>
                            <td className="">{user.dateCreated}</td>
                            <td className="">
                                <div className="col-md-6">
                                    <div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
                                        <Link className="btn btn-info" to={`/users/${user.userID}`}> View </Link>
                                        <Link className="btn btn-primary" to={`/users/${user.userID}`}> Edit </Link>
                                        <Link className="btn btn-danger" to={`/users/${user.userID}`}> Delete </Link>

                                    </div>
                                </div>


                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>
        }
    }



    const [user, setUser] = useState({
            firstname: "",
            othername: "",
            lastname: "",
            emailAddress: "",
            gender: null,
            dateOfBirth: "",
            townID: "",
            streetName: "",
            zipcode: "",
            postalCode: "",
            username: "",
            password: "",
            roleID: "",
    });


    function onChange({target}) {
        const updatedUser = {...user, [target.name]: target.value};
        setUser(updatedUser);
        console.log(user);

    }

/*    function handleSubmit(event) {
        event.preventDefault();
       console.log(user);

    }*/

    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Users</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="#">Administration</a></li>
                                    <li className="breadcrumb-item active">Users</li>
                                </ol>
                            </div>

                        </div>
                        <div className="btn-group float-right mb-3">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target=".bs-example-modal-center">New User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Users</h4>
                                {content}
                                <div className="modal fade bs-example-modal-center" tabIndex="-1" role="dialog"
                                     aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0">Create User Account</h5>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <UserForm user={user}
                                                          onChange={onChange} />

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

export default Users;
