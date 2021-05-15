
export const Intro = () => {
    const name= `Master Easy English Center`
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div className="col-md-12 col-12 mb-4  d-flex justify-content-center">
                        <h2 class=" header ">Giới thiệu</h2>

                    </div>
                    <div className="col-md-6 col-12">
                        <h1 style={{ fontWeight: 'bold' }}>{name}</h1>
                        <p class="text-intro">MEEC tự hào là đơn vị đào tạo Anh ngữ hàng đầu tại Việt Nam với sự tận tâm,
                        chân thành và trách nhiệm. Được thành lập từ năm 2014,
                        MEEC đã trở thành nơi trao gửi niềm tin học tiếng Anh cho hàng ngàn học viên chuyên sâu trong 3 mảng đào tạo:
                        Luyện thi TOEIC, tiếng Anh giao tiếp và luyện thi Đại học môn Anh, cho học viên trên khắp cả nước thông
                        qua các lớp học offline, online và sách.
                        Hơn 7 năm hình thành và phát triển,
                        MEEC đã chắp cánh ước mơ Anh Ngữ, tạo tiền đề cho hơn 30.000 ngàn học viên tốt nghiệp và
                        có được nhiều cơ hội mới trong sự nghiệp. Đạt được những thành tựu đó, Athena đã luôn đi theo triết lý
                    “Học thật - Thi thật” trong từng bài giảng, nhằm rèn luyện cho học viên tinh thần tự giác và trách nhiệm trong học tập.</p>
                        <a href="#!" type="button" class=" p-2 pr-5 pl-5  btn btn-lg btn-success btn-rounded waves-effect width-md waves-light mb-3">Xem thêm</a>

                    </div>
                    <div className="col-md-6 col-12">
                        <iframe style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/DkEhZQ9EESw" title="YouTube video player" frameborder="0" allowFullScreen></iframe>
                    </div>
                </div>

            </div>
            <div class="container-fluid for  pb-5">
                <div class="container">
                   <div className="row">
                   <div className="col-12 col-md-4 pt-3">
                       <p>LÝ DO VÌ SAO CHỌN</p>
                       <h2>{name}</h2>
                       <p>Được thành lập từ năm 2014, sau hơn 6 năm phát triển, Anh Ngữ Athena đã trở thành đơn vị đào tạo tiếng Anh hàng đầu tại Việt Nam.</p>
                   </div>
                    <div className="col-12 col-md-2 pt-5">
                        <span class="d-flex justify-content-center pb-3">
                                 <i class="fas fa-graduation-cap " style={{fontSize:'50px'}}></i>
                        </span>
                        <p>Đào tạo hơn 10.000 bạn trẻ mất gốc tiếng Anh, sở hữu chứng chỉ TOIEC, IELTS với điểm số cao.</p>
                    </div>
                    <div className="col-12 col-md-2 pt-5" >
                    <span class="d-flex justify-content-center pb-3"><i class="fas fa-book-open" style={{fontSize:'50px'}}></i></span>
                        <p>Lộ trình học tại trung tâm Athena được thiết kế theo giáo trình riêng, rõ ràng, tinh gọn và hiệu quả.</p>
                    </div>
                    <div className="col-12 col-md-2 pt-5">
                   <span class="d-flex justify-content-center pb-3"> <i class="fas fa-users" style={{fontSize:'50px'}}></i></span>
                    <p>Đội ngũ giảng viên, trợ giảng chuyên nghiệp đến từ các trường đại học danh tiếng trong và ngoài nước.</p>
                    </div>
                    <div className="col-12 col-md-2 pt-5">
                    <span class="d-flex justify-content-center pb-3"><i class="fas fa-user-graduate" style={{fontSize:'50px'}}></i></span>
                        <p>
                    Cam kết đầu ra bằng văn bản với học viên.
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}