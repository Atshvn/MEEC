
import React, { useState, useEffect, useRef } from "react";
import { CourseAPI } from "../../../Service";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export const CarouselSubject = ({

    title = '',
    className = ""
}) => {
    useEffect(() => {
        MEEC_Course_List();
    }, [])
    const [Data, setData] = useState([])
    const MEEC_Course_List = async () => {
        try {
            const response = await CourseAPI.getAll();

            setData(response);
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }
    const RenderCourse = () => {
        return Data.map((item, index) => {
           return(
            <div key={index} class="col-md-4 col-12">
            <div class="card bx">
                <img class="card-img-top img-fluid" src={`assets/images/banner-course${index+1}.jpg`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title f-900 font-20">{item.name}</h5>
                    <p class="card-text">{item.description}
                                    </p>
                    <p class="card-text">
                        <div className="row">
                            <div className="col-6">
                                <small class=" align-middle f-900">{item.timeStudy} giờ</small>
                            </div>
                            <div className="col-6">
                                <Link to="/course1" style={{ display: 'block', color: '#555' }} className="btn btn-rounded bg-i w-100">
                                    <span class="color-white font-18"> Xem thêm</span>
                                </Link>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
           )
        })
    }
    return (
        <>
            <div class="container mt-5">
                <div class="mb-4">
                    <h3 className={className} style={{ fontWeight: '800' }}><i class="far fa-star pr-2 " style={{ color: '#dbd51f' }}></i>{title}</h3>
                </div>

                <div class="row">
                <RenderCourse/>

                </div>


            </div>
        </>
    );
}