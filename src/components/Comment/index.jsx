import React, {useState} from 'react'
import ReactQuill from "react-quill";

const CommentIndex = ()=>{
    const [commentValue, setCommentValue] = useState('');


    return (
        <div>
            <ReactQuill theme={'snow'} onChange={setCommentValue} value={commentValue} />
        </div>
    )
}
export default CommentIndex
