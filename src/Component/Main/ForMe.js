import { CarouselSubject, Partner } from "./Chil"
import React, { useEffect } from "react";
import SimpleMap from "../../Commom/Map";
import { Link } from "react-router-dom";
import { Messenger } from "../../Commom";
export const ForMe = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])

    return (
        <>
            <div class="container-fluid">
                <div style={{ position: 'relative' }}>
                    <div>
                        <img className=" w-100" src="../assets/images/bg_forme.jpg" alt="" />
                    </div>

                </div>
            </div>
            <div className="container-fluid for">
                <div class="container  mt-5">
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div>
                                <h5 className="f-900">GIỚI THIỆU</h5>
                                <h1 className="f-900"> Anh Ngữ Master Easy English Center to change</h1>
                                <p>MEEC tự hào là đơn vị đào tạo Anh ngữ hàng đầu tại Việt Nam với sự tận tâm,
                                chân thành và trách nhiệm. Được thành lập từ năm 2014, MEEC đã trở thành nơi
                                trao gửi niềm tin học tiếng Anh cho hàng ngàn học viên chuyên sâu trong 3
                                mảng đào tạo: Luyện thi TOEIC, tiếng Anh giao tiếp và luyện thi Đại học môn Anh,
                                cho học viên trên khắp cả nước thông qua các lớp học offline, online và sách.</p>
                                <p>Hơn 7 năm hình thành và phát triển, MEEC đã chắp cánh ước mơ Anh Ngữ, tạo tiền đề
                                cho hơn 30.000 ngàn học viên tốt nghiệp và có được nhiều cơ hội mới trong sự nghiệp.
                                Đạt được những thành tựu đó, MEEC đã luôn đi theo triết lý “Học thật - Thi thật”
                                trong từng bài giảng, nhằm rèn luyện cho học viên tinh thần tự giác và trách nhiệm trong học tập.</p>
                                <p>Với Slogan "Dare To Change" được lấy cảm hứng từ câu chuyện thật của CEO Tuan Anh,
                                đã dám thay đổi để thực hiện ước mơ của riêng mình. Giờ đây, MEEC không chỉ giúp
                                học viên nuôi dưỡng tình yêu học tiếng Anh cháy bỏng, mà còn truyền cảm hứng
                                sống tích cực cho từng học viên.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className=" w-100" src="../assets/images/forme1.png" alt="" />

                        </div>
                    </div>
                    <div className="row pt-5 mt-5">
                        <div className="col-md-6">
                            <img className=" w-100" src="../assets/images/forme2.png" alt="" />

                        </div>
                        <div className="col-md-6">
                            <div>
                                <h1 className="f-900"> Tầm nhìn</h1>
                                <p>Trở thành hệ thống giáo dục hàng đầu Việt Nam về đào tạo tiếng Anh.
                                Tạo ra môi trường học cho mọi cá nhân, tổ chức. Hướng đến mỗi người học
                                 đều yêu thích tiếng Anh ngay cả từ khi mới bắt đầu.</p>
                                <h1 className="f-900">Sứ mệnh</h1>
                                <p>Là nơi phát triển hoàn thiện ngôn ngữ tiếng Anh cho người Việt.
                                Giúp người học tự tin ứng dụng kiến thức tiếng Anh vào cuộc sống, công việc và hội nhập quốc tế.
                                Là nơi cung cấp môi trường việc làm cho thế hệ trẻ Việt Nam phát huy tối đa năng lực cá nhân.
                                Giúp người trẻ thay đổi tư duy tích cực hơn để thành công.</p>
                                <h1 className="f-900">Giá trị cốt lõi</h1>
                                <ul className="p-0" style={{ listStyle: 'none' }}>
                                    <li>Luôn thấu hiểu khách hàng để đáp ứng đúng nhu cầu và dịch vụ.</li>
                                    <li> Liên tục thay đổi quy trình, tối ưu sản phẩm để tạo ra giá trị tốt nhất.</li>
                                    <li>Coi trọng nguồn lực con người là sự phát triển thịnh vượng của doanh nghiệp.</li>
                                    <li>Trung thực, chân thành trong hành động với khách hàng, đội ngũ nhân viên và đối tác.</li>
                                    <li>Có đóng góp tích cực cho cộng đồng, xã hội.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h5 className="f-900">ĐỘI NGŨ GIẢNG VIÊN</h5>
                            <h1 className="f-900">Trung Tâm Anh Ngữ Master Easy English Center</h1>
                            <p>
                                Giáo viên chính là yếu tố then chốt trong giáo dục, MEEC tự tin có độ ngũ
                                giáo viên có năng lực chuyên môn cao và đủ chứng chỉ trong công tác giảng
                                dạy theo tiêu chuẩn Quốc tế. Bởi vậy, khi học tại Athena học viên sẽ có
                                cơ hội tiếp cận với những phương pháp dạy khoa học, tinh gọn từ các giảng
                                viên có kinh nghiệm giảng dạy tiếng Anh nhiều năm. Với tiêu chí dạy học
                                từ cái tâm, giảng viên của Anh ngữ Athena luôn đặt chất lượng dạy và học lên hàng đầu.
                        </p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="d-flex justify-content-center">
                                        <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar.jpg" alt="" width="200" />
                                    </div>
                                    <h5 className="f-900">Hồ Sỹ Tuấn Anh</h5>
                                    <p className="font-14">Giáo viên chính và cũng là CEO của Anh ngữ MEEC.
                                    Anh từng tốt nghiệp Thạc sĩ khoa tài chính trường Leeds Metropolitan
                                 từ Vương quốc Anh và sở hữu nhiều thành tích cao trong giảng dạy:</p>
                                    <ul >
                                        <li className="font-14"> TOEIC: 990/990, IELTS: 8.5</li>
                                        <li className="font-14"> Chứng chỉ giảng dạy Tiếng Anh Tesol (Chứng chỉ giảng dạy Tiếng Anh 80 nước trên thế giới)</li>
                                        <li className="font-14">7 năm kinh nghiệm về dạy TOEIC và IELTS, từng giảng dạy tại những trung tâm hàng đầu về TOEIC tại Hồ Chí Minh.</li>
                                        <li className="font-14">CEO kiêm giảng viên của Trung tâm Anh ngữ MEEC.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="d-flex justify-content-center">
                                        <img className="avatar m-auto" class="rounded-circle" src="assets\images\gv2.png" alt="" width="200" />
                                    </div>
                                    <h5 className="f-900">Lê Thông</h5>
                                    <p className="font-14">Là một thầy giáo trẻ năng động,
                                    nhiệt huyết luôn mang đến năng lượng tươi mới, trẻ trung mỗi khi đến lớp.
                                     Thầy giáo xuất thân từ Đại học Ngoại thương đang sở hữu:</p>
                                    <ul >
                                        <li className="font-14"> Hơn 3 năm kinh nghiệm dạy tiếng Anh, 2 năm chuyên sâu dạy TOEIC.</li>
                                        <li className="font-14"> Từng đạt 925 điểm TOEIC ngay khi mới sinh viên năm nhất.</li>

                                    </ul>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="d-flex justify-content-center">
                                        <img className="avatar m-auto" class="rounded-circle" src="assets\images\gv3.png" alt="" width="200" />
                                    </div>
                                    <h5 className="f-900">Lê Việt Hà</h5>
                                    <p className="font-14">Cô Lê Việt Hà là giáo viên dạy tiếng Anh Speaking & Writing tại trung tâm Anh ngữ MEEC.
                                     Cô từng tốt nghiệp 2 trường đại học và đang sở hữu nhiều thành tích đáng nể trong quá trình công tác giảng dạy:</p>
                                    <ul >
                                        <li className="font-14">Chứng chỉ TOEFL: 106/120.</li>
                                        <li className="font-14"> Từng tốt nghiệp bằng giỏi tại Đại học Ngoại thương Hà Nội và University of Bristol của Anh.</li>
                                        <li className="font-14">9 năm kinh nghiệm dạy tiếng Anh và làm việc cho các tổ chức Quốc tế.</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 ">
                                    <div className="d-flex justify-content-center">
                                        <img className="avatar m-auto" class="rounded-circle" src="assets\images\gv4.png" alt="" width="200" />
                                    </div>
                                    <h5 className="f-900">Nguyễn Tuấn Phong</h5>
                                    <p className="font-14">Là thầy giáo dạy giao tiếp với nụ cười thân thiện, thầy Phong hiện đang sở hữu:</p>
                                    <ul >
                                        <li className="font-14"> Chứng chỉ IELTS 7.0.</li>
                                        <li className="font-14"> Hơn 3 năm kinh nghiệm chuyên sâu đào tạo tiếng Anh giao tiếp cho sinh viên và người đi làm.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-t mt-5 mb-5 pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-0 pr-5 pl-5 pb-5">
                            <img className="w-100" src="assets\images\forme11.png" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <h1 className="f-700">Cam kết</h1>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '50px' }} src="assets\images\ic1.png" alt="" />
                                            </div>
                                            <span>
                                                Lấy lại căn bản cho người mất gốc: Nhanh chóng - Dễ dàng - Hiệu quả
                                            </span>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '40px' }} src="assets\images\ic2.png" alt="" />
                                            </div>
                                            <span>
                                                Chất lượng đầu ra bằng văn bản - Đào tạo lại Free 1 năm nếu không đạt
                                            </span>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '50px' }} src="assets\images\ic3.png" alt="" />
                                            </div>
                                            <span>
                                                Học phí trọn gói 100% - Không phát sinh thêm trong quá trình học
                                            </span>
                                        </div>
                                        <div className="col-md-12 mb-3 mt-4">
                                            <h1 className="f-700">Thành tựu</h1>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '50px' }} src="assets\images\ic4.png" alt="" />
                                            </div>
                                            <span>
                                            Đào tạo thành công hơn 10.000 học viên mất gốc tiếng anh
                                            </span>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '70px' }} src="assets\images\ic5.png" alt="" />
                                            </div>
                                            <span>
                                            Hơn 80% học viên của trung tâm đạt điểm số TOEIC 550 trở lên
                                            </span>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <img className="" style={{ width: '50px' }} src="assets\images\ic6.png" alt="" />
                                            </div>
                                            <span>
                                            Top 3 trung tâm đào tạo và luyện thi TOEIC hàng đầu tại Hà Nội
                                            </span>
                                        </div>
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