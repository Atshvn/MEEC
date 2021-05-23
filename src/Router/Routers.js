import { Demo, Home, Course, Course1 , Course3 , Course4, Course5, Course6 , Course2} from '../Component/Main';
import { Foodter, TopMenuClient} from '../Component/Template'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ForgotPass, Login , Signup} from '../Component/System';
import { MainUser, Profile } from '../Component/User';
import { HomeAdmin, Question, TestManager } from '../Component/Admin';
import { CourseManage } from '../Component/Admin/CourseManage';
import ScrollToTop from '../Commom/ScrollToTop';
export const Routers = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={TopMenuClient} />
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/forgot-password" component={ForgotPass}/>
                <Route exact path="/demo" component={Demo} />
                <Route exact path="/main" component={MainUser} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/course1" component={Course1} />
                <Route exact path="/course2" component={Course2} />
                <Route exact path="/course3" component={Course3} />
                <Route exact path="/course4" component={Course4} />
                <Route exact path="/course5" component={Course5} />
                <Route exact path="/course6" component={Course6} />
                <Route exact path="/admin-main" component={HomeAdmin} />
                <Route exact path="/admin-question" component={Question} />
                <Route exact path="/admin-test" component={TestManager} />
                <Route exact path="/admin-course" component={CourseManage} />
            </Switch>
            <Route path="/" component={Foodter}/>
        </BrowserRouter>
    )
}