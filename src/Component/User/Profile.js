import { TopMenuUser } from "../Template"
import { SiderBarUser } from "../Template/SiderBarUser"
import React, { useState, useEffect, useRef } from "react";
import { CourseAPI, SystemAPI } from "../../Service";
import Select from "react-select"
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import { Alerterror, Alertsuccess, Alertwarning, FormatDate, FormatDate2 } from "../../Commom";
import { useHistory } from "react-router";
export const Profile = () => {
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    useEffect(() => {
        MEEC_Gender_Local();
        MEEC_Course_List();
    }, [])
    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        setEmail(UserData.email)
        setUserName(UserData.fullName)
        setCourseID(UserData.courseId)
        setNumberPhone(UserData.phoneNumber)
        const list = [
            { value: 0, label: "Vui lòng chọn" },
            { value: 1, label: "Nam" },
            { value: 2, label: "Nữ" },
            { value: 3, label: "Khác" }
        ]
        const x = list.find(i => i.label == UserData.gender)
        setGender(x ? x : { value: 0, label: "Vui lòng chọn" })
        setAddress(UserData.address)
        setDateofBirth(new Date(FormatDate(UserData.dateOfBirth, 0)));
    }, [])
    const MEEC_Gender_Local = () => {
        const list = [
            { value: 0, label: "Vui lòng chọn" },
            { value: 1, label: "Nam" },
            { value: 2, label: "Nữ" },
            { value: 3, label: "Khác" }
        ]
        setDataGender(list)
    }
    const UserInfor = JSON.parse(localStorage.getItem("UserInfor"));
    const accId = UserInfor.accountId;
    const [email, setEmail] = useState("");

    const [userName, setUserName] = useState("")
    const userRef = useRef();

    const [Gender, setGender] = useState({ value: 0, label: "Vui lòng chọn" })
    const [DataGender, setDataGender] = useState([])

    const [NumberPhone, setNumberPhone] = useState("")
    const PhoneRef = useRef();

    const [Address, setAddress] = useState("");
    const AddressRef = useRef();

    const [courseID, setCourseID] = useState({ value: 0, label: "Vui lòng chọn" });

    const [DateofBirth, setDateofBirth] = useState(new Date())

    const [showPass, setShowPass] = useState(false)

    const [passOld, setPassOld] = useState("")
    const [PassNew, setPassNew] = useState("");
    const [PassCheck, setPassCheck] = useState("")
    //#region List
    const MEEC_Course_List = async () => {
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));

        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await CourseAPI.getAll();
            const y = response.find(i => i.courseId == UserData.courseId);
            setCourseID({ value: y.courseId, label: y.name });
           
        } catch (error) {
            console.log('Failed to fetch: ', error);
        }
    }
    //#region List

    const MEEC_ChangeProfile = async () => {
        const obj={
            email: email,
            fullName: userName,
            dateOfBirth: FormatDate2(DateofBirth),
            phoneNumber: +(('' + NumberPhone).replace('0', '')),
            gender: Gender.label,
            address: Address,
            courseId: courseID.value
        }
        try {
            const response = await SystemAPI.put(obj);
            Alertsuccess("Cập nhật thông tin thành công")
            const res = {
                accountId: UserInfor.accountId,
                address: Address,
                courseId: UserInfor.courseId,
                dateOfBirth: FormatDate2(DateofBirth),
                email: email,
                fullName: userName,
                gender: Gender.label,
                phoneNumber: +(('' + NumberPhone).replace('0', ''))
            }
            localStorage.setItem("UserInfor", JSON.stringify(res));

        } catch (error) {
            Alerterror("Thông tin lỗi")
            console.log(error);
        }
    }

    const MEEC_ChangePassWord = async () => {
        if(PassNew !== PassCheck){
            Alertwarning("Nhập lại mật khẩu không chính xác!")
            return;
        }
        const obj = {
            oldPassWord: passOld,
            newPassWord: PassNew
        }
        try {
            const res = await SystemAPI.changePassWord(obj, accId)
            if(res == 'Success'){
                Alertsuccess("Đổi mật khẩu thành công")
                setShowPass(false);
                setPassCheck("")
                setPassNew("")
                setPassOld("")
                return;
            }
            else{
                Alerterror("Mật khẩu cũ không chính xác")
                return;
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

      
    const history = useHistory();
    const HandleLogout = () => {
        history.push("/login");
        localStorage.removeItem("UserInfor");
    }
   

    return (
        <div>
            <TopMenuUser />
            <div className="row">
                <div className="col-md-4 col-12">
                    <SiderBarUser />
                </div>
                <div className="col-md-8 col-12 mt-4" style={{ marginLeft: '-50px' }}>
                    <h3 className="font-weight-bold f-900 ">Tài khoản: {userName}</h3>
                    <p class="mb-4">Quản lý, cập nhật đầy đủ thông tin cá nhân để hoạt động tốt hơn trên MEEC!</p>
                    <div class={showPass? "card card-body card-test bd-none mr-5 display-none" : "card card-body card-test bd-none mr-5"}>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="d-flex justify-content-center">
                                    <img className="avatar m-auto" class="rounded-circle" src="assets\images\avatar.jpg" alt="" width="250" />

                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="row mt-4 mr-4">
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0" >Họ và tên</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend" >
                                                    <span class="input-group-text bd-input"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-user pl-1"></i></span>
                                                </div>
                                                <input type="text" class="form-control form-custom bd-input"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px',
                                                    }}
                                                    value={userName}
                                                    onChange={e => setUserName(e.target.value)}
                                                    ref={userRef} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0" >Số điện thoại</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend  bd-input" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-user pl-1"></i></span>
                                                </div>
                                                <input type="number" class="form-control form-custom bd-input" maxLength="12"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px'
                                                    }}
                                                    ref={PhoneRef}
                                                    value={`0${NumberPhone}`} onChange={e => setNumberPhone(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0" >Email</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#f0f0f0',
                                                            borderRight: 'none'
                                                        }}><i class="far fa-envelope pl-1"></i></span>
                                                </div>
                                                <input type="text" class="form-control form-custom "
                                                    style={{
                                                        backgroundColor: '#f0f0f0',
                                                        borderLeft: 'none', fontSize: '18px',
                                                    }}
                                                    placeholder="Email của bạn" disabled defaultValue={email} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 col-12 ">
                                <div className="row border-bottom  border-success">
                                    <div className="col-6 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0" >Giới tính</p>
                                            <div class="input-group">

                                                <Select
                                                    className="SelectMeno font-20"
                                                    value={Gender}
                                                    options={DataGender}
                                                    onChange={item => setGender(item)} >

                                                </Select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-2 pr-5">
                                        <div class="form-group">
                                            <p class="label m-0" >Địa chỉ</p>
                                            <div class="input-group">
                                               
                                                <input type="text" class="form-control form-custom bd-input"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        fontSize: '18px',
                                                    }}
                                                    ref={AddressRef} value={Address} onChange={e => setAddress(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-2 ">
                                        <div class="form-group">
                                            <p class="label m-0" >Ngày Sinh</p>
                                            <div class="input-group SelectDatetime">
                                                <DateTimePicker className="form-control font-18"
                                                    onChange={date => setDateofBirth(date)}
                                                    value={DateofBirth}
                                                    format="dd/MM/yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-2 pr-5">
                                        <div class="form-group">
                                            <p class="label m-0" >Khoá học</p>
                                            <div class="input-group">
                                                <input type="text" class="form-control form-custom "
                                                    style={{
                                                        backgroundColor: '#f0f0f0',
                                                        borderLeft: 'none', fontSize: '18px',
                                                    }}
                                                    disabled value={courseID.label} onChange={e => setCourseID(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="col-12 mb-2">
                                        <button onClick={MEEC_ChangeProfile} class="btn bg-i w-100 font-18 pt-10 pb-10">Lưu lại</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <h3 className =" m-0 pb-3 color-text">Các thông tin khác</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn bg2 w-100 p-3 btn-rounded" onClick ={ e => setShowPass(true)}>
                                            <p className=" pl-3 m-0 text-secondary font-20 d-flex  align-items-center justify-content-between"> Mật khẩu đăng nhập <i class="fas fa-chevron-right float-right"></i> </p>
                                            </button>
                                    </div>
                                    <div className="col-md-6">
                                    <button className="btn bg2 w-100 p-3 btn-rounded" onClick={HandleLogout}>
                                            <p className=" pl-3 m-0 text-secondary font-20 d-flex  align-items-center justify-content-between"> Đăng xuất <i class="fas fa-sign-out-alt pl-3"></i> </p>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={!showPass? "card card-body card-test bd-none mr-5 display-none" : "card card-body card-test bd-none mr-5"}>
                        <div className="row">
                           
                            <div className="col-md-12 col-12">
                                <div className="row mt-4 mr-4">
                                    <div className="col-12 col-md-4 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0 color-text" >Mật khẩu cũ</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend" >
                                                    <span class="input-group-text bd-input"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="fas fa-lock"></i></span>
                                                </div>
                                                <input type="password" class="form-control form-custom bd-input"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px',
                                                    }}
                                                    value={passOld}
                                                    onChange={e => setPassOld(e.target.value)}
                                                     placeholder="Nhập vào mật khẩu cũ" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-12 col-md-4 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0 color-text" >Mật khẩu mới</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend  bd-input" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="fas fa-lock"></i></span>
                                                </div>
                                                <input type="password" class="form-control form-custom bd-input" maxLength="12"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px'
                                                    }}
                                                    value={PassNew} placeholder="Nhập mật khẩu mới" 
                                                    onChange={e => setPassNew(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mb-2">
                                        <div class="form-group">
                                            <p class="label m-0 color-text" >Nhập lại mật khẩu mới</p>
                                            <div class="input-group">
                                                <div class="input-group-prepend  bd-input" >
                                                    <span class="input-group-text"
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            borderRight: 'none'
                                                        }}><i class="fas fa-lock"></i></span>
                                                </div>
                                                <input type="password" class="form-control form-custom  bd-input "
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderLeft: 'none', fontSize: '18px',
                                                    }}
                                                    placeholder="Nhập lại mất khẩu mới"  value={PassCheck} 
                                                    onChange={e => setPassCheck( e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mt-4">
                                        <button className="btn bg-i float-right w-50"
                                        onClick={MEEC_ChangePassWord}>
                                            <p className="m-0"> Đổi mật khẩu</p>
                                        </button>
                                    </div>
                                    <div className="col-md-6 col-12  mt-4">
                                    <button className="btn btn-outline-secondary w-50"
                                    onClick={ e => setShowPass(false)}>
                                            <p className="m-0">Trở lại</p>
                                        </button>
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