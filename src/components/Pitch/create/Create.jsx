import React from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import {useState} from "react";
const PitchCreate =()=>{
    const [value, setValue] = useState('');
    console.log(value)

    return (
        <div>
            <ReactQuill style={{backgroundColor:'white'}} theme={'snow'} value={value} onChange={setValue}/>
        </div>
    )
}
export default  PitchCreate
