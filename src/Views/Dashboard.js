import React from 'react';
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "../Components/Footer";
import Roles from "./Administration/Roles";

function Dashboard(props) {
    return (
        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Dashboard</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body overflow-hidden">
                                        <p className="text-truncate font-size-14 mb-2">Total Number of Cases</p>
                                        <h4 className="mb-0">1452</h4>
                                    </div>
                                    <div className="text-primary">
                                        <i className="ri-stack-line font-size-24"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body border-top py-3">
                                <div className="text-truncate">
                                            <span className="badge badge-soft-success font-size-11"><i
                                                className="mdi mdi-menu-up"> </i> 2.4% </span>
                                    <span className="text-muted ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body overflow-hidden">
                                        <p className="text-truncate font-size-14 mb-2">Open Cases</p>
                                        <h4 className="mb-0">$ 38452</h4>
                                    </div>
                                    <div className="text-primary">
                                        <i className="ri-book-read-line font-size-24"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top py-3">
                                <div className="text-truncate">
                                            <span className="badge badge-soft-success font-size-11"><i
                                                className="mdi mdi-menu-up"> </i> 2.4% </span>
                                    <span className="text-muted ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body overflow-hidden">
                                        <p className="text-truncate font-size-14 mb-2">Closed Cases</p>
                                        <h4 className="mb-0">$ 15.4</h4>
                                    </div>
                                    <div className="text-primary">
                                        <i className="ri-check-fill font-size-24"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top py-3">
                                <div className="text-truncate">
                                            <span className="badge badge-soft-success font-size-11"><i
                                                className="mdi mdi-menu-up"> </i> 2.4% </span>
                                    <span className="text-muted ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body overflow-hidden">
                                        <p className="text-truncate font-size-14 mb-2"> Number of Clients </p>
                                        <h4 className="mb-0">$ 15.4</h4>
                                    </div>
                                    <div className="text-primary">
                                        <i className="ri-user-6-fill font-size-24"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top py-3">
                                <div className="text-truncate">
                                            <span className="badge badge-soft-success font-size-11"><i
                                                className="mdi mdi-menu-up"> </i> 2.4% </span>
                                    <span className="text-muted ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8">
                        <div className="row">


                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="float-right d-none d-md-inline-block">
                                    <div className="btn-group mb-2">
                                        <button type="button" className="btn btn-sm btn-light">Today</button>
                                        <button type="button" className="btn btn-sm btn-light active">Weekly</button>
                                        <button type="button" className="btn btn-sm btn-light">Monthly</button>
                                    </div>
                                </div>
                                <h4 className="card-title mb-4">Revenue Analytics</h4>
                                <div>
                                    <div id="line-column-chart" className="apex-charts" dir="ltr"></div>
                                </div>
                            </div>

                            <div className="card-body border-top text-center">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="d-inline-flex">
                                            <h5 className="mr-2">$12,253</h5>
                                            <div className="text-success">
                                                <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                                            </div>
                                        </div>
                                        <p className="text-muted text-truncate mb-0">This month</p>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="mt-4 mt-sm-0">
                                            <p className="mb-2 text-muted text-truncate"><i
                                                className="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Year
                                                :</p>
                                            <div className="d-inline-flex">
                                                <h5 className="mb-0 mr-2">$ 34,254</h5>
                                                <div className="text-success">
                                                    <i className="mdi mdi-menu-up font-size-14"> </i>2.1 %
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="mt-4 mt-sm-0">
                                            <p className="mb-2 text-muted text-truncate"><i
                                                className="mdi mdi-circle text-success font-size-10 mr-1"></i> Previous
                                                Year :</p>
                                            <div className="d-inline-flex">
                                                <h5 className="mb-0">$ 32,695</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="float-right">
                                    <select className="custom-select custom-select-sm">
                                        <option selected>Apr</option>
                                        <option value="1">Mar</option>
                                        <option value="2">Feb</option>
                                        <option value="3">Jan</option>
                                    </select>
                                </div>
                                <h4 className="card-title mb-4">Sales Analytics</h4>

                                <div id="donut-chart" className="apex-charts"></div>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="text-center mt-4">
                                            <p className="mb-2 text-truncate"><i
                                                className="mdi mdi-circle text-primary font-size-10 mr-1"></i> Product A
                                            </p>
                                            <h5>42 %</h5>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center mt-4">
                                            <p className="mb-2 text-truncate"><i
                                                className="mdi mdi-circle text-success font-size-10 mr-1"></i> Product B
                                            </p>
                                            <h5>26 %</h5>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center mt-4">
                                            <p className="mb-2 text-truncate"><i
                                                className="mdi mdi-circle text-warning font-size-10 mr-1"></i> Product C
                                            </p>
                                            <h5>42 %</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="dropdown float-right">
                                    <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                       aria-expanded="false">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                        <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                        <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                        <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                    </div>
                                </div>

                                <h4 className="card-title mb-4">Earning Reports</h4>
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div>
                                                <div className="mb-3">
                                                    <div id="radialchart-1" className="apex-charts"></div>
                                                </div>

                                                <p className="text-muted text-truncate mb-2">Weekly Earnings</p>
                                                <h5 className="mb-0">$2,523</h5>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="mt-5 mt-sm-0">
                                                <div className="mb-3">
                                                    <div id="radialchart-2" className="apex-charts"></div>
                                                </div>

                                                <p className="text-muted text-truncate mb-2">Monthly Earnings</p>
                                                <h5 className="mb-0">$11,235</h5>
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

export default Dashboard;