import React from 'react'
import UserLogin from "../user/login";
import {Switch,Route,Redirect} from "react-router-dom";
import UserCreate from "../user/create";
import HeaderTemplate from "../template/front/header/header";
import LandingPage from "../../Pages/LandingPage/LandingPage.component";
import './PublicHomepage.styles.scss'

const PublicHomepage = ({currentUser})=>{

    return (
        <div className={"LoginPage"}>
            <HeaderTemplate/>
            <Switch>
                <Route exact path={'/'}>
                    <LandingPage/>
                </Route>
            <div className="form-wrapper">
                <div className="row justify-content-center align-self-center">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                    <Route exact path={'/login'}>
                                        {currentUser?<Redirect to={'/'}/>:<UserLogin/>}
                                    </Route>
                                    <Route exact path={'/register'}>
                                        {currentUser?<Redirect to={'/'}/>:<UserCreate/>}
                                    </Route>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            </Switch>

        </div>
    )
}
export default PublicHomepage
