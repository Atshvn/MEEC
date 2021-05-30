import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useContext } from "react";
import { TestAPI, CourseAPI } from "../../Service";
import { Alertsuccess, FormatDate } from "../../Commom";
import { RunTest } from "./RunTest";
import { useHistory } from "react-router";
import { timers } from "jquery";
// import { store } from "../../Store/store";

export const ResultLearning = () => {
    const history = useHistory()
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        MEEC_Result_List(UserData.accountId);

    }, [])
    const UserData = JSON.parse(localStorage.getItem("UserInfor"));
    const countID = UserData.courseId;
    // const globalState = useContext(store);
    // const { dispatch } = globalState;

    // console.log(globalState.state)
    const [DataCourse, setDataCourse] = useState([])
    const [data, setData] = useState([]);
    const date = new Date();
    const temp = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    const [showTest, setShowTest] = useState(false);
    const [Time, setTime] = useState();
    const [TestID, setTestID] = useState(0)
    const [dataQuestion, setDataQuestion] = useState([])
    const [dataActived, setDataActived] = useState([])
    const filterItem = (data, item) => {
        return data.filter(i => i.testId === item);
    }

    //#region List
    const MEEC_Result_List = async (idc) => {

        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.getByCourse(countID);
            setDataCourse(response)
            try {
                const response2 = await TestAPI.getResult({ accId: idc });
                const newData = response2.map(item => {
                    const itemNew = filterItem(response, item.testId);
                    return {
                        ...item,
                        testName: itemNew[0].testName,
                        testTime: itemNew[0].time,
                        totalQuestion: itemNew[0].totalQuestion,
                        dateTest: FormatDate(itemNew[0].dateTest),
                        date: FormatDate(date),
                        listQuestion: itemNew[0].listQuestions
                    }
                })
                setData([...newData])
            } catch (error) {
                console.log('Failed to fetch: ', error);
            }
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }

    const ListResult = () => {
        return (
            data.length > 0 ? data.map((item, index) => {
                return (
                    <div className="col-md-6" key={index}>
                        <div class="card card-body card-test">
                            <h4 class="card-title f-900">Bài thi: {item.testName}</h4>
                            <p class=" row">
                                <span className="col-md-6">Ngày thi: {item.dateTest}</span>
                                <span className="col-md-6">Tổng điểm: {item.score} / 100</span>
                                <span className="col-md-6">Số lượng câu: {item.totalQuestion}</span>
                                <span className="col-md-6">Thời gian: {item.testTime} phút</span>
                            </p>
                            <button class="btn bg-w font-15" onClick={e => showResultDetail(item, item.detailResults, item.listQuestion)}>Chi tiết kết quả</button>
                        </div>
                    </div>
                )
            }) : <div className="col-md-12"><p className="text-center font-20"> Bạn chưa thực hiện bài thi nào!!!</p></div>
        )
    }
    const [getItem, setGetItem] = useState({})
    const [getFinal, setGetFinal] = useState([])
    const showResultDetail = (item, result, ques) => {
        setShowTest(true)
        const datanew = ques.map((i, index) => {
           const rs = result[index]?.selectedAns ? result[index].selectedAns.trim() : ""
           const o =  result[index]?.ok ? result[index].ok : false
            return {
                ...i,
                content: i.content.trim(),
                answerA: i.answerA.trim(),
                answerB: i.answerB.trim(),
                answerC: i.answerC.trim(),
                answerD: i.answerD.trim(),
                corectAns: i.corectAns.trim(),
                selectedAns: rs,
                OK: o
            }
        })
        setGetItem(item);
        setGetFinal(datanew)

    }
    console.log(getFinal);
    const RenderData = () => {
        return (
            <>
                <div className="col-12">
                    <div className="row  text-center">
                        <div className="col-12 col-md-6"><p className="font-18 m-0">Học viên: {UserData.fullName}</p></div>
                        <div className="col-12 col-md-4"><p className="font-18 m-0 card-text">Bài thi: {getItem.testName}</p></div>
                        <div className="col-12 col-md-6"><p className="font-18 m-0">Ngày thi: {getItem.dateTest}</p></div>
                        <div className="col-12 col-md-4"><p className="font-18 m-0">Tổng điểm: {getItem.score} / 100</p></div>
                        <div className="col-12 col-md-6"><p className="font-18 m-0">Số lượng câu: {getItem.totalQuestion}</p></div>
                        <div className="col-12 col-md-4"><p className="font-18 m-0">Thời gian: {getItem.testTime} phút</p></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 mb-2">
                            <div className="row">
                                <div className="col-md-2"><p className="m-0 font-14 cl-d"><i>Chú thích: <sup>(*)</sup> </i></p></div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <div className="bg-c mr-4" style={{ width: '50px', height: '20px' }}></div>
                                    <div><p className="m-0 font-14">Đáp án đúng và câu trả lời đúng</p></div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <div className="bg-d mr-4" style={{ width: '50px', height: '20px' }}></div>
                                    <div><p className="m-0 font-14">Đáp án sai</p></div>
                                </div>
                            </div>
                        </div>
                        {getFinal.map((i, index) => {
                            let Correct = i.corectAns;
                            let repply = i.selectedAns;
                            if (i.OK) {

                            }
                            const AddClass = (ans) => {

                                if (i.OK && repply == ans) {
                                    return " pr-5 btn bg-c color-text w-100 f-700  font-16";
                                }
                                if (i.OK && repply != ans) {
                                    return " pr-5 btn  color-text w-100 f-700  font-16";
                                }
                                if (!i.OK && repply == ans && Correct != ans) {
                                    return " pr-5 btn bg-d color-text w-100 f-700  font-16";
                                }
                                if (!i.OK && Correct == ans) {
                                    return " pr-5 btn bg-c color-text w-100 f-700  font-16";
                                }
                                else {
                                    return " pr-5 btn  color-text w-100 f-700  font-16";
                                }
                            }
                            return (
                                <div className={i.OK ? "col-12 col-md-12 pl-4 pb-3 pt-2 bg-c2 mb-1" : "col-12 col-md-12 pl-4 bg-d2 pb-3 pt-2  mb-1"}>
                                    <p className="m-0 font-18"> Câu {index + 1}: {i.content}</p>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <span className={AddClass(i.answerA)}>A. {i.answerA}</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className={AddClass(i.answerB)}>B. {i.answerB}</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className={AddClass(i.answerC)}>C. {i.answerC}</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className={AddClass(i.answerD)}>D. {i.answerD}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        < >
            <div className={showTest ? "display-none" : ""}>
                <TopMenuUser />
                <div className="row">
                    <div className="col-md-4 col-12">
                        <SiderBarUser />
                    </div>
                    <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                        <h3 className=" f-900">Khu vực kết quả học tập</h3>
                        <p>Kết quả của các bài thi sẽ được hiển thị dưới đây</p>
                        <div className="row">
                            <div className="col-md-10 col-12">
                                <div class="card-box " style={{ backgroundColor: '#F8F9FF', border: 'none !important' }}>

                                    <ul class="nav nav-tabs tabs-bordered">
                                        <li class="nav-item nav-default pl-0 ">
                                            <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline "></i></span>
                                                <span class="d-none d-sm-block font-18">Danh sách kết quả</span>
                                            </a>
                                        </li>



                                    </ul>

                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="home-b1">
                                            <div className="row">
                                                <ListResult />

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={!showTest ? "display-none" : "bg pt-5 position-relative"} style={{ width: '100vw', height: '110vh' }}>
                <button className="position-absolute btn bg-i btn-lg"
                    style={{ top: '10px', right: '40px' }}
                    onClick={e=> setShowTest(false)}>Trở lại</button>
                <div className="container bg-white card " style={{ height: '90vh', overflowY: 'scroll', }}>
                    <div className="row">
                        <div className="col-md-12 col-12 pt-2" >
                            <h1 className="text-center f-900"> CHI TIẾT KẾT QUẢ</h1>
                        </div>
                        <RenderData />

                    </div>
                </div>

            </div>

        </>
    )
}