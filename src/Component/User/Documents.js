import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useContext } from "react";
import { TestAPI, CourseAPI } from "../../Service";
import { Alertsuccess, FormatDate } from "../../Commom";
import { RunTest } from "./RunTest";
import { useHistory } from "react-router";
import { timers } from "jquery";
import { Link } from "react-router-dom";
// import { store } from "../../Store/store";

export const Documents = () => {
    const history = useHistory()
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));


    }, [])
    const UserData = JSON.parse(localStorage.getItem("UserInfor"));
    const countID = UserData.courseId;
    // const globalState = useContext(store);
    // const { dispatch } = globalState;

    // console.log(globalState.state)
    const [data, setData] = useState([]);
    const doc = [
        {
            name: "Mẫu câu xin nghỉ phép",
            date: '27-05-2021',
            content: 'Chúc các em học tập tốt',
            link: '/assets/docs/mau-cau-nghi-xin-phep.pdf',
            key: 0
        },
        {
            name: "Giao tiếp cơ bản",
            date: '29-05-2021',
            content: 'Tài liệu giao tiếp cơ bản',
            link: '/assets/docs/giao-tiep.docx',
            key: 0
        },
        {
            name: "Reading ETS 2018",
            date: '07-06-2021',
            content: 'Tài liệu tham khảo format mới.',
            link: 'https://drive.google.com/drive/folders/1jbnZmf8JLkcnriCQaDBROLypjeA8ERj_?usp=sharing',
            key: 1
        },
        {
            name: "ETS 2019",
            date: '07-06-2021',
            content: 'Tài liệu toeic ETS 2019',
            link: 'https://drive.google.com/drive/folders/1jbnZmf8JLkcnriCQaDBROLypjeA8ERj_?usp=sharing',
            key: 1
        }
    ]

    const filterItem = (data, item) => {
        return data.filter(i => i.testId === item);
    }

    //#region List


    const ListResult = () => {
        return (
            doc.map((item, index) => {
                return (
                    <div className="col-md-6" key={index}>
                        <div class="card bx">
                            <img class="card-img-top img-fluid" src={`assets/images/doc${index + 1}.jpg`} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title f-900 font-19 m-0">{item.name}</h5>
                                <p class="card-text mt-1 mb-1">{item.content} </p>
                                <p class="card-text">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center">
                                            <span class=" align-middle f-900">{item.date} </span>
                                        </div>
                                        <div className="col-6">
                                          {item.key === 0 ?   <Link to={item.link}   download target="_blank" style={{ display: 'block', color: '#555' }} className="btn btn-rounded bg-i w-100">
                                                <span class="color-white font-18"> Download</span>
                                            </Link>
                                            : <a href={item.link} target="_blank"  style={{ display: 'block', color: '#555' }} className="btn btn-rounded bg-i w-100">
                                            <span class="color-white font-18">Download</span>
                                        </a>
                                        }
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }



    return (
        < >
            <div>
                <TopMenuUser />
                <div className="row">
                    <div className="col-md-4 col-12">
                        <SiderBarUser />
                    </div>
                    <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                        <h3 className=" f-900">Khu vực tài liệu từ giảng viên</h3>
                        <p>Tài liệu của giảng viên gửi sẽ được hiển thị dưới đây</p>
                        <div className="row">
                            <div className="col-md-10 col-12">
                                <div class="card-box " style={{ backgroundColor: '#F8F9FF', border: 'none !important' }}>

                                    <ul class="nav nav-tabs tabs-bordered">
                                        <li class="nav-item nav-default pl-0 ">
                                            <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline "></i></span>
                                                <span class="d-none d-sm-block font-18">Danh sách tài liệu</span>
                                            </a>
                                        </li>



                                    </ul>

                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="home-b1">
                                            <div className="row">
                                                <ListResult />

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}