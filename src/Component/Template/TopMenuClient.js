import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png'

export const TopMenuClient = () => {
    const [active, setActive] = useState(false)
    const [Linkk, setLink] = useState("");
    const [Name, setName] = useState("GÓC HỌC VIÊN")

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 10) {
                setActive(true)
            }
            else {
                setActive(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        if (UserData === null ) {
            setLink('/login')
            setName('GÓC HỌC VIÊN')
        } else {
            setLink('/mid')
            setName(UserData.fullName)
        }

    })
    return (
        <>
            <header class="header main-header" style={{ marginBottom: '80px' }}>

                <div class="d-block">
                    <nav class="navbar navbar-expand-lg fixed-top p-0" >
                        <div class="container p-0" >
                            <Link to="/" class="navbar-brand text-uppercase font-weight-bold">
                                <img class="logo" src={logo} alt="" />
                            </Link>
                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

                            <div id="navbarSupportedContent" class="collapse navbar-collapse" >
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdownmenu ">
                                        <Link to="/course" class="nav-link text-uppercase f-900"
                                        >
                                            Các khóa học
                                            <span class="sr-only">(current)
                                            </span>
                                        </Link>
                                        <div class="dropdown-content">
                                            <Link to="course1" href="#">Thành thạo 4 kĩ năng TOEIC</Link>
                                            <Link to="course2" href="#">TOEIC 0 - 500 từ mất gốc</Link>
                                            <Link to="course3" href="#">Luyện thi TOEIC cấp tốc</Link>
                                            <Link to="course4" href="#">Tiếng anh giao tiếp</Link>
                                            <Link to="course5" href="#">Tiếng anh cho thiếu nhi</Link>
                                            <Link to="course6" href="#">Tiếng anh cho người đi làm</Link>
                                        </div>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <Link to="for-me" href="#" class="nav-link text-uppercase f-900">Về chúng tôi</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="recruit" href="#" class="nav-link text-uppercase f-900">Cơ hội nghề nghiệp</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="contact" href="#" class="nav-link text-uppercase f-900">Liên hệ</Link>
                                    </li>
                                    <li class="nav-item btn-login" >
                                        <Link to={Linkk} class="nav-link text-uppercase f-900 btn bg-i color-white ">{Name}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}