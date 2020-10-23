import React from 'react';
import {NavLink} from "react-router-dom";
import AccountGroupIcon from 'mdi-react/AccountGroupIcon'
import GavelIcon from 'mdi-react/GavelIcon'
import DashboardIcon from 'mdi-react/ViewDashboardIcon'
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import logoDark from "../assets/images/logo-dark.png";


function NavigationMenu(props) {
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                    <div className="collapse navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink to='/dashboard' className="nav-link"> <DashboardIcon className="mr-2"/> Dashboard </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/cases' className="nav-link"> <GavelIcon className="mr-2"/> Cases </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/clients' className="nav-link"> <AccountGroupIcon className="mr-2"/> Clients </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-admin-line mr-2"></i> Administration <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="topnav-layout">
                                    <NavLink to='/users' className="dropdown-item"> User Accounts </NavLink>
                                    <NavLink to='/roles' className="dropdown-item"> Roles </NavLink>
                                    <NavLink to='/privileges' className="dropdown-item"> Privileges  </NavLink>
                                </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavigationMenu;