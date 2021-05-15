
import React, { useState, useEffect, useRef } from "react";
import logo from '../../logo2.png';
import { Link } from 'react-router-dom';


export const ForgotPass = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

  

    return (
        <div class="container-fluid ">
            <div className="login">
                <div className="row ">
                    <div className="col-md-8 col-12 pull-right ">
                    </div>
                    <div className="col-md-4 col-12 login-form pr-5 pl-5" >
                        <div className="main-forgot ">
                            <div className="pt-5 pb-5">
                              <Link to="/">
                              <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                              </Link>
                            </div>
                            <div className="">
                                <h2 style={{ fontWeight: '900' }}>Quên mật khẩu?</h2>
                                <p style={{ fontSize: '1rem', fontWeight: '900' }}>Hãy nhập email để được cấp lại mật khẩu mới</p>
                            </div>
                            <div className="pt-3" >
                                <p className="mb-1" style={{ fontSize: '1rem', fontWeight: '500' }}>Đặt lại mật khẩu qua email</p>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                    </div>
                                    <input type="text" class="form-control form-custom" placeholder="Email của bạn" />
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-success w-100 mb-3 font-1rem pt-2 pb-2">Reset lại mật khẩu</button>

                            </div>
                            <div className="font-1rem" >
                                Đã có tài khoản MEEC?
                                <Link to="/login" className="text-success" > Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}