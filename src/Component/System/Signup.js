


import React, { useState, useEffect, useRef } from "react";
import logo from '../../logo2.png';
import { Link, useHistory } from 'react-router-dom';
import { Alertsuccess, SelectCourse, Alertwarning, Alerterror } from "../../Commom";
import { SystemAPI } from "../../Service";
export const Signup = () => {
    const history = useHistory();
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])

    const [CountID, setCountID] = useState(0)
    const [userName, setUserName] = useState("")
    const userNameRef = useRef();

    const [email, setEmail] = useState("");
    const emailRef = useRef();

    const handleSignUp = async () => {
        if(userName === ""){
            Alertwarning("Nhập tên người dùng");
            userNameRef.current.focus();
            return;
        }
        if(email === ""){
            Alertwarning("Nhập email");
            emailRef.current.focus();
            return;
        }
        if(CountID === 0){
            Alertwarning("Chọn khóa học")
            return
        }
        const obj = {
            fullName: userName,
            email: email,
            courseId: +CountID
        }
        console.log(obj)
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await SystemAPI.signup(obj);
            console.log(response)
            if(response === 'Exist'){
                Alerterror("Email đã tồn tại");
                return;
            }
            else{
                Alertsuccess("Đăng kí thành công");
                history.push("/login");
            }
            // dispatch({ type: 'SET_USERINFO', userInfor: response })
            
        } catch (error) {
            Alerterror("Lỗi")
            console.log('Failed to fetch: ', error);

        }
    }



    return (
        <div class="container-fluid ">
            <div className="login">
                <div className="row ">
                    <div className="col-md-8 col-12 pull-right ">
                    </div>
                    <div className="col-md-4 col-12 login-form pr-5 pl-5" >
                        
                        <div className= "main-signup ">
                            <div className="pt-5 pb-5">
                                <Link to="/">
                                    <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="pb-3">
                                <h2 style={{ fontWeight: '900' }}>Đăng kí khóa học</h2>
                                <p style={{ fontSize: '1rem', fontWeight: '500' }}>Học tập, thi online, xem điểm và thảo luận cùng hơn 10000 thành viên khác trong cộng đồng MEEC</p>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                   
                                    <input type="text" class="form-control form-custom pl-2"
                                     placeholder="Tên của bạn"  autoComplete="true"
                                     ref={userNameRef} value={userName} onChange={ e => setUserName(e.target.value)} />
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text"><i class="far fa-user"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    
                                    <input type="email" required class="form-control form-custom pl-2"
                                     placeholder="Email của bạn"  autoComplete="true"
                                     ref={emailRef} value={email} onChange={ e => setEmail(e.target.value)}  />
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    <SelectCourse
                                        onSelected={e => setCountID(e.value)}
                                        items={CountID}>
                                    </SelectCourse>
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-success w-100 mb-3 font-1rem pt-2 pb-2"
                                onClick={handleSignUp}>Nhận tài khoản qua email</button>
                            </div>
                            <div className="font-1rem" >
                                Đã có tài khoản MEEC?
                                <Link to="/login" className="text-success font-weight-bold pointer" > Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}