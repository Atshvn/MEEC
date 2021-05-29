import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useContext } from "react";
import { TestAPI, CourseAPI } from "../../Service";
import { Alertsuccess, FormatDate } from "../../Commom";
import { RunTest } from "./RunTest";
import { useHistory } from "react-router";
import { timers } from "jquery";
// import { store } from "../../Store/store";

export const Mid = () => {
    const history = useHistory()
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));

    }, [])
    const UserData = JSON.parse(localStorage.getItem("UserInfor"));
   
   
    return (
        < >
            <div >
                <TopMenuUser />
                <div className="row">
                    <div className="col-md-4 col-12">
                        <SiderBarUser />
                    </div>
                    <div className="col-md-8 col-12 mt-4 text-center" style={{ marginLeft: '-50px' }}>
                        <h3 className=" f-900">Chào mừng bạn đến với hệ thống học viên của MEEC</h3>
                        <p>Vui lòng chọn các lựa chọn để thực hiện</p>
                        <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar.jpg" alt="" width="300" />
                        
                    </div>
                </div>
            </div>

            

        </>
    )
}