import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../logo.png'


export const TopMenuUser = () => {


    const history = useHistory();
    const HandleLogout = () => {
        history.push("/login");
        localStorage.removeItem("UserInfor");
    }
    return (
        <>
            <header class="header main-header" style={{ marginBottom: '80px' }}>
                <div class="d-block">
                    <nav class="navbar navbar-expand-lg fixed-top pt-0 pb-0 " >
                        <div class="container-fluid mr-5 pr-5 ml-2">
                            <Link to="/" class="navbar-brand text-uppercase font-weight-bold">
                                <img class="logo" src={logo} alt="" />
                            </Link>
                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

                            <div id="navbarSupportedContent" class="collapse navbar-collapse" >
                                <ul class="navbar-nav w-100">
                                    <li className="w-100">
                                        <div className="text-center">
                                            <img className=" m-auto" src="assets\images\Welcome.gif" alt="" />

                                        </div>
                                    </li>
                                    <li class="nav-item dropdownmenu ml-auto">

                                        <Link class="nav-link text-uppercase font-weight-bold"
                                        >
                                            <img className="avatar2" src="assets\images\avatar.jpg" alt="" />
                                        </Link>
                                        <div class="dropdown-content" style={{ marginLeft: '-80px' }}>
                                            <Link to="profile" href="#">Trang c?? nh??n</Link>
                                            <Link onClick={HandleLogout} href="#">????ng xu???t</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}