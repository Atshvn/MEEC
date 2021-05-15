
import React, { useState, useEffect, useRef } from "react";
import logo from '../../logo2.png';
import { Link } from 'react-router-dom';
import { Alertsuccess, SelectCourse } from "../../Commom";



export const Login = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    const [ShowLogin, setShowLogin] = useState(true);
    const [CountID, setCountID] = useState(0)
    const handleClickRegister = () => {
        setShowLogin(!ShowLogin)
    }
    const handleLogin = () => {
        Alertsuccess("Đăng nhập thành công");

    }

    return (
        <div class="container-fluid ">
            <div className="login">
                <div className="row ">
                    <div className="col-md-8 col-12 pull-right ">
                    </div>
                    <div className="col-md-4 col-12 login-form pr-5 pl-5" >
                        <div className={ShowLogin ? "main-login " : "main-login display-none"}>
                            <div className="pt-5 pb-5">
                                <Link to="/">
                                    <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="pb-3">
                                <h2 style={{ fontWeight: '900' }}>Đăng nhập vào MEEC</h2>
                                <p style={{ fontSize: '1rem', fontWeight: '500' }}>Học tập, thi online, xem điểm và thảo luận cùng hơn 10000 thành viên khác trong cộng đồng MEEC</p>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                    </div>
                                    <input type="text" class="form-control form-custom" placeholder="Email của bạn" />
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                    </div>
                                    <input type="text" class="form-control form-custom" placeholder="Mật khẩu" />
                                </div>
                            </div>
                            <div className="font-1rem mb-3" style={{ textDecoration: 'underline' }}>
                                <Link to="/forgot-password"> Quên mật khẩu?</Link>
                            </div>
                            <div>
                                <Link to="/main" onClick={handleLogin} class="btn btn-success w-100 mb-3 font-1rem pt-2 pb-2">Đăng nhập vào MEEC</Link>
                            </div>
                            <div className="font-1rem" >
                                Bạn chưa có tài khoản MEEC?
                                <span className="text-success font-weight-bold pointer" onClick={handleClickRegister}> Đăng ký</span>
                            </div>
                        </div>
                        <div className={ShowLogin ? "main-signup display-none" : "main-signup "}>
                            <div className="pt-5 pb-5">
                                <Link to="/">
                                    <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="pb-3">
                                <h2 style={{ fontWeight: '900' }}>Mở tài khoản</h2>
                                <p style={{ fontSize: '1rem', fontWeight: '500' }}>Học tập, thi online, xem điểm và thảo luận cùng hơn 10000 thành viên khác trong cộng đồng MEEC</p>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                   
                                    <input type="text" class="form-control form-custom pl-2" placeholder="Tên của bạn" />
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text"><i class="far fa-user"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    
                                    <input type="text" class="form-control form-custom pl-2" placeholder="Email của bạn" />
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    <SelectCourse
                                        onSelected={e => setCountID(e.value)}
                                        items={CountID}>
                                    </SelectCourse>
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-success w-100 mb-3 font-1rem pt-2 pb-2">Nhận tài khoản qua email</button>
                            </div>
                            <div className="font-1rem" >
                                Đã có tài khoản MEEC?
                                <span className="text-success font-weight-bold pointer" onClick={handleClickRegister}> Đăng nhập</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}