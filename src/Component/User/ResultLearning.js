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

    const callShow = (value) =>{
        setShowTest(value)
    }
    //#region List
    const MEEC_Result_List = async (idc) => {

        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.getByCourse(countID);
            setDataCourse(response)
            try {
                const response2 = await TestAPI.getResult({accId: idc});
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
   
console.log(data)
    const ListResult = () => {
        return (
          data.length > 0 ?  data.map((item, index) => {
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
                            <button class="btn bg-w font-15" onClick={e => StartTest(item.listQuestions)}>Chi tiết kết quả</button>
                        </div>
                    </div>
                )
            }) : <div className="col-md-12"><p className="text-center font-20"> Không có bài thi nào đang diễn ra</p></div>
        )
    }
    // const ListTestActived = () => {
    //     return (
    //         dataActived.map((item, index) => {
    //             const x = filterItem(DataCourse, item.courseId)

    //             return (
    //                 <div className="col-md-6" key={index}>
    //                     <div class="card card-body card-test">
    //                         <h4 class="card-title f-900">{item.testName}</h4>
    //                         <p class=" row">
    //                             <span className="col-md-12">Khóa học: {x[0].testName} </span>
    //                             <span className="col-md-12">Ngày thi: {item.dateTest}</span>
    //                             <span className="col-md-6">Số lượng câu: {item.totalQuestion}</span>
    //                             <span className="col-md-6">Thời gian: {item.time} phút</span>
    //                         </p>
    //                         <button class="btn bg-d font-15">Đã hết thời gian</button>
    //                     </div>
    //                 </div>
    //             )
    //         })
    //     )
    // }



    const StartTest = (data) => {
        setShowTest(true)
        const datanew = data.map(i => {
            return {
                ...i,
                content: i.content.trim(),
                answerA: i.answerA.trim(),
                answerB: i.answerB.trim(),
                answerC: i.answerC.trim(),
                answerD: i.answerD.trim(),
                corectAns: i.corectAns.trim(),
            }
        })
        setDataQuestion(datanew)
    }

    // const RenderHeader = () => {
    //     return dataQuestion.map((item, index) => {
    //         return (
    //             <div key={index} className="p-2 pl-4">
    //                 <a href={`#no${index}`}> Câu {index + 1}</a>
    //             </div>
    //         )
    //     })
    // }
    // const arr = []
    // const [arrResult, setArrResult] = useState([])
    // const HandleChange = (e, id) => {
    //     const { name, value } = e.target;
    //     const obj = { questionId: id, result: value }
    //     console.log(obj);
    //     arr.push(obj)
    //     console.log(arr);
    // }

    // const handleSubmit = () => {
    //     console.log(arr);
    // }
    // const RenderQuestion = () => {
    //     return dataQuestion.map((item, index) => {
    //         return (
    //             <div key={index} className=" mt-5" id={`no${index}`}>
    //                 <h5 className="f-900">{index + 1}. {item.content}</h5>
    //                 <div className="row form-group ml-3">
    //                     <div className="col-md-3 custom-control custom-radio">
    //                         <input class="custom-control-input" value={item.answerA} type="radio" id={"customRadio1" + index} name={"customRadio" + index} onChange={e => HandleChange(e, item.questionId)} />
    //                         <label for={"customRadio1" + index} class="custom-control-label">A. {item.answerA}</label>
    //                     </div>
    //                     <div className="col-md-3 custom-control custom-radio">
    //                         <input class="custom-control-input" value={item.answerB} type="radio" id={"customRadio2" + index} name={"customRadio" + index} onChange={e => HandleChange(e, item.questionId)} />
    //                         <label for={"customRadio2" + index} class="custom-control-label">B. {item.answerB}</label>
    //                     </div>
    //                     <div className="col-md-3 custom-control custom-radio">
    //                         <input  class="custom-control-input" value={item.answerC} type="radio" id={"customRadio3" + index} name={"customRadio" + index} onChange={e => HandleChange(e, item.questionId)} />
    //                         <label for={"customRadio3" + index} class="custom-control-label">C. {item.answerC}</label>
    //                     </div>
    //                     <div className="col-md-3 custom-control custom-radio">
    //                         <input  class="custom-control-input" value={item.answerD} type="radio" id={"customRadio4" + index} name={"customRadio" + index} onChange={e => HandleChange(e, item.questionId)} />
    //                         <label for={"customRadio4" + index} class="custom-control-label">D. {item.answerD}</label>
    //                     </div>
    //                 </div>
    //             </div>

    //         )
    //     })
    // }
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

            <div className={!showTest ? "display-none" : ""}>
                {/* <div className="row">
                    <div className="col-md-12 bg-i " style={{ width: '100vw', height: '50px', position: 'fixed', zIndex: '100' }}>
                    </div>
                    <div className="col-md-2 " >
                        <div style={{
                            height: '95vh', width: '10%', position: 'fixed',
                            overflowX: 'scroll', backgroundColor: 'rgb(255, 250, 239)',
                            top: '50px'
                        }} >
                            <RenderHeader />
                        </div>
                    </div>
                    <div className="col-md-9" style={{ top: '50px' }}>
                        <RenderQuestion />


                    </div>
                    <div className="col-md-12">
                        <button className="btn bg-c float-right" onClick={handleSubmit}>Submit</button>
                    </div>
                </div> */}
                <div className="wraptest">
                    {showTest ? <RunTest
                        questions={dataQuestion}
                        testId={TestID}
                        callShow= {callShow} /> : <p></p>}
                </div>
            </div>

        </>
    )
}