import React from 'react';
import './App.scss';
import { Layout, Menu } from 'antd';
import {Route,Switch} from "react-router-dom";
import PitchCreate from "./components/Pitch/create/Create";
import PitchIndex from "./components/Pitch/Index";
// import Switch from "react-dom";
const { Header, Content, Footer } = Layout;

function App() {
  return (
      <div>
          <Layout className="layout">
              <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                      <Menu.Item key="1">nav 1</Menu.Item>
                      <Menu.Item key="2">nav 2</Menu.Item>
                      <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
              </Header>
              <Content style={{ padding: '50px' }}>
                  <div className="row">
                      <div className="col-sm-3">
                          SideBar here

                      </div>
                      <div className="col-sm-6">
                          <Switch>
                              <Route path={'/create'} component={PitchCreate}/>
                              <Route path={'/'} component={PitchIndex}/>

                          </Switch>
                      </div>
                      <div className="col-sm-3">
                        Another Sidebar
                      </div>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
      </div>

  );
}

export default App;
