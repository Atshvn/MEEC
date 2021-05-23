import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Partner } from "../Chil";
export const Course2 = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return (
        <>
            <div class="container-fluid p-0 position-relative">
                <img className=" w-100" src="../assets/images/course1.png" alt="" />
                <div className="d-flex position-absolute pb-4" style={{bottom:'0', right:'44%'}}>
                <Link to="/signup" className="btn btn-warning btn-lg p-3 pr-5 pl-5 m-auto" >ĐĂNG KÍ HỌC NGAY</Link>
                </div>
            </div>
            <div class="container-fluid bg-t">
                <div className="container">
                    <div className=" row  pt-5">
                        <div className="col-md-6">
                            <h2 className="f-700 color-text">Khoá học TOEIC 0 - 500 từ mất gốc</h2>
                            <p>Khóa học TOEIC cho người mất căn bản - TOEIC 0 - 500+ của Athena được xây dựng theo lộ trình tối ưu gồm 26 buổi trong vòng 3,5 tháng.
                                 Khóa học được xây dựng bởi Thạc sĩ Đỗ Vân Anh sau nhiều năm nghiên cứu, giảng dạy và đang được áp dụng thành công tại Anh ngữ MEEC.
                                  Chương trình học liên tục được cô Vân Anh cập nhật và đổi mới, đảm bảo học viên có được kiến thức và kết quả học tập cao nhất.</p>
                            <p>Hơn nữa, MEEC cũng tích hợp 02 môn Khoa học và Toán trong chương trình giảng dạy tiếng Anh.
                            Điều này cung cấp cho học viên một nền tảng kiến thức vững chắc cho chương trình học tập trong
                            tương lai đặc biệt ở các nước sử dụng tiếng Anh là ngôn ngữ chính.</p>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img className=" w-100 m-auto" src="../assets/images/course1.1.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid foodter">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="f-700 color-text">Lộ trình học </h2>
                        <p className="mb-0 color-text">Chia làm 3 giai đoạn: </p>
                        <h5 className="f-700 color-text">Giai đoạn 1(50 giờ): XÂY DỰNG NỀN TẢNG KIẾN THỨC CƠ BẢN</h5>
                        <ul>
                            <li>Hệ thống hóa toàn bộ chủ điểm ngữ pháp chắc chắn gặp trong đề thi TOEIC.</li>
                            <li>Chia sẻ các mẹo làm bài cực nhanh, tiết kiệm thời gian ngay cả học viên mất gốc tiếng Anh cũng có thể áp dụng được.  </li>
                            <li>Hướng dẫn phương pháp cơ bản làm bài đọc: phân tích tránh bẫy, các tìm và chọn key words khi làm bài,...</li>
                            <li>Cung cấp 1500 từ vựng trọng tâm thuộc các chủ điểm bài thi TOEIC.</li>
                        </ul>
                        <h5 className="f-700 color-text">Giai đoạn 2(40 giờ): LUYỆN TẬP CHUYÊN SÂU - TĂNG TỐC ĐẠT 500+ TOEIC</h5>
                        <ul>
                            <li>Hướng dẫn chiến thuật làm bài + từ vựng dành riêng cho part 1 + 2.</li>
                            <li>Học âm cơ bản theo đúng bản phiên âm quốc tế IPA giúp học viên dễ dàng tránh bẫy và đạt điểm số cao bài nghe part 3 + 4. </li>
                            <li>Mở rộng vốn từ cơ bản và tốc độ làm bài ngữ pháp part 5 + 6. </li>
                            <li>Luyện tập chuyên sâu và toàn diện kỹ năng đọc hiểu nhằm đạt hiệu quả tối đa khi làm part 7.</li>
                            <li>Bổ sung hơn 3000 từ vựng học thuật, đa dạng hóa vốn từ không chỉ hỗ trợ cho kỳ thi TOEIC mà còn rất hữu dụng trong học tập và công việc. </li>
                        </ul>
                        <h5 className="f-700 color-text">Giai đoạn 3 (60 giờ): HỌC CHUYÊN SÂU 2 KỸ NĂNG SPEAKING & WRITING</h5>
                        <ul>
                            <li>Chuẩn hóa ngữ âm theo bảng phiên âm quốc tế IPA, từ phát âm, ngữ điệu, ending sound, tạo độ trôi chảy khi giao tiếp.</li>
                            <li>Chinh phục 6 phần trong TOEIC Speaking: (Read a Text, Describe a picture, Respond to the questions, Respond to the questions using information given,
                                 Propose a solution, Express an opinion) và TOEIC Writing.</li>


                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Link to="course1" className="btn btn-lg bg-i w-100 mb-2">Khóa học TOEIC 4 kĩ năng</Link>

                        </div>
                        <div>
                            <Link to="course3" className="btn btn-lg bg-i w-100 mb-2">Luyện thi TOEIC cấp tốc</Link>

                        </div>
                        <div>
                            <Link to="course4" className="btn btn-lg bg-i w-100 mb-2">Tiếng anh giao tiếp</Link>

                        </div>
                        <div>
                            <Link to="course5" className="btn btn-lg bg-i w-100 mb-2">Tiếng anh cho thiếu nhi</Link>

                        </div>
                        <div>
                            <Link to="course6" className="btn btn-lg bg-i w-100 mb-2">Tiếng anh cho người đi làm</Link>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container pt-5">
            <h2 className="f-700 color-text text-center mb-3">Cơ sở vật chất </h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12  pb-4">
                        <img className=" w-100 h-auto m-auto" src="../assets/images/home1.png" alt="" />
                        </div>
                        <div className="col-md-6">
                        <img className=" w-100 m-auto" src="../assets/images/home2.png" alt="" />
                        </div>
                        <div className="col-md-6">
                        <img className=" w-100 m-auto" src="../assets/images/home3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="row">
                        <div className="col-md-6">
                        <img className=" w-100 h-auto m-auto" src="../assets/images/home4.png" alt="" />
                        </div>
                        <div className="col-md-6">
                        <img className=" w-100 m-auto" src="../assets/images/home5.jpg" alt="" />
                        </div>
                        <div className="col-md-12 pt-4">
                        <img className=" w-100 m-auto" src="../assets/images/home6.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            <div className="container mt-5 mb-5">
                <div class="mb-4">
                    <h3 className="d-flex justify-content-center color-text" style={{ fontWeight: '800' }}>Đội ngũ giảng viên</h3>
                    <div className="row">
                        <div className="col-md-1 col-0"></div>
                        <div className="col-md-10 col-12 text-center" style={{ color: '#9d9dbd', fontWeight: '100' }}>
                            <p>Đội ngũ giáo viên giàu kinh nghiệm và trình độ chuyên môn cao, chúng tôi cam kết sẽ mang đến cho học viên một chương trình giảng dạy và phương pháp học  tiếng Anh đẳng cấp quốc tế.
                                        Đội ngũ giáo viên nòng cốt là giảng viên bản ngữ, đến từ các quốc gia sử dụng tiếng Anh, là những người đã đạt được các chứng chỉ tiếng Anh quốc tế và chuyên môn về ESL. </p>
                        </div>
                        <div className="col-md-1 col-0"></div>
                    </div>
                    <div>
                        <img style={{ width: '100%', height: 'auto' }} src="../assets/images/course2.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="container d-flex mb-5">
                <Link to="signup" className="btn bg-d btn-lg p-3 pr-5 pl-5 m-auto">ĐĂNG KÍ HỌC NGAY</Link>
            </div>
            <Partner />
        </>
    )
}