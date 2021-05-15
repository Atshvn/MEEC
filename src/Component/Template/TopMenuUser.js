import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png'


export const TopMenuUser = () => {
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
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item " >
                                    <Link to="/profile" class="nav-link text-uppercase font-weight-bold">
                                        <img className="avatar2" src="assets\images\avatar.jpg" alt="" />
                                        </Link>
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