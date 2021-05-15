import { Link } from "react-router-dom"

export const SiderBarUser = () => {
    return (
        <div className="sider-bar">
               <Link to="/profile" className="row user-bar ">
               <div className="col-md-2">
                    <img className="avatar" src="assets\images\avatar.jpg" alt="" />
                </div>
                <div className="col-md-10 pl-4">
                    <h5 class="card-title">Atsh</h5>
                    <h6 class="card-subtitle text-muted">Người dùng tại MEEC</h6>
                </div
                ></Link>

            <ul class="list-group bd-none menu-sider">
                <li class="list-group-item bd-none active">
                    <Link class="nav-link font-weight-bold" to="/main"><i class="fas fa-angry mr-3"></i>Khu vực thi</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" to="/main"><i class="fas fa-angry mr-3"></i>Kết quả học tập</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" to=""><i class="fas fa-angry mr-3"></i>Lịch sử thi</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" to=""><i class="fas fa-angry mr-3"></i>Something</Link>
                </li>
                <li class="list-group-item bd-none">
                    <Link class="nav-link font-weight-bold" to=""><i class="fas fa-angry mr-3"></i>Something</Link>
                </li>
            </ul>
        </div>


    )
}