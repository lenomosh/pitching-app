import React from 'react'
import {Avatar} from "antd";
import {
    UserOutlined,
    MoreOutlined,
    SendOutlined,
    LikeOutlined,
    DislikeOutlined, CommentOutlined
} from '@ant-design/icons'
const PitchIndex = ()=>{

    return (
        <div className={'pitchIndex'}>

            <div className="pitch-item">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae commodi corporis debitis, deserunt
                        dignissimos dolor excepturi, hic ipsam iure minus natus nobis officiis, placeat quia quidem quo reiciendis tempora!

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
                </div>


            </div>
        </div>
    )
}
export default  PitchIndex
