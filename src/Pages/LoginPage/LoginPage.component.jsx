import React from 'react'
import UserLogin from "../../components/user/login";
import './LoginPage.styles.scss'
import HeaderTemplate from "../../components/template/front/header/header";
const LoginPage =()=>{
    return(
        <div className={"LoginPage"}>
            <HeaderTemplate/>
            <div className="form-wrapper">
                <div className="row justify-content-center align-self-center">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">

                                <UserLogin/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
export default LoginPage
