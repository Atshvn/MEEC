import { useState } from "react";
import { useEffect } from "react";
import { CourseAPI } from "../../Service";
import { SiderBarUser, TopMenuUser } from "../Template"
export const Schedule = () => {

    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        const courseId = UserData.courseId;
        MEEC_Course_List(courseId);
    }, []);

    const [data, setData] = useState([])
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
                                                <table class="table mb-0 font-14 text-center schedule">
                                                    <thead>
                                                        <tr >
                                                            <th style={{ minWidth: '110px' }}>Thời gian</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 2</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 3</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 4</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 5</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 6</th>
                                                            <th style={{ minWidth: '150px' }}>Thứ 7</th>
                                                            <th style={{ minWidth: '150px' }}>Chủ nhật</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">8AM-10AM</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10AM-12AM</th>
                                                            <td></td>
                                                            <td className="bg-c2">
                                                                <p>Phòng: MEEC 2.1</p>
                                                                <p>GV: V.David</p>
                                                            </td>
                                                            <td></td>
                                                            <td className="bg-c2">
                                                                <p>Phòng: MEEC 1.1</p>
                                                                <p>GV: Le Thong</p>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2PM-4PM</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4PM-6PM</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">6PM-8PM</th>
                                                            <td className="bg-c2">
                                                                <p>Phòng: MEEC 1.1</p>
                                                                <p>GV: Le Thong</p>
                                                            </td>
                                                            <td></td>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td></td>
                                                            <td className="bg-c2">
                                                                <p>Phòng: MEEC 2.1</p>
                                                                <p>GV: V.David</p>
                                                            </td>
                                                            <td> </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">8PM-10PM</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
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