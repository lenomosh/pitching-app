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

const PitchIndex = ()=>{
    const [pitches, setPitches] = useState(null);
    useEffect(() => {
        if (!pitches){
            const url = 'http://localhost:5000/api/pitch'
            Axios.get(url)
                .then(res=>setPitches(res.data))
                .catch(err=>console.log(err))
        }
    }, );

    return (
        <div className={'pitchIndex'}>
            {pitches && pitches.map(pitch=>
                <div className="pitch-item py-2">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-sm-3">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                </div>
                                <div className="col-sm-6">
                                    <div className="row flex-column">
                                        <div className="pitch-author-name">
                                            John Doe

                                        </div>
                                        <div className="pitch-created-at">
                                            45 mins ago

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3 float-right">
                                <MoreOutlined/>
                            </div>
                        </div>
                        <div className="card-body">
                            {HTMLReactParser( pitch.content)}
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4">
                                    <LikeOutlined/><span className={'like-count'}>5</span>
                                </div>
                                <div className="col-sm-4">
                                    <CommentOutlined/><span className={'comment-count'}>20</span>
                                </div>
                                <div className="col-sm-4 float-right">
                                    <SendOutlined/>
                                </div>
                            </div>
                        </div>
                        <div className="comments">
                            <PitchCommentIndex  />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default  PitchIndex
