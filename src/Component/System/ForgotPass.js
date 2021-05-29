
import React, { useState, useEffect, useRef } from "react";
import logo from '../../logo2.png';
import { Link , useHistory} from 'react-router-dom';
import { Alerterror, Alertsuccess, Alertwarning } from "../../Commom";
import { SystemAPI } from "../../Service";

export const ForgotPass = () => {
    const history = useHistory();
    useEffect(() => {
        document.querySelector(".main-header").classList.add("display-none");
        document.querySelector(".main-foodter").classList.add("display-none");
    }, [])
    
    useEffect(() => {
        const eventEnter = (e) => {
            if(e.key === "Enter" || e.key === "NumpadEnter"){
                document.querySelector("#click").click();
                e.preventDefault();
            }
        }
        document.addEventListener("keydown",eventEnter)
        return () => {
            document.removeEventListener("keydown",eventEnter)
        }
            
    }, [])
    const [Email, setEmail] = useState("")
    const emailRef = useRef();
    const handleForgot = async () => {
        if(Email === ""){
            Alertwarning("Nhập email");
            emailRef.current.focus();
            return;
        }
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await SystemAPI.forgot({email:Email});
            if(response === 'Email not found'){
                Alerterror("Email không tồn tại");
                return;
            }
            else{
                Alertsuccess("Vui lòng kiểm tra mail để nhận mật khẩu");
                history.push("/login");
            }
            
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
                        <div className="main-forgot ">
                            <div className="pt-5 pb-5">
                              <Link to="/">
                              <img class="logo" style={{ marginLeft: '-30px' }} src={logo} alt="" />
                              </Link>
                            </div>
                            <div className="">
                                <h2 style={{ fontWeight: '900' }}>Quên mật khẩu?</h2>
                                <p style={{ fontSize: '1rem', fontWeight: '900' }}>Hãy nhập email để được cấp lại mật khẩu mới</p>
                            </div>
                            <div className="pt-3" >
                                <p className="mb-1" style={{ fontSize: '1rem', fontWeight: '500' }}>Đặt lại mật khẩu qua email</p>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                    </div>
                                    <input type="text" ref={emailRef} value={Email} 
                                    onChange={e => setEmail(e.target.value)}
                                    class="form-control form-custom" placeholder="Email của bạn" />
                                </div>
                            </div>
                            <div>
                                <button type="button" id="click" onClick={handleForgot} class="btn btn-success w-100 mb-3 font-1rem pt-2 pb-2">Reset lại mật khẩu</button>

                            </div>
                            <div className="font-1rem" >
                                Đã có tài khoản MEEC?
                                <Link to="/login" className="text-success" > Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}