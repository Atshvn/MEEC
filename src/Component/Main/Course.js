import { CarouselSubject,  Partner } from "./Chil"
import React, { useEffect } from "react";
export const Course = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.remove("display-none");
        document.querySelector(".main-foodter").classList.remove("display-none");
    }, [])
   
    return (
        <>
            <div class="container">
                <img className="mb-4" src="../assets/images/course-bg.jpg" alt="" />

            </div>
            <div class="container mt-5">
                <div className="row">
                    <div className="col-md-1 col-0"></div>
                    <div className="col-md-10 col-12 text-center" style={{ color: '#9d9dbd', fontWeight: '100' }}>
                        <p>
                            Với sự đa dạng hóa khóa học từ offline đến online,
                            mỗi học viên sẽ có cơ hội trải nghiệm các phương pháp học tiếng Anh độc đáo,
                            chỉ duy nhất tại MEEC. Học viên sẽ dễ dàng tiếp nhận kiến thức mới
                            nhờ phương pháp giảng dạy tinh - gọn - nhẹ từ những giảng viên xuất sắc trên
                            toàn quốc để có thể không chỉ dừng lại ở mức điểm đầu ra được cam kết bằng
                            văn bản của trung tâm mà còn cao hơn thế nữa.
                        </p>
                    </div>
                    <div className="col-md-1 col-0"></div>
                </div>

            </div>
            <CarouselSubject title={"Chương trình đào tạo"}
                className={" d-flex justify-content-center color-text"} />
            <div className="container mt-4">
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
            <Partner />
        </>
    )
}