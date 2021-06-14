import { useState } from "react";
import { useEffect } from "react";
import { Alerterror, Alertwarning } from "../../Commom";
import { CourseAPI, ScheduleAPI } from "../../Service";
import { SiderBarUser, TopMenuUser } from "../Template"
export const Schedule = () => {

    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    const [Course, setCourse] = useState(0)

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        const courseId = UserData.courseId;
        MEEC_Course_List(courseId);
        setCourse(courseId);
        MEEC_Schedule_List(courseId)
    }, []);

    useEffect(() => {
        MEEC_Hourse_Local();
        MEEC_Day_Local();
    }, []);

    const [Hours, setHours] = useState([])
    const [Days, setDays] = useState([])
    const [data, setData] = useState([])
    const [dataGr, setDataGr] = useState([])



    const MEEC_Hourse_Local = () => {
        const list = [
            { value: 0, label: "Vui lòng chọn" },
            { value: 1, label: "8AM - 10AM" },
            { value: 2, label: "10AM - 12AM" },
            { value: 3, label: "2PM - 4PM" },
            { value: 4, label: "4PM - 6PM" },
            { value: 5, label: "6PM - 8PM" },
            { value: 6, label: "8PM - 10PM" }
        ]
        setHours(list)
    }

    const MEEC_Day_Local = () => {
        const list = [
            { value: 0, label: "Vui lòng chọn" },
            { value: 1, label: "Thứ 2" },
            { value: 2, label: "Thứ 3" },
            { value: 3, label: "Thứ 4" },
            { value: 4, label: "Thứ 5" },
            { value: 5, label: "Thứ 6" },
            { value: 6, label: "Thứ 7" },
            { value: 7, label: "Chủ nhật" }
        ]
        setDays(list)
    }

    const MEEC_Course_List = async (id) => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await CourseAPI.getAll();
            const x = response.find(i => i.courseId == id)
            setData(x.name);
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }

    //#region List
    const MEEC_Schedule_List = async (id) => {
       
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await ScheduleAPI.get(id);

            setDataGr(response)
        } catch (error) {
            Alerterror("Đã có lỗi xảy ra, vui lòng thử lại sau")
            console.log('Failed to fetch: ', error);
        }
    }
    //#endregion
    
    
    const RenderBody = () => {
        return (
            dataGr.map((i, index) => {
                let d = Days.find(item => item.value === i.date)
                let t = Hours.find(item => item.value === i.time)
                return <tr key={index} className="t font-weight-bold">
                    <td>{i.courseName}</td>
                    <td>{i.idZoom}</td>
                    <td>{i.passZoom}</td>
                    <td>{d.label}</td>
                    <td>{t.label}</td>
                    <td>{i.fullName}</td>
                </tr>
            })
        )
    }

    return (
        <>
            <div >
                <TopMenuUser />
                <div className="row">
                    <div className="col-md-4 col-12">
                        <SiderBarUser />
                    </div>
                    <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                        <h3 className=" f-900">Khu vực lịch học</h3>
                        <p>Lịch học của khóa học bạn đã đăng kí sẽ hiển thị tại đây</p>
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div class=" bx ">
                                    <div className="card">
                                        <div className="card-header p-2 pl-2  bg-i ">
                                            <div className="row">
                                                <div class="col-sm-12 col-md-6 margin-top-5s pt-1 pb-1">
                                                    <div class="d-flex align-items-center pt-1  " >
                                                        <h2 className="color-white card-title font-weight-bold align-middle mb-0">KHÓA HỌC: {data}</h2>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 col-md-6 margin-top-5s pt-1 pb-1">
                                                    <div class="pt-1 float-right  " >
                                                        <h2 className="color-white card-title font-weight-bold align-middle mb-0">Thời gian khóa học: 01/05/2021 - 30/07/2021</h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="card-body p-0">
                                            <div class="table-responsive" style={{ overflowX: 'scroll' }}>
                                                <table class="table mb-0 font-16 text-center schedule table-hover">
                                                    <thead>
                                                        <tr >
                                                            <th style={{ minWidth: '110px' }}>Khóa học</th>
                                                            <th style={{ minWidth: '150px' }}>Id Zoom</th>
                                                            <th style={{ minWidth: '150px' }}>Mật khẩu</th>
                                                            <th style={{ minWidth: '150px' }}>Ngày học</th>
                                                            <th style={{ minWidth: '150px' }}>Giờ học</th>
                                                            <th style={{ minWidth: '150px' }}>Giảng viên</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <RenderBody/>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}