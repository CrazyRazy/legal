import React from 'react';
import avatar from '../assets/images/users/avatar-2.jpg';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import logoSmDark from "../assets/images/logo.png";
import logoSmLight from "../assets/images/logo-sm-light.png";
import logoDark from "../assets/images/logo.png";
import logoLight from "../assets/images/logo-light.png";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Navigation from "./Navigation";


function Header(props) {
    return (
        <React.Fragment>

            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to='/dashboard' className="logo logo-dark">
                            <span className="logo-sm">
                            <img
                                src={logoSmDark} height="22" alt="logo"/>
                            </span>

                                <span className="logo-lg">
                            <img
                                src={logoDark} height="50" alt="logo"/>
                            </span>
                            </Link>

                            <Link to='/dashboard' className="logo logo-light">
                            <span className="logo-sm">
                            <img
                                src={logoSmLight} height="22" alt="logo"/>
                            </span>

                                <span className="logo-lg">
                            <img
                                src={logoLight} height="20" alt="logo"/>
                            </span>
                            </Link>

                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 d-lg-none header-item"
                                data-toggle="collapse" data-target="#topnav-menu-content">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>

                    </div>

                    <div className="d-flex">

                        {/*
                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-apps-2-line"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <div className="px-lg-2">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/github.png" alt="Github"/>
                                                <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                <span>Dribbble</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                <span>Dropbox</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                                <span>Mail Chimp</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/slack.png" alt="slack"/>
                                                <span>Slack</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="ri-fullscreen-line"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-notification-3-line"></i>
                            <span className="noti-dot"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                             aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#!" className="small"> View All</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar
                                 style={{
                                     maxHeight: "230ox"
                                 }}>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-3.jpg"
                                             className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="ri-checkbox-circle-line"></i>
                                                </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-4.jpg"
                                             className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                    <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                                </a>
                            </div>
                        </div>
                    </div>*/}

                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src={avatar}
                                     alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ml-1">Kevin</span>
                                <ChevronDownIcon className="d-none d-xl-inline-block"/>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">

                                <a className="dropdown-item" href="#"><i className="ri-user-line align-middle mr-1"/> Profile</a>
                                <a className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle mr-1"/> My
                                    Wallet</a>
                                <a className="dropdown-item d-block" href="#"><span
                                    className="badge badge-success float-right mt-1">11</span><i
                                    className="ri-settings-2-line align-middle mr-1"/> Settings</a>
                                <a className="dropdown-item" href="#"><i
                                    className="ri-lock-unlock-line align-middle mr-1"/> Lock
                                    screen</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item text-danger" href="#"><i
                                    className="ri-shut-down-line align-middle mr-1 text-danger"/> Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Navigation/>

        </React.Fragment>
    );
}

export default Header;
