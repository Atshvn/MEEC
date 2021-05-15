import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useRef } from "react";
import { Alertsuccess } from "../../Commom";
export const MainUser = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
        Alertsuccess("Đăng nhập thành công");
    }, [])

    const date = new Date();
    const temp = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    return (
        <div>
            <TopMenuUser />
            <div className="row">
                <div className="col-md-4 col-12">
                    <SiderBarUser />
                </div>
                <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                    <h3 className=" f-900">Khu vực thi cử</h3>
                    <p>Các bài thi của lớp học sẽ được hiển thị dưới đây</p>
                    <div className="row">
                        <div className="col-md-10 col-12">
                            <div class="card-box" style={{ backgroundColor: '#F8F9FF', border: 'none !important' }}>

                                <ul class="nav nav-tabs tabs-bordered">
                                    <li class="nav-item nav-default">
                                        <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline "></i></span>
                                            <span class="d-none d-sm-block font-18">Đang diễn ra</span>
                                        </a>
                                    </li>
                                    <li class="nav-item nav-default">
                                        <a href="#profile-b1" data-toggle="tab" aria-expanded="true" class="nav-link ">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-account-outline "></i></span>
                                            <span class="d-none d-sm-block font-18">Sắp diễn ra</span>
                                        </a>
                                    </li>
                                    <li class="nav-item nav-default">
                                        <a href="#messages-b1" data-toggle="tab" aria-expanded="false" class="nav-link">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-email-outline "></i></span>
                                            <span class="d-none d-sm-block font-18">Đã kết thúc</span>
                                        </a>
                                    </li>

                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane show active" id="home-b1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-success">Vào thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-success">Vào thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-success">Vào thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-success">Vào thi</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane " id="profile-b1">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class="row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-warning">Nhắc thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class="row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-warning">Nhắc thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-warning">Nhắc thi</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-warning">Nhắc thi</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="messages-b1">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-danger">Đã hết thời gian</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class=" row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-danger">Đã hết thời gian</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class="row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-danger">Đã hết thời gian</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="card card-body card-test">
                                                    <h4 class="card-title">Test name</h4>
                                                    <p class="row">
                                                        <span className="col-md-6">Khóa học: Toeic 450 </span>
                                                        <span className="col-md-6">Ngày thi: {temp}</span>
                                                        <span className="col-md-6">Số lượng câu: 30</span>
                                                        <span className="col-md-6">Thời gian: 30 phút</span>
                                                    </p>
                                                    <a href="#" class="btn btn-danger">Đã hết thời gian</a>
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
        </div>
    )
}