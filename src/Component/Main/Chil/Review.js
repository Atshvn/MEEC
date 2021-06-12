import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Review = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div class="container-fluit w-100 mb-5" >
                <div class="container">
                    <Slider {...settings}>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar.jpg" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Hồ Sỹ Tuấn Anh</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Thực ra đạt được số điểm 900 TOEIC là một điều khá bất ngờ và hạnh phúc đối với mình,
                                             vì mục tiêu ban đầu của mình chỉ là 700.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar2.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Lê Thông</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">
                                                Tại trung tâm Anh Ngữ MEEC mình đã được rèn luyện kỷ
                                                 luật để học tập thật chăm chỉ cùng với bí quyết từ
                                                  giảng viên chuyên nghiệp, dày dặn kinh nghiệm luyện thi Toeic - Ms Vân Anh!
</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar3.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Lê Thị Yến Nhi</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Bí kíp để được điểm cao của mình là hãy HỌC HẾT tất cả những bài cô giao,
                                             như vậy chắc chắn 500+ TOEIC đã trong tầm tay bạn rồi </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar4.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i"> Nguyễn Tân</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Mình thích nhất ở MEEC là HỌC PHÍ RẺ, rất hợp lý cho sinh viên,
                                             lộ trình học rõ ràng, phù hợp với đối tượng mất gốc tiếng anh như mình.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar5.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Ngọc Cường</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Tại trung tâm Anh Ngữ MEEC mình đã được rèn luyện kỷ luật để học tập
                                    thật chăm chỉ cùng với bí quyết từ giảng viên chuyên nghiệp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar.jpg" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">HThanh Toán</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Bí kíp để được điểm cao của mình là hãy HỌC HẾT tất cả những bài cô giao, 
                                            như vậy chắc chắn 500+ TOEIC đã trong tầm tay bạn rồi </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar2.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Hồ Sỹ Tuấn Anh</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Tại trung tâm Anh Ngữ MEEC mình đã được rèn luyện kỷ luật để học tập
                                    thật chăm chỉ cùng với bí quyết từ giảng viên chuyên nghiệp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{ width: '90%' }}  >
                                <div class="card-body pt-0 pb-3 pr-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pt-2" style={{ zIndex: '11' }} >
                                                <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar3.png" alt="" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 pt-4 pl-4">
                                            <p className="m-0 cl-i">Hồ Sỹ Tuấn Anh</p>
                                            <p className="m-0 font-14">Sinh Viên</p>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <p className="font-14 card-text">Tại trung tâm Anh Ngữ MEEC mình đã được rèn luyện kỷ luật để học tập
                                    thật chăm chỉ cùng với bí quyết từ giảng viên chuyên nghiệp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}