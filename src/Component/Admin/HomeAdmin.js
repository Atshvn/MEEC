import { TopMenuAdmin } from "../Template"
import React, { useState, useEffect, useRef } from "react";
import { ContentAccount } from "./ContentAccount";
export const HomeAdmin = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
        
    }, [])

    return(
        <div className="unsticky-layout">
            <TopMenuAdmin/>
            <ContentAccount/>


        </div>
    )
}