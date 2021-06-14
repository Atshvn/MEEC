import { useState, useEffect } from "react";
import { Link,NavLink ,useHistory } from "react-router-dom"
import { Alertinfo, Alertwarning } from "../../Commom";

export const SiderBarUser = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("")
    const history = useHistory()

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));

        setEmail(UserData.email)
        setUserName(UserData.fullName)
    }, [])
   
    return (
        <div className="sider-bar">
               <Link to="/profile" className="row user-bar ">
               <div className="col-md-2">
                    <img className="avatar" src="assets\images\avatar.jpg" alt="" />
                </div>
                <div className="col-md-10 pl-4">
                    <h5 class="card-title t f-900">{userName}</h5>
                    <h6 class="card-subtitle text-muted">Người dùng tại MEEC</h6>
                </div
                ></Link>

            <ul class="list-group bd-none menu-sider">
                <li class="list-group-item bd-none ">
                    <Link class="nav-link font-weight-bold " activeClassName="active" to="/main"><i class="fas fa-angry mr-3"></i>Khu vực thi</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold"  activeClassName="active"  to="/result"><i class="fas fa-angry mr-3"></i>Kết quả học tập</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" activeClassName="active"  to="/schedule" ><i class="fas fa-angry mr-3"></i>Lịch học</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" activeClassName="active" to="/documents" >
                        <i class="fas fa-angry mr-3"></i>Tài liệu từ giảng viên</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" activeClassName="active"  onClick={ e => Alertinfo("Chức năng đang được cập nhật, vui lòng thử lại sau")}>
                        <i class="fas fa-angry mr-3"></i>Đang cập nhật</Link>
                </li>
            </ul>
        </div>


    )
}