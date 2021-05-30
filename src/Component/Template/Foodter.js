import { Link } from 'react-router-dom'
import { Messenger } from '../../Commom'
import logo from '../../logo2.png'

export const Foodter = () => {
    return (
        <footer class="main-foodter foodter" >
            <div claas="page-footer font-small indigo mt-5 foodter ">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-md-3 ">
                        <h6 class="font-weight-bold text-uppercase "><Link to=""><img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" /></Link></h6>
                        <ul class="list-unstyled">
                            <li class="foodter__li">
                                Email: support@meec.edu.vn
                  </li>
                            <li class="foodter__li">
                                Hotline: 028971718434
                  </li>
                            <li class="foodter__li">
                                Address: 12 Nguyễn Văn Bảo, quận Gò Vấp, TP.Hồ chí Minh
                  </li>

                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-3 mx-auto">
                        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">CÁC KHÓA HỌC</h6>
                        <ul class="list-unstyled">
                            <li class="foodter__li">
                            <Link  to="course1" href="#">Thành thạo 4 kĩ năng TOEIC</Link>
                            </li>
                            <li class="foodter__li">
                            <Link  to="course2" href="#">TOEIC 0 - 500 từ mất gốc</Link>

                            </li>
                            <li class="foodter__li">
                            <Link  to="course3" href="#">Luyện thi TOEIC cấp tốc</Link>

                            </li>
                            <li class="foodter__li">
                            <Link to="course4" href="#">Tiếng anh giao tiếp</Link>

                            </li>
                            <li class="foodter__li">
                            <Link to="course5" href="#">Tiếng anh cho người đi làm</Link>


                            </li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-3 mx-auto">
                        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">MỞ RỘNG</h6>
                        <ul class="list-unstyled">
                            <li class="foodter__li">
                                <Link to="for-me" >Giới thiệu</Link>
                            </li>
                            <li class="foodter__li">
                                <Link to="recruit">Cơ hội nghề nghiệp</Link>
                            </li>
                            <li class="foodter__li">
                                <Link to="contact" href="#!">Liên hệ</Link>
                            </li>
                            <li class="foodter__li">
                                <Link to="/" href="#!">Sự kiện</Link>
                            </li>
                            <li class="foodter__li">
                            <Link to="/" href="#!">Chương trình đào tạo mới</Link>
                            </li>
                        </ul>
                    </div>

                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-3 mx-auto">
                        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">Liên kết</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!" class="btn btn-facebook waves-effect waves-light mr-2" target="_blank">
                                    <i class="fab fa-facebook-f pr-1 pl-1" ></i>
                                </a>
                                <a href="" class="btn btn-twitter waves-effect waves-light mr-2">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="btn btn-googleplus waves-effect waves-light mr-2">
                                    <i class="fab fa-google-plus"></i>
                                </a>
                                <a href=""  class="btn btn-youtube waves-effect waves-light mr-2">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <img src="assets\images\bct.png" style={{width:'80%', height:'auto', marginTop:'20px'}} alt=""/>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="https://mdbootstrap.com/"> MEEC - Master Easy English Center</a>
            </div>
            </div>
            <Messenger/>
        </footer>
    )
}