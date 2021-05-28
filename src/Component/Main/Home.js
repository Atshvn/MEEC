import { Banner, CarouselSubject, Intro, Partner, Review } from "./Chil"
import React, { useState, useEffect, useRef } from "react";
import { CourseAPI } from "../../Service";

export const Home = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return (
        <>
            <Banner />
            <Intro />
            <CarouselSubject title={"Các khóa học nổi bật"} />
            <div className="container-fluid for2 mb-5" style={{paddingTop:'100px', paddingBottom:'50px'}}>
                <div className="container">
                    <h5 className="f-900 m-0">HỌC VIÊN NÓI GÌ VỀ</h5>
                    <div className="row mt-2 mb-4">
                        <div className="col-md-4">
                            <h1 className="f-900 mt-0">Trung tâm anh ngữ MEEC</h1>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Đối với chúng tôi, chất lượng giảng dạy luôn được đặt lên hàng đầu. Hơn 6 năm hoạt động, sự thành
                                công trên con đường ngoại ngữ của hơn 10.000 học viên chính là minh chứng rõ ràng nhất cho chất
                                lượng đào tạo tuyệt vời của trung tâm Anh ngữ MEEC.
                    </p>
                        </div>
                    </div>
                    <Review />
                </div>
            </div>

            <Partner />
        </>
    )
}