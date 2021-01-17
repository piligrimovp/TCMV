import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from './pages/Main';
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/Profile";
import ProfileLogin from "./pages/Profile/Login";
import ProfileProfile from "./pages/Profile/Profile";
import ProfilePin from "./pages/Profile/Pin";
import PageNotFound from "./pages/404";
import {ACCESS_TOKEN, USER_AUTHORIZED} from "./constants";
import {getCurrentUser} from "./ApiUtils";
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.changeState = (state = true) => {
            if (state) {
                this.getUser();
            } else {
                this.setState({
                    authorized: false,
                })
            }
        }

        this.state = {
            authorized: false,
            loading: true,
            user: {},
            changeState: this.changeState,
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        getCurrentUser()
            .then(response => {
                response.isAdmin = response.role == "Admin"
                this.setState({
                    user: response,
                    authorized: true,
                    loading: false,
                });
            }).catch(error => {
            console.log(error)
            this.setState({
                loading: false,
                authorized: false,
                user: {}
            });
        });
    }

    logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authorized: false,
            user: {}
        });

        return <Redirect to={'/'}/>
    }


    render() {
        if (this.state.loading) {
            return <div>Авторизация...</div>
        }

        if (!this.state.authorized) {
            return <BrowserRouter>
                <Switch>
                    <Route path={'/signup'} component={SignUp}/>
                    <Route path={'/'} component={Auth}/>
                </Switch>
            </BrowserRouter>
        }

        return (
            <USER_AUTHORIZED.Provider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/profile/profile'} component={ProfileProfile}/>
                        <Route path={'/profile/login'} component={ProfileLogin}/>
                        <Route path={'/profile/pin'} component={ProfilePin}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route exact={true} path={'/'} component={Main}/>
                        <Route path={'/logout'} component={this.logout}/>
                        <Route path={'/'} component={PageNotFound}/>
                    </Switch>
                </BrowserRouter>
            </USER_AUTHORIZED.Provider>
        )
    }
}

export default App;
