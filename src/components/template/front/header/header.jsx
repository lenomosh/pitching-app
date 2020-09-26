import React from 'react'
import {Menu} from "antd";
import {Button} from "antd/es";
import apiUrls from "../../../environment";
import Axios from "axios";

const HeaderTemplate = () =>{

    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3"><Button onClick={()=>Axios.get(apiUrls.user_logout)
                    .then(res=>console.log(res)).catch(err=>console.log(err))
                }>Logout</Button></Menu.Item>
            </Menu>
        </div>
    )
}
export default HeaderTemplate
