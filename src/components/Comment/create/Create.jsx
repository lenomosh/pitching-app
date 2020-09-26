import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {message} from "antd/es";
import Axios from "axios";
import apiUrls from "../../environment";

const { TextArea } = Input;



const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={3} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

class PitchCommentCreate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            submitting: false,
            value: '',
        };

    }

    handleSubmit = () => {
        if (!this.state.value) {
            return message.warn("You can not submit a blank comment",5)
        }
        Axios.post(apiUrls.comment.create,{
            content:this.state.value,
            pitch_id:this.props.pitchID,
            user_id:1
        }).then(
            res=> {
                message.success("Comment posted successfully!",10)
                this.props.onFinishedCreating(res.data)
                console.log(res.data)
            }
        ).catch(err=>{
            message.error(err.response.data.description,10)
            console.log(err.response)
        })

        this.setState({
            submitting: true,
        });

        this.setState({
                submitting: false,
                value: '',
            });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {submitting, value } = this.state;

        return (
            <>
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </>
        );
    }
}

export default PitchCommentCreate
