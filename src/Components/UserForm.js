import React, {useState} from "react";
import * as httpApi from "../Hooks/HTTPRequests";

function UserForm(props) {

    let gender = null;
    let province = null;
    let town = null;
    let role = null;

    const genderUrl = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchGender`;
    const provinceUrl = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchProvince`;
    const townUrl = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchTown/provinceID/`;
    const roleUrl = `http://ec2-18-217-8-129.us-east-2.compute.amazonaws.com:8820/PrimenetLegal/api/request/fetchRole`;
    let genders = httpApi.useAxiosGet(genderUrl);
    let provinces = httpApi.useAxiosGet(provinceUrl);
    let roles = httpApi.useAxiosGet(roleUrl);
    if (genders.loading && provinces.loading) {
        gender = <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"/>
                </div>
            </div>
        </div>
    } else if (genders.error || provinces.error) {
        gender = <p>An error occurred</p>
    }

    if (genders.data) {
        const statusCode = genders.data.resultStatus.StatusCode;

        if (statusCode !== 200) {
            gender = <option value=""/>
        } else {
            {
                gender = genders.data.result.map((gender) =>
                    <option key={gender.genderID} value={gender.genderID}> {gender.gender} </option>
                )
            }
        }
    }

    if (provinces.data) {
        const statusCode = provinces.data.resultStatus.StatusCode;
        if (statusCode !== 200) {
            province = <option value=""/>
        } else {
            province = provinces.data.result.map((province) =>
                <option key={province.provinceID} value={province.provinceID}> {province.provinceName} </option>
            )
        }
    }

    if (roles.data) {
        const statusCode = roles.data.resultStatus.StatusCode;
        if (statusCode !== 200) {
            role = <option value=""/>
        } else {
            {
                role = roles.data.result.map((role) =>
                    <option key={role.roleID} value={role.roleID}> {role.role} </option>
                )
            }
        }
    }


    const [currentProvince, setCurrentProvince] = useState('');

    function changeProvince(event) {
        setCurrentProvince(event.target.value);
    }

    let towns = httpApi.useAxiosGet(townUrl + currentProvince);
    if (towns.data) {
        const statusCode = genders.data.resultStatus.StatusCode;
        console.log(towns.data);
        if (statusCode !== 200) {
            town = <option value=""/>
        } else {
            town = towns.data.result.map((town) =>
                <option key={town.townID} value={town.townID}> {town.town} </option>
            )
        }
    }


    return (
        <form className="custom-validation">
            <h4 className="card-title mb-4">Personal Details</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" required name="firstname" onChange={props.onChange}
                               value={props.user.firstname}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="othername">Other Name</label>
                        <input type="text" className="form-control" required name="othername" onChange={props.onChange}
                               value={props.user.othername}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" required name="lastname" onChange={props.onChange}
                               value={props.user.lastname}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group position-relative">
                        <label htmlFor="validationTooltip01">Gender</label>
                        <select className="form-control" name="gender" id="gender" value={props.user.gender || ""}
                                onChange={props.onChange}>
                            <option value=""/>
                            {gender}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group position-relative">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" className="form-control" id="dateOfBirth"
                               value={props.user.dateOfBirth} required name="dateOfBirth" onChange={props.onChange}/>

                    </div>
                </div>

            </div>

            <h4 className="card-title mb-2 mt-3">Address Information</h4>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="province">Province</label>
                        <select className="form-control" name="province" id="province" onChange={changeProvince}
                                value={currentProvince || ""}>
                            <option value=""/>
                            {province}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="town">Town</label>
                        <select className="form-control" name="townID" id="town" value={props.user.townID || ""}
                                onChange={props.onChange}>
                            <option value=""/>
                            {town}

                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="streetName">Street Name</label>
                        <input type="text" className="form-control" required name="streetName" onChange={props.onChange}
                               value={props.user.streetName}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="text" className="form-control" required name="zipcode" onChange={props.onChange}
                               value={props.user.zipcode}/>
                    </div>
                </div>
            </div>

            <h4 className="card-title mb-2 mt-3">Account Details</h4>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" required name="username" onChange={props.onChange}
                               value={props.user.username}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" required name="password" onChange={props.onChange}
                               value={props.user.password}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group position-relative">
                        <label htmlFor="role">Role</label>
                        <select className="form-control" name="roleID" id="role" value={props.user.roleID || ""}
                                onChange={props.onChange}>
                            <option value=""/>
                            {role}
                        </select>
                    </div>
                </div>
            </div>

            <div className="form-group mb-0">
                <div>
                    <button type="submit" value="save" className="btn btn-primary waves-effect waves-light mr-1">
                        Submit
                    </button>
                    <button type="reset" className="btn btn-secondary waves-effect">
                        Cancel
                    </button>
                </div>
            </div>
        </form>

    )

}

export default UserForm;