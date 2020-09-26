import React,{useState,useEffect} from 'react'
import {Avatar} from "antd";
import {
    UserOutlined,
    MoreOutlined,
    SendOutlined,
    LikeOutlined,
    CommentOutlined
} from '@ant-design/icons'
import PitchCommentIndex from "../Comment";
import Axios from "axios";
import HTMLReactParser from "html-react-parser";
import PitchRead from "./read/read";
import apiUrls from "../environment";
export const PitchAction = ({data,onFinishedSubmit, onErrorOccurred})=>{
    Axios.post(apiUrls.action.create,data)
        .then(res =>onFinishedSubmit(res.data))
        .catch(err=>onErrorOccurred(err))
}
const PitchIndex = ()=>{
    const [pitches, setPitches] = useState(null);
    useEffect(() => {
        if (!pitches){
            Axios
                .get(apiUrls.pitch.index)
                .then(res=>setPitches(res.data))
                .catch(err=>console.log(err))
        }
    }, );

    return (
        <div className={'pitchIndex'}>
            {pitches && pitches.map(pitch=><PitchRead key={pitch.id} pitch ={pitch}/>
            )}
        </div>
    )
}
export default  PitchIndex
