import { useContext } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { store } from '../Store/store';
    
    export  const PrivateRoute = ({ component: Component, ...rest }) =>{
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
        const globalState = useContext(store);
        const { dispatch } = globalState;
        return (
            <Route {...rest} exact render={(props) => (
                (!globalState.state.userInfor &&  UserData === null) 
                ?  <Redirect to='/login' />
                :<Component {...props} />
            )} />
          )
    }