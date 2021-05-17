import { TopMenuAdmin } from "../Template"
import React, { useState, useEffect, useRef } from "react";
import { ContentAccount } from "./ContentAccount";
import { ContentQuestion } from "./ContentQuesion";
export const Question = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
        
    }, [])
    

    return(
        <div className="unsticky-layout">
            <TopMenuAdmin/>
            <ContentQuestion/>


        </div>
    )
}