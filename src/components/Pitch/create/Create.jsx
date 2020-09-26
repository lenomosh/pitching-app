import React from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import {useState} from "react";
import {Button} from "antd";
import Axios from "axios";
const PitchCreate =()=>{
    const [value, setValue] = useState('');
    console.log(value)
    const url = 'http://127.0.0.1:5000/api/pitch'
    const submitForm = ()=>{
        const form = new FormData()
        form.append('content',value)
        form.append('user_id',1)
        form.append('category_id',1)

        Axios.post(url
        ,form).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>

            <ReactQuill style={{backgroundColor:'white'}} theme={'snow'} value={value} onChange={setValue}/>
            <Button onClick={submitForm} className={'float-right'}>Submit</Button>
        </div>
    )
}
export default  PitchCreate
