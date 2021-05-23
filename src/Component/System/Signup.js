


import React, { useState, useEffect, useRef } from "react";
import logo from '../../logo2.png';
import { Link } from 'react-router-dom';
import { Alertsuccess, SelectCourse } from "../../Commom";

export const Signup = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    const [CountID, setCountID] = useState(0)
 


    return (
        <div class="container-fluid ">
            <div className="login">
                <div className="row ">
                    <div className="col-md-8 col-12 pull-right ">
                    </div>
                    <div className="col-md-4 col-12 login-form pr-5 pl-5" >
                        
                        <div className= "main-signup ">
                            <div className="pt-5 pb-5">
                                <Link to="/">
                                    <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="pb-3">
                                <h2 style={{ fontWeight: '900' }}>Đăng kí khóa học</h2>
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
                                <Link to="/login" className="text-success font-weight-bold pointer" > Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}