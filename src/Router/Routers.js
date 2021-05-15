import { Demo, Home, Course } from '../Component/Main';
import { Foodter, TopMenuClient, TopMenuUser } from '../Component/Template'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ForgotPass, Login } from '../Component/System';
import { MainUser, Profile } from '../Component/User';
import { HomeAdmin, Question } from '../Component/Admin';
export const Routers = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={TopMenuClient} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/forgot-password" component={ForgotPass}/>
                <Route exact path="/demo" component={Demo} />
                <Route exact path="/main" component={MainUser} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/admin-main" component={HomeAdmin} />
                <Route exact path="/question" component={Question} />
            </Switch>
            <Route path="/" component={Foodter}/>
        </BrowserRouter>
    )
}