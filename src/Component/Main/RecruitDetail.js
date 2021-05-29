import { CarouselSubject, Partner } from "./Chil"
import React, { useEffect } from "react";
import SimpleMap from "../../Commom/Map";
import { Link } from "react-router-dom";
import { Messenger } from "../../Commom";
export const RecruitDetail = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return (
        <>
            <div class="container-fluid">
                <div style={{ position: 'relative' }}>
                    <div>
                        <img className=" w-100" src="../assets/images/bg-partner.jpg" alt="" />
                    </div>
                    <div style={{ position: 'absolute', top: '30%', left: "10%" }}>
                        <p className="font-24 color-text" style={{ width: '450px' }}>
                            Một sự nghiệp xứng đáng luôn chờ đợi những ứng viên xuất sắc
                    </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid for">
                <div class="container  mt-5">
                    <div className="row">
                        <div className="col-12 col-md-12 mb-5">
                            <div>
                                <h3 className="f-700 color-text ">TUYỂN DỤNG NHÂN VIÊN TƯ VẤN</h3>
                                <small>05/05/2021</small>
                                <div className="card mt-2">
                                      <div class="card-header bg-i">
                                        <h4>TUYỂN DỤNG NHÂN VIÊN TƯ VẤN</h4>
                                      </div>
                                      <div class="card-body">
                                        <h4 className="font-900">Mô tả công việc</h4>
                                        <ul>
                                            <li>Tư vấn chương trình giảng dạy.</li>
                                            <li>Quản lý và chăm sóc học viên/ khách hàng.</li>
                                            <li>Thực hiện chỉ tiêu kinh doanh theo kế hoạch được đề ra. </li>
                                            <li>Đón, trả học sinh trước và sau giờ học.</li>
                                            <li> Hỗ trợ các sự kiện của công ty theo phân công.</li>
                                            <li> Chăm sóc học viên/ khách hàng trong quá trình trước và sau khi đăng kí khóa học tại trung tâm.</li>
                                            <li> Các công việc khác theo sự phân công của Trưởng Bộ phận.</li>
                                        </ul>
                                        <h4 className="font-900" >Yêu cầu ứng viên</h4>
                                        <ul>
                                            <li>Nam/ Nữ: Độ tuổi 18-25 tuổi, sinh viên hoặc đã tốt nghiệp.</li>
                                            <li>Thành thạo sử dụng máy tính văn phòng: Words, Excel, Powerpoint và Internet.</li>
                                            <li>Tính cách: Yêu thích công việc, có trách nhiệm, siêng năng, có tinh thần cầu tiến. </li>
                                            <li> Hình thức làm việc: theo giờ (từ 17:00-21:00, từ T2-T7 hàng tuần).</li>
                                           
                                        </ul>
                                        <h4 className="font-900" >Quyền lợi được hưởng</h4>
                                        <ul>
                                            <li>Mức lương khởi điểm: 30.000 - 40.000đ/ giờ + hoa hồng (part time).</li>
                                            <li>Full time lương: 8-10 triệu + hoa hồng theo KPI, (Review lương sau ba tháng theo năng lực và thể hiện).</li>
                                            <li>Cơ hội làm việc trong môi trường tiếng Anh, chuyên nghiệp. </li>
                                            <li>Được hưởng lương theo năng lực làm việc.</li>
                                            <li>Tham gia các buổi liên hoan, dã ngoại của trung tâm</li>
                                            <li>Được training hàng tuần.</li>
                                            <li> Đối với sinh viên công ty hỗ trợ thực tập.</li>
                                        </ul>
                                        <h4 className="font-900">Cách ứng tuyền</h4>
                                        <ul>
                                            
                                            <li>Nộp CV và bản copy bằng cấp qua email: <i className="color-text font-20">meeccenter.vn@gmail.com</i></li>
                                        </ul>
                                        <p>Liên hệ HR: 0971718434</p>
                                        <p><i className='font-400'>*Vui lòng chuẩn bị một bộ hồ sơ ứng tuyển khi tham gia phỏng vấn</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Partner />
        </>
    )
}