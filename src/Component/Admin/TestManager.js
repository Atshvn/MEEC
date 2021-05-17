import { TopMenuAdmin } from "../Template"
import { QuestionAPI, TestAPI } from "../../Service";
import { Alertsuccess, Alerterror, Alertwarning, DataTable, ExportExcel, SelectCourse, FormatDateJson } from "../../Commom";
import React, { useState, useEffect, useRef } from 'react';
import DateTimePicker from 'react-datetime-picker'
import Select from 'react-select';
export const TestManager = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");

    }, [])

    useEffect(() => {
       
    }, []);

    const [ID, setID] = useState(0);

    const [TestName, setTestName] = useState("");
    const TestNameRef = useRef();

    const [TestDate, setTestDate] = useState(new Date())

    const [TotalQuestion, setTotalQuestion] = useState(0);
    const TotalQuestionRef = useRef()

    const [TestTime, setTestTime] = useState(0);
    const TestTimeRef = useRef();

    const [CourseID, setCourseID] = useState(0)
    const [disableBtn, setDisableBtn] = useState(false);


    const [data, setData] = useState([])
    const [dataUnfinish, setDataUnfinish] = useState([])
    const [dataFinish, setDataFinish] = useState([])

    const [CourseSearch, setCourseSearch] = useState(0)

    //#region List
    const MEEC_Test_List = async () => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.getAll();
            console.log('List: ', response);

            setData(response)
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }
    const MEEC_TestUnFinish_List = async () => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.getUnfinished();
            console.log('Unfinish: ', response);

            setDataUnfinish(response)
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }
    const MEEC_TestFinish_List = async () => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.getFinish();
            console.log('Finish: ', response);

            setDataFinish(response)
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }
    //#endregion

    const MEEC_Test_Save = async () => {
        if (TestName === "") {
            Alertwarning("Nhập tên bài kiểm tra");
            TestNameRef.current.focus();
            return;
        }
        if (TestTime === 0) {
            Alertwarning("Nhập thời gian thi");
            TestTimeRef.current.focus();
            return;
        }
        if (TotalQuestion === 0) {
            Alertwarning("Nhập số lượng câu hỏi");
            TotalQuestionRef.current.focus();
            return;
        }
        if (TestTime < 0) {
            Alertwarning("Thời gian không hợp lệ");
            TestTimeRef.current.focus();
            return;
        }
        if (TotalQuestion < 0) {
            Alertwarning("Số lượng câu hỏi không hợp lệ");
            TotalQuestionRef.current.focus();
            return;
        }
        if (CourseID === 0) {
            Alertwarning("Hãy chọn khóa học")
            return
        }

        setDisableBtn(true)
        const obj = {
            testName: TestName,
            courseId: CourseID,
            dateTest: FormatDateJson(TestDate, 1),
            time: +TestTime,
            totalQuestion: +TotalQuestion,
            createsby: "TA"

        }
        console.log(obj)
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.post(obj);
            console.log('Fetch  successfully: ', response);
            Alertsuccess("Lưu thành công");
            setDisableBtn(false)
        } catch (error) {
            Alerterror("Lỗi")
            setDisableBtn(false)
            console.log('Failed to fetch: ', error);
        }
    }

    const MEEC_Question_Delete = async (Id) => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await QuestionAPI.delete({ id: Id });
            console.log('Fetch  successfully: ', response);
            Alertsuccess("Xóa thành công");
            const newData = data.filter(i => i.questionId !== Id);
            setData(newData)
        } catch (error) {
            Alerterror("Lỗi")
            console.log('Failed to fetch: ', error);
        }
    }

    const MEEC_Question_View = (item) => {

        document.querySelector("#data-add").click();
    }

    const MEEC_Question_Cancer = () => {

        setID(0);

    }




    //#region Table
    const columns = [
        {
            Header: "Tùy chọn",
            accessor: '[row identifier to be passed to button]',
            fixed: 'left',
            width: 110,
            Cell: ({ row }) => (<span><button
                className="btn btn-sm btn-info" style={{ marginRight: '5px' }} onClick={e => clickEdit({ row })}>Sửa
                </button><button
                    className="btn btn-sm btn-danger" onClick={e => clickDelete({ row })}>Xóa
                </button></span>)
        },
        {
            Header: "Nội dung",
            accessor: "content",
            width: 400
        },
        {
            Header: "Đáp án 1",
            accessor: "answerA",
        },
        {
            Header: "Đáp án 2",
            accessor: "answerB",
        },
        {
            Header: "Đáp án 3",
            accessor: "answerC",

        },
        {
            Header: "Đáp án 4",
            accessor: "answerD",

        }
        ,
        {
            Header: "Đáp án đúng",
            accessor: "corectAns",

        }
    ];
    const clickEdit = (item) => {
        MEEC_Question_View(item.row._original)
    }
    const clickDelete = (item) => {
        MEEC_Question_Delete(item.row._original.questionId);
    }
    const clickexcel = () => {
        ExportExcel(newData, "Danh-sach-cau-hoi");
    }

    const newData = data.map(i => {
        return {
            "Câu hỏi": i.content,
            "Đáp án 1": i.answerA,
            "Đáp án 2": i.answerB,
            "Đáp án 3": i.answerC,
            "Đáp án 4": i.answerD,
            "Đáp án đúng": i.corectAns,

        }
    })
    //#endregion

    return (
        <div className="unsticky-layout">
            <TopMenuAdmin />
            <div class="content-page" style={{ marginTop: '0px', padding: '0px' }}>
                <div class="content " style={{ marginTop: '80px' }}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card-box pt-0 bx">
                                    <ul class="nav nav-tabs tabs-bordered font-16" >
                                        <li class="nav-item">
                                            <a href="#home" id="data-add" data-toggle="tab" aria-expanded="false" class="nav-link active" >
                                                <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline font-18"></i></span>
                                                <span class="d-none d-sm-block">Thêm mới</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#profile" data-toggle="tab" aria-expanded="true" class="nav-link ">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-account-outline font-18"></i></span>
                                                <span class="d-none d-sm-block">Danh sách bài kiểm tra</span>
                                            </a>
                                        </li>


                                    </ul>
                                    <div class="tab-content pt-3">
                                        <div class="tab-pane show active" id="home">
                                            <div className="card">
                                                <div className="card-header p-2  bg-i ">
                                                    <div class="d-flex align-items-center pt-1  " >
                                                        <h3 className="color-white card-title font-weight-bold align-middle mb-0">THÊM BÀI KIỂM TRA</h3>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row ">
                                                        <div class="col-sm-12 col-md-4">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Tên bài kiểm tra</label>
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control back-ground"
                                                                        ref={TestNameRef} value={TestName} onChange={e => setTestName(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-4">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Thời gian thi (phút)</label>
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control back-ground"
                                                                        ref={TestTimeRef} value={TestTime} onChange={e => setTestTime(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-4">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Số lượng câu hỏi</label>
                                                                <div class="input-group">
                                                                    <input type="number" class="form-control back-ground"
                                                                        ref={TotalQuestionRef} value={TotalQuestion} onChange={e => setTotalQuestion(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Khóa học</label>
                                                                <div class="input-group">
                                                                    <SelectCourse
                                                                        onSelected={e => setCourseID(e.value)}
                                                                        items={CourseID}
                                                                        font="font-16">
                                                                    </SelectCourse>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Ngày thi</label>
                                                                <div class="input-group SelectDatetime">
                                                                    <DateTimePicker className="form-control"
                                                                        onChange={date => setTestDate(date)}
                                                                        value={TestDate}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-12 d-flex justify-content-center mt-4">
                                                            <button disabled={disableBtn ? true : false} className="btn bg-c waves-effect width-md waves-light mr-3 "
                                                                onClick={MEEC_Test_Save}
                                                            >
                                                                Lưu
                                                        </button>
                                                            <button className="btn bg-d waves-effect width-md "
                                                                onClick={MEEC_Question_Cancer}>
                                                                Hủy
                                                        </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane " id="profile">
                                            <div className="card bx">
                                                <div className="card-header p-0 pl-2  bg-i ">
                                                    <div class="row">
                                                        <div class="col-sm-12 col-md-6 d-flex align-items-center" >
                                                            <h3 className="color-white card-title font-weight-bold align-middle mb-0"> QUẢN LÝ BÀI KIỂM TRA</h3>
                                                        </div>

                                                        <div class="col-sm-12 col-md-6 margin-top-5s pt-1 pb-1">
                                                            <button type="button" class="btn btn-sm bg-c pull-right margin-left-5 mr-4" onClick={clickexcel}>
                                                                <i class="fa fa-download pr-2"></i>
                                                        Xuất Excel
                                                    </button>
                                                            <button type="button" class="btn btn-sm btn-danger pull-right mr-2" onClick={MEEC_Test_List} >
                                                                <i class="fa fa-eye pr-2"></i>
                                                        Xem
                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body w-50 m-auto">
                                                            <div class="form-group">
                                                                <label class="label mb-0">Khóa học</label>
                                                                <div class="input-group">
                                                                    <SelectCourse
                                                                        onSelected={e => setCourseSearch(e.value)}
                                                                        items={CourseSearch}
                                                                        font="font-16"
                                                                        title="Chọn tất cả">
                                                                    </SelectCourse>
                                                                </div>
                                                            </div>
                                                </div>
                                                <div className="table-responsive font-16" style={{ color: '#555', zIndex: '0' }}>
                                                    <DataTable
                                                        data={data}
                                                        columns={columns}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}