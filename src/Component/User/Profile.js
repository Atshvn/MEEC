import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useRef } from "react";

export const Profile = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    return (
        <div>
            <TopMenuUser />
            <div className="row">
                <div className="col-md-4 col-12">
                    <SiderBarUser />
                </div>
                <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                    <h3 className="font-weight-bold f-900 ">Tài khoản: Atsh</h3>
                    <p class="mb-4">Quản lý, cập nhật đầy đủ thông tin cá nhân để hoạt động tốt hơn trên MEEC!</p>
                    <div class="card card-body card-test bd-none mr-5">
                        <div className="row">
                            <div className="col-md-6 col-12">

                            </div>
                            <div className="col-md-6 col-12">
                                <div className="row mt-4 mr-4">
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            {/* <span class="label" >Email</span> */}
                                            <div class="input-group">
                                                <div class="input-group-prepend" >
                                                    <span class="input-group-text bd-input"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-user pl-1"></i></span>
                                                </div>
                                                <input type="text" class="form-control form-custom bd-input"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px', 
                                                    }}
                                                    placeholder="Họ và tên"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            {/* <span class="label" >Username</span> */}
                                            <div class="input-group">
                                                <div class="input-group-prepend  bd-input" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-user pl-1"></i></span>
                                                </div>
                                                <input type="text" class="form-control form-custom bd-input"
                                                    style={{
                                                        backgroundColor: '#fff', 
                                                        borderLeft: 'none', fontSize: '18px'
                                                    }}
                                                    placeholder="Username của bạn" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            {/* <span class="label" >Email</span> */}
                                            <div class="input-group">
                                                <div class="input-group-prepend" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#f0f0f0',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-envelope pl-1"></i></span>
                                                </div>
                                                <input type="text" class="form-control form-custom"
                                                    style={{
                                                        backgroundColor: '#f0f0f0',
                                                        borderLeft: 'none', fontSize: '18px', 
                                                    }}
                                                    placeholder="Email của bạn" disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                    <a href="#" class="btn btn-success w-100 font-18 pt-10 pb-10">Lưu lại</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="col-12">
                            <p>Các thông tin khác</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}