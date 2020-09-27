import React from 'react';
import './App.scss';
import {Redirect,Route,Switch} from "react-router-dom";
import UserCreate from "./components/user/create";
import {connect} from "react-redux";
import AuthHomepage from "./components/hompage/AuthHomePage";
import PublicHomepage from "./components/hompage/PublicHomepage";
import LoginPage from "./Pages/LoginPage/LoginPage.component";

function App({currentUser}) {

  return (
      <div>
          <Switch>
              <Route  path={'/'}>
                  {currentUser?AuthHomepage:PublicHomepage}
              </Route>
              {/*<Route exact path={'/register'} component={UserCreate}/>*/}
              {/*<Route exact path={'/login'} >*/}
              {/*    {currentUser?<Redirect to={'/'}/> : <LoginPage/>}*/}
              {/*</Route>*/}
          </Switch>
      </div>

  );
}
const mapStateToProps = ({user:{currentUser}})=>({currentUser})
export default connect(mapStateToProps)(App);
