import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useRef } from "react";

export const User = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    return(
        <div>
            <TopMenuUser/>
           <div className="row">
           <div className="col-md-4">
                <SiderBarUser/>
            </div>
            <div className="col-md-8 mt-4" >
                <h3 className=" f-900">Tài khoản: Usename</h3>
                <p>Quản lý các thông tin cá nhân</p>
            </div>
           </div>
        </div>
    )
}