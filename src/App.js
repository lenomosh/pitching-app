import React from 'react';
import './App.scss';
import { Layout, Menu } from 'antd';
import {Route,Switch} from "react-router-dom";
import PitchCreate from "./components/Pitch/create/Create";
import PitchIndex from "./components/Pitch/Index";
import UserCreate from "./components/user/create";
import HeaderTemplate from "./components/template/front/header/header";
const { Header, Content, Footer } = Layout;

function App() {
  return (
      <div>
          <Layout className="layout">
              <Header>
                  <HeaderTemplate/>
              </Header>
              <Content style={{ padding: '50px' }}>
                  <div className="row m-auto">
                      <div className="col-sm-6">
                          <Switch>
                              <Route exact path={'/'} component={PitchIndex}/>
                              <Route exact path={'/create'} component={PitchCreate}/>
                              <Route exact path={'/register'} component={UserCreate}/>
                          </Switch>
                      </div>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
      </div>

  );
}

export default App;
