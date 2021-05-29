import { CarouselSubject, Partner } from "./Chil"
import React, { useEffect } from "react";
import SimpleMap from "../../Commom/Map";
import { Link } from "react-router-dom";
import { Messenger } from "../../Commom";
export const Recruit = () => {
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
                                <h1 className="f-700 color-text text-center">Môi trường làm việc tại MEEC</h1>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <img className=" w-100" src="../assets/images/bg-partner1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="f-900">1.Thu nhập</h4>
                            <p>Thu nhập “hậu hĩnh” luôn đồng hành cùng phương pháp làm việc khoa học và sáng tạo.
                            Hơn nữa, với kết quả đánh giá thi đua và khi bạn có tinh thần cùng chúng tôi phát triển (Win – Win)
                            và tích cực đóng góp cho công việc hiệu quả, bạn sẽ dễ dàng nhận được nhiều phần thưởng giá trị.
                            Và Trung tâm MEEC của chúng tôi luôn khuyến khích và sẵn sàng làm điều đó cùng bạn.</p>
                            <h4 className="f-900">2. Cơ hội phát triển</h4>
                            <p>Dù bạn làm ở bất kỳ vị trí nào tại MEEC, tính chuyên nghiệp sẽ thể hiện đẳng cấp của bạn.
                            Với giáo viên, tư vấn viên bạn sẽ được tham gia các khóa đào tạo từ Hội đồng Học thuật MEEC
                            và được tham gia các khóa huấn luyện định kỳ mỗi năm 1 lần giúp đội ngũ nhân sự tiếp cận được
                            những phương pháp giảng dạy mới và cách làm việc hiệu quả.</p>
                            <h4 className="f-900">3. Môi trường làm việc chuyên nghiệp</h4>
                            <p>Đến với MEEC, bạn sẽ có cơ hội làm việc trong một môi trường hiện đại,
                            sáng tạo nhưng đầy tính nhân văn, thân thiện với tác phong chuyên nghiệp theo kiểu phương Tây.</p>
                            <h4 className="f-900">4. Phúc lợi dành cho bản thân</h4>
                            <p>Tại MEEC, ngoài các chế độ bảo hiểm theo quy định, nghỉ phép và thưởng trong các dịp ngày lễ, Tết;
                            mỗi CBNV sẽ được tham gia các hoạt động như Team Building, English Club cùng các chuyến nghỉ mát du
                            lịch do Công ty tổ chức định kỳ hằng năm…</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <div>
                            <h1 className="f-700 color-text text-center">Cơ hội việc làm</h1>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class=" bx bg">
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table mb-0 font-18">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Vị trí tuyển dụng</th>
                                                <th>Nơi làm việc</th>
                                                <th>Mức lương</th>
                                                <th>Thời hạn</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>TUYỂN DỤNG VIDEO EDITOR PARTTIME</td>
                                                <td>Hồ Chí Minh</td>
                                                <td>Thỏa thuận</td>
                                                <td>31-06-2021</td>
                                                <td>
                                                    <Link to="/recruit-detail" className=" cl-i">Xem chi tiết</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>TUYỂN DỤNG BIÊN TẬP SÁCH FULLTIME</td>
                                                <td>Hồ Chí Minh</td>
                                                <td>Thỏa thuận</td>
                                                <td>31-06-2021</td>
                                                <td>
                                                    <Link to="/recruit-detail" className=" cl-i">Xem chi tiết</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>TUYỂN DỤNG TRƯỞNG PHÒNG MARKETING</td>
                                                <td>Hồ Chí Minh</td>
                                                <td>Thỏa thuận</td>
                                                <td>31-06-2021</td>
                                                <td>
                                                    <Link to="/recruit-detail" className=" cl-i">Xem chi tiết</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>TUYỂN DỤNG NHÂN VIÊN TƯ VẤN</td>
                                                <td>Hồ Chí Minh</td>
                                                <td>Thỏa thuận</td>
                                                <td>31-06-2021</td>
                                                <td>
                                                    <Link to="/recruit-detail" className=" cl-i">Xem chi tiết</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>TUYỂN DỤNG CONTENT LEADER</td>
                                                <td>Hồ Chí Minh</td>
                                                <td>Thỏa thuận</td>
                                                <td>31-06-2021</td>
                                                <td>
                                                    <Link to="/recruit-detail" className=" cl-i">Xem chi tiết</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partner />
            <Messenger/>
        </>
    )
}