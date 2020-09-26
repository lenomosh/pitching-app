import React, {useState} from 'react'
import PitchCommentView from "./read/Read";
import PitchCommentCreate from "./create/Create";

const PitchCommentIndex = ()=>{
    const [commentValue, setCommentValue] = useState('');
    return (
        <div className={'px-4'}>
            <PitchCommentView/>
            <PitchCommentCreate/>
        </div>
    )
}
export default PitchCommentIndex
