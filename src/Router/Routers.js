import { Demo, Home, Course, Course1 , Course3 , Course4, Course5, Course6 , Course2, Contact, Recruit, RecruitDetail, ForMe} from '../Component/Main';
import { Foodter, TopMenuClient} from '../Component/Template'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { ForgotPass, Login , Page404, Signup, LoginAdmin, RegisterCourse} from '../Component/System';
import { Documents, MainUser, Mid, Profile, ResultLearning, Schedule } from '../Component/User';
import { HomeAdmin, Question, TestManager } from '../Component/Admin';
import { CourseManage } from '../Component/Admin/CourseManage';
import ScrollToTop from '../Commom/ScrollToTop';
import { PrivateRoute } from './PrivateRoute';
import { AdminRoute } from './AdminRoute';
export const Routers = () => {
   
    return (
        <BrowserRouter>
            <Route path="/" component={TopMenuClient} />
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/register-success" component={RegisterCourse}/>
                <Route exact path="/forgot-password" component={ForgotPass}/>
                {/* <Route exact path="/demo" component={Demo} /> */}
                <PrivateRoute exact path="/main" component={MainUser} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/mid" component={Mid} />
                <PrivateRoute exact path="/result" component={ResultLearning} />
                <PrivateRoute exact path="/schedule" component={Schedule} />
                <PrivateRoute exact path="/documents" component={Documents} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/course1" component={Course1} />
                <Route exact path="/course2" component={Course2} />
                <Route exact path="/course3" component={Course3} />
                <Route exact path="/course4" component={Course4} />
                <Route exact path="/course5" component={Course5} />
                <Route exact path="/course6" component={Course6} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/recruit" component={Recruit} />
                <Route exact path="/recruit-detail" component={RecruitDetail} />
                <Route exact path="/for-me" component={ForMe} />

                {/* <Route exact path="/admin" component={LoginAdmin}/>
                <AdminRoute exact path="/admin-main" component={HomeAdmin} />
                <AdminRoute exact path="/admin-question" component={Question} />
                <AdminRoute exact path="/admin-test" component={TestManager} />
                <AdminRoute exact path="/admin-course" component={CourseManage} /> */}

                <Route exact component={Page404}/>
            </Switch>
            <Route path="/" component={Foodter}/>
        </BrowserRouter>
    )
}