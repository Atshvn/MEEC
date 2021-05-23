import { Link } from "react-router-dom"

export const TopMenuAdmin = () => {
    return (
        <>
            {/* Topbar Start */}
            <div className="navbar-custom">
                <ul className="list-unstyled topnav-menu float-right mb-0">
                    
                   
                    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets\images\users\avatar-1.jpg" alt="user-image" className="rounded-circle" />
                            <span className="pro-user-name ml-1">
                                Thompson   <i className="mdi mdi-chevron-down" />
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-outline" />
                                <span>Profile</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-settings-outline" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lock-outline" />
                                <span>Lock Screen</span>
                            </a>
                            <div className="dropdown-divider" />
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-logout-variant" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect">
                            <i className="mdi mdi-settings-outline noti-icon" />
                        </a>
                    </li>
                </ul>
                {/* LOGO */}
                <div className="logo-box">
                    <Link to="/admin-main" className="logo text-center logo-dark">
                        <span className="logo-lg">
                            <img src="assets\images\logo2.png" alt height={60} />
                            {/* <span class="logo-lg-text-dark">Velonic</span> */}
                        </span>
                     
                    </Link>
                    <Link to="/admin-main" className="logo text-center logo-light">
                        <span className="logo-lg">
                            <img src="assets\images\logo2.png" alt height={60} />
                            {/* <span class="logo-lg-text-dark">Velonic</span> */}
                        </span>
                       
                    </Link>
                </div>
                {/* LOGO */}
                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button className="button-menu-mobile waves-effect">
                            <i className="mdi mdi-menu" />
                        </button>
                    </li>
                    <li className="d-none d-lg-block">
                        <form className="app-search">
                            <div className="app-search-box">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
            {/* end Topbar */} {/* ========== Left Sidebar Start ========== */}
            <div className="left-side-menu">
                <div className="slimscroll-menu">
                    {/*- Sidemenu */}
                    <div id="sidebar-menu">
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Menu</li>
                            <li>
                                <Link to="/admin-main" className="waves-effect">
                                    <i className="ion-md-speedometer" />
                                    <span>Danh sách học viên</span>
                                    <span className="badge badge-info badge-pill float-right"> 3 </span>
                                </Link>
                               
                            </li>
                            <li>
                                <Link to='/admin-test' className="waves-effect">
                                    <i className="ion-md-basket" />
                                    <span>Quản lý bài thi </span>
                                    <span className="menu-arrow" />
                                </Link>
                                <Link to="/admin-question" className="waves-effect">
                                    <i className="ion-md-basket" />
                                    <span> Ngân hàng câu hỏi </span>
                                    <span className="menu-arrow" />
                                </Link>
                                <Link to="/admin-course" className="waves-effect">
                                    <i className="ion-md-basket" />
                                    <span> Quản lý khóa học </span>
                                    <span className="menu-arrow" />
                                </Link>
                                <a href="javascript: void(0);" className="waves-effect">
                                    <i className="ion-md-basket" />
                                    <span> UI Elements </span>
                                    <span className="menu-arrow" />
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    {/* End Sidebar */}
                    <div className="clearfix" />
                </div>
                {/* Sidebar -left */}
            </div>
            {/* Left Sidebar End */}
        </>

    )
}