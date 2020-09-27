import React, {useEffect, useState} from 'react'
import HeaderTemplate from "../template/front/header/header";
import {Route, Switch} from "react-router-dom";
import PitchIndex from "../Pitch/Index";
import PitchCreate from "../Pitch/create/Create";
import {Layout} from "antd";
import UserProfile from "../ProfilePage/UserProfile.component";
import Axios from "axios";
import apiUrls from "../environment";
import GetCategoryPitches from "../helpers/GetPitchCategories/GetPitchCategories.component";
import PitchesFromCategory from "../Comment/Category/PitchesFromCategory.component";
const { Content, Footer } = Layout;

const AuthHomepage = ()=>{

    return (
        <Layout className="layout">
                <HeaderTemplate/>
                <div className="container">
                    <Route exact path={'/profile/:user_id'} component={UserProfile}/>
                </div>
            <Content style={{ padding: '50px' }}>
                <div className="row m-auto">
                    <div className="col-sm-3">
                        <Route exact path={'/'}>
                            <p className="h4">Categories</p>
                            <GetCategoryPitches/>

                        </Route>
                        <Route path={'/category/'}>
                            <p className="h4">Categories</p>
                            <GetCategoryPitches/>

                        </Route>
                    </div>
                    <div className="col-sm-6">
                        <Switch>
                            <Route exact path={'/'}>
                                <PitchIndex/>
                            </Route>
                            <Route exact path={'/create'} component={PitchCreate}/>
                            <Route exact path={'/categories/:category_id'} component={PitchesFromCategory}/>
                        </Switch>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
    )
}
export default AuthHomepage
