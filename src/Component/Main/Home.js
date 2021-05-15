import { Banner, CarouselSubject, Intro, Partner } from "./Chil"
import React, { useState, useEffect, useRef } from "react";
import { CourseAPI } from "../../Service";

export const Home = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return(
        <>
        <Banner/>
        <Intro/>
        <CarouselSubject title={"Các khóa học nổi bật"}/>
        
        <Partner/>
        </>
    )
}