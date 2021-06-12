
import React, { useState, useEffect, useRef, useContext } from "react";
import logo from '../../logo2.png';
import { Link } from 'react-router-dom';
import { Alerterror, Alertsuccess, Alertwarning } from "../../Commom";
import { SystemAPI } from "../../Service";
import { useHistory } from "react-router-dom";
import { store } from "../../Store/store";


export const RegisterCourse = () => {
    const CourseId =  JSON.parse(localStorage.getItem("CourseId"));
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    useEffect(() => {
       MEEC_Local_fee()
    }, []);

    const [Fees, setFees] = useState({id: 0, fee: '', name: '' })

    const MEEC_Local_fee = () => {
        const fees = [
            { id: 1, fee: '5.900.000 VND', name: 'Thành thạo 4 kĩ năng TOEIC' },
            { id: 2, fee: '7.000.000 VND' , name: 'TOEIC 0 - 500 từ mất gốc'},
            { id: 3, fee: '3.500.000 VND' , name: 'Luyện thi TOEIC cấp tốc'},
            { id: 4, fee: '10.000.000 VND', name: 'Tiếng anh giao tiếp' },
            { id: 5, fee: '6.000.000 VND' , name: 'Tiếng anh cho thiếu nhi'},
            { id: 6, fee: '5.900.000 VND', name: 'Tiếng anh cho người đi làm' },
        ]
        const item = fees.find(i => i.id === CourseId)
        item && setFees(item)
    }

    let history = useHistory();
    const handleLogin = async () => {
        history.push("/");
    }

    return (
        <div class="container-fluid ">
            <div className="register">
                <div className="row " style={{ marginTop: '3%' }}>
                    <div className="col-md-2 col-12 pull-right ">
                    </div>
                    <div className="col-md-8 col-12  pr-5 pl-5 justity-content-center align-items-center " style={{ backgroundColor: '#fff' }} >
                        <div className="main-login " >
                            <div className="pt-5 pb-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Link to="/">
                                            <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                                        </Link>

                                    </div>
                                    <div className="col-md-8 mt-2">
                                        <img className=" m-auto" src="assets\images\Welcome.gif" alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <h1 className="f-900 t text-center pb-4" >Chúc mừng bạn đã đăng kí khóa học thành công</h1>
                                <div  >
                                    <div className="row">
                                        <h3 className="col-md-7 f-400">
                                        Khoá học: {Fees.name}
                                        </h3>
                                        <h3 className="col-md-5 f-400">
                                        Học phí: {Fees.fee}
                                        </h3>
                                    </div>
                                </div>
                                <h3 className="f-400">Để kích hoạt tài khoản, vui lòng thanh toán khóa học theo 2 cách sau:</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>1. Đến trực tiếp trung tâm gần nhất để thanh toán.</li>
                                    <li>2. Chuyển khoản trực tiếp qua số tài khoản của trung tâm, nội dung chuyển khoản gồm email và khóa học đăng kí.</li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-center" >
                                <div >
                                    <div className="card bx mr-5">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <img className=" m-auto" src="assets\images\vcb.png" alt="" height="50px" width="150px" />
                                            </div>
                                            <p className="m-0 mt-3">Số tài khoản: 0911000067950</p>
                                            <p className="m-0">Chủ tài khoản: Hồ Sỹ Tuấn Anh</p>
                                            <p className="m-0">Chi nhánh: Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="card bx">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <img className=" m-auto" src="assets\images\vtb.png" alt="" height="50px" width="150px" />
                                            </div>
                                            <p className="m-0 mt-3">Số tài khoản: 0343142341123</p>
                                            <p className="m-0">Chủ tài khoản: Lê Thông</p>
                                            <p className="m-0">Chi nhánh: Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button id="click" onClick={handleLogin} class="btn btn-lg bg-i w-30 mb-3 font-1rem pt-2 pb-2">Trở về trang chủ</button>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-2 col-12 pull-right ">
                    </div>
                </div>
            </div>
        </div>
    )
}