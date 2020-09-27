import React from 'react'
import {Menu} from "antd";
import {Button} from "antd/es";
import {connect} from "react-redux";
import {logoutCurrentUser} from "../../../../redux/user/user.actions";

const HeaderTemplate = ({logoutUser}) =>{

    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3"><Button onClick={logoutUser}>Logout</Button></Menu.Item>
            </Menu>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>(
    {logoutUser:()=>dispatch(logoutCurrentUser())}
)
// const mapStateToProps = ({user: {currentUser}})=>({currentUser})
export default connect(null,mapDispatchToProps) (HeaderTemplate)
