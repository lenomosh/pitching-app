import React from 'react'
import HeaderTemplate from "../template/front/header/header";
import {Route, Switch} from "react-router-dom";
import PitchIndex from "../Pitch/Index";
import PitchCreate from "../Pitch/create/Create";
import {Layout} from "antd";
const { Header, Content, Footer } = Layout;

const AuthHomepage = ()=>{
    return (
        <Layout className="layout">
            <Header>
                <HeaderTemplate/>
            </Header>
            <Content style={{ padding: '50px' }}>
                <div className="row m-auto">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <Switch>
                            <Route exact path={'/'} component={PitchIndex}/>
                            <Route exact path={'/create'} component={PitchCreate}/>
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
