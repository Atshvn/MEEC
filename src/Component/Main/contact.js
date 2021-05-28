import { CarouselSubject, Partner } from "./Chil"
import React, { useEffect } from "react";
import SimpleMap from "../../Commom/Map";
export const Contact = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return (
        <>
            <div class="container-fluid">
                <img className=" w-100" src="../assets/images/bg_contact.jpg" alt="" />

            </div>
            <div class="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Với mục tiêu phát triển mạnh mẽ trong tương lai,
                            Anh Ngữ MEEC đã, đang và luôn chào đón những đối tác,
                            học viên muốn làm việc, tìm hiểu về trung tâm.
                            Để kết nối với chúng tôi, xin vui lòng liên hệ:
                        </p>
                        <h1 className="f-700">Trung tâm anh ngữ Master Easy English Center</h1>
                        <p><i class="fas fa-map-marker pr-2 cl-i pt-4"></i>Số 12, Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.HCM</p>
                        <p><i class="fas fa-phone pr-2 cl-i pt-2"></i>0971 718 434 - 0343 142 134</p>
                        <p><i class="fas fa-envelope pr-2 cl-i pt-2"></i>meeccenter.vn@gmail.com</p>
                        <ul class="list-unstyled pt-2">
                            <li>
                                <a href="#!" class="btn btn-facebook waves-effect waves-light mr-2" target="_blank">
                                    <i class="fab fa-facebook-f pr-1 pl-1" ></i>
                                </a>
                                <a href="" class="btn btn-twitter waves-effect waves-light mr-2">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="btn btn-googleplus waves-effect waves-light mr-2">
                                    <i class="fab fa-google-plus"></i>
                                </a>
                                <a href="" class="btn btn-youtube waves-effect waves-light mr-2">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="cl-i f-400">Mọi thắc mắc xin gửi về</h4>
                        <h1 className="f-700 pt-1">Hòm thư góp ý</h1>
                        <form action="" className="pt-4">
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <div class="form-group">
                                        {/* <span class="label" >Username</span> */}
                                        <div class="input-group">

                                            <input type="text" class="form-control form-custom bd-input pt-4 pr-4 pb-4 pl-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    fontSize: '15px'
                                                }}
                                                placeholder="Họ và tên" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <div class="form-group">
                                        {/* <span class="label" >Username</span> */}
                                        <div class="input-group">
                                            <input type="email" class="form-control form-custom bd-input pt-4 pr-4 pb-4 pl-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    fontSize: '15px'
                                                }}
                                                placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <div class="form-group">
                                        {/* <span class="label" >Username</span> */}
                                        <div class="input-group">
                                            <input type="number" class="form-control form-custom bd-input pt-4 pr-4 pb-4 pl-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    fontSize: '15px'
                                                }}
                                                placeholder="Số điện thoại" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <div class="form-group">
                                        {/* <span class="label" >Username</span> */}
                                        <div class="input-group">
                                            <textarea rows='5' class="form-control form-custom bd-input pr-4 pb-4 pl-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    fontSize: '15px'
                                                }}
                                                placeholder="Lời nhắn" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-lg w-100 bg-i">Gửi tin nhắn</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5">
            <SimpleMap/>
            </div>
            <Partner />
        </>
    )
}