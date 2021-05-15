import { TopMenuAdmin } from "../Template"
import React, { useState, useEffect, useRef } from "react";
import { ContentAccount } from "./ContentAccount";
import { ContentQuestion } from "./ContentQuesion";
import { QuestionAPI } from "../../Service";
import { DataTable } from "../../Commom/DataTable";
export const Question = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
        
    }, [])
    

    const [data, setData] = useState([])
    return(
        <div className="unsticky-layout">
            <TopMenuAdmin/>
            <ContentQuestion/>


        </div>
    )
}