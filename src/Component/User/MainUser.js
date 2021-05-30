import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useContext } from "react";
import { TestAPI, CourseAPI } from "../../Service";
import { Alerterror, Alertsuccess, Alertwarning, FormatDate, FormatDateTime } from "../../Commom";
import { RunTest } from "./RunTest";
import { useHistory } from "react-router";
// import { store } from "../../Store/store";

export const MainUser = () => {
    const history = useHistory();
    const UserData = JSON.parse(localStorage.getItem("UserInfor"));
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    
    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        MEEC_Test_List(UserData.courseId);
        MEEC_Test_List_Actived(UserData.courseId);
        
    }, [])
  
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
        return data.filter(i => i.courseId === item);
    }
    useEffect(() => {
        MEEC_Check_Test();
    }, [])
   const MEEC_Check_Test = async () => {
       try {
           const res = await TestAPI.check();

       } catch (error) {
           console.log(error)
       }
   }
    const callShow = (value) =>{
        setShowTest(value)
    }
    //#region List
    const MEEC_Test_List = async (idc) => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await CourseAPI.getAll();
            setDataCourse(response)
            try {
                const response2 = await TestAPI.getNew({courseId: idc});
                const newData = response2.map(item => {
                    let d = new Date(item.dateTest), h = d.getHours(), m = d.getMinutes();
                    if (h.length < 2)
                    h = '0' + h;
                    if (m.length < 2)
                    m = '0' + m;

                    const hour = `${h}:${m}`

                    const itemNew = filterItem(response, item.courseId);
                    const Status = item.state ? "Chưa thi" : "Đã thi";
                    return {
                        ...item,
                        courseName: itemNew[0].name,
                        dateTest: FormatDate(item.dateTest),
                        Status: Status,
                        hour: hour,
                        date2: item.dateTest
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
     //#region List
     const MEEC_Test_List_Actived = async (idc) => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await CourseAPI.getAll();
            setDataCourse(response)
            try {
                const response2 = await TestAPI.getOld({courseId: idc});
                console.log(response2);
                const newData = response2.map(item => {
                    let d = new Date(item.dateTest), h = d.getHours(), m = d.getMinutes();
                    if (h.length < 2)
                    h = '0' + h;
                    if (m.length < 2)
                    m = '0' + m;

                    const hour = `${h}:${m}`;
                    const itemNew = filterItem(response, item.courseId);
                    const Status = item.state ? "Chưa thi" : "Đã thi";
                    return {
                        ...item,
                        courseName: itemNew[0].name,
                        dateTest: FormatDate(item.dateTest),
                        Status: Status,
                        hour: hour,
                        date2: item.dateTest
                    }
                })
                setDataActived([...newData])
            } catch (error) {
                console.log('Failed to fetch: ', error);
            }
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }

    const ListTest = () => {
        return (
            data.length > 0 ?  data.map((item, index) => {
                setTime(item.time)
                setTestID(item.testId);
                const x = filterItem(DataCourse, item.courseId)
                const date2 = new Date(item.date2)
                return (
                    <div className="col-md-6" key={index}>
                        <div class="card card-body card-test">
                            <h4 class="card-title f-900">{item.testName}</h4>
                            <p class=" row">
                                <span className="col-md-12">Khóa học: {x[0].name} </span>
                                <span className="col-md-6">Giờ thi: {item.hour}</span>
                                <span className="col-md-6">Ngày thi: {item.dateTest}</span>
                                <span className="col-md-6">Số lượng câu: {item.totalQuestion}</span>
                                <span className="col-md-6">Thời gian: {item.time} phút</span>
                            </p>
                            <button class="btn bg-i font-15" onClick={e => CheckDone(item.listQuestions, item.testId, date2)}>Vào thi</button>
                        </div>
                    </div>
                )
            }) : <div className="col-md-12"><p className="text-center font-20"> Không có bài thi nào đang diễn ra</p></div>
        )
    }
    const ListTestActived = () => {
        return (
            dataActived.map((item, index) => {
                const x = filterItem(DataCourse, item.courseId)

                return (
                    <div className="col-md-6" key={index}>
                        <div class="card card-body card-test">
                            <h4 class="card-title f-900">{item.testName}</h4>
                            <p class=" row">
                                <span className="col-md-12">Khóa học: {x[0].name} </span>
                                <span className="col-md-6">Giờ thi: {item.hour}</span>
                                <span className="col-md-6">Ngày thi: {item.dateTest}</span>
                                <span className="col-md-6">Số lượng câu: {item.totalQuestion}</span>
                                <span className="col-md-6">Thời gian: {item.time} phút</span>
                            </p>
                            <button class="btn bg-d font-15">Đã hết thời gian</button>
                        </div>
                    </div>
                )
            })
        )
    }
    const CheckDone = async (data, id, date2) => {
        const date = new Date();
        if(date.getTime() < date2.getTime()){
            Alertwarning("Chưa tới giờ thi, vui lòng trở lại sau")
            return;
        }
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
        try {
        const response2 = await TestAPI.checkDone({accId: UserData.accountId, testId: id});
         if(response2 !== "NotDone"){
            Alertwarning("Bạn đã hoàn thành bài thi này!")
         }else{
            setShowTest(true)
         }
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
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
                        <h3 className=" f-900">Khu vực thi cử</h3>
                        <p>Các bài thi của lớp học sẽ được hiển thị dưới đây</p>
                        <div className="row">
                            <div className="col-md-10 col-12">
                                <div class="card-box " style={{ backgroundColor: '#F8F9FF', border: 'none !important' }}>

                                    <ul class="nav nav-tabs tabs-bordered">
                                        <li class="nav-item nav-default pl-0 ">
                                            <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline "></i></span>
                                                <span class="d-none d-sm-block font-18">Đang diễn ra</span>
                                            </a>
                                        </li>
                                        
                                        <li class="nav-item nav-default">
                                            <a href="#messages-b1" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-email-outline "></i></span>
                                                <span class="d-none d-sm-block font-18">Đã kết thúc</span>
                                            </a>
                                        </li>

                                    </ul>

                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="home-b1">
                                            <div className="row">
                                                <ListTest />

                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane" id="messages-b1">
                                            <div className="row">
                                            <ListTestActived/>
                                                
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