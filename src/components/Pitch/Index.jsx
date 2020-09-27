import React,{useState,useEffect} from 'react'
import Axios from "axios";
import PitchRead from "./read/read";
import apiUrls from "../environment";
export const PitchAction = ({data,onFinishedSubmit, onErrorOccurred,access_token})=>{
    Axios.post(apiUrls.action.create,data,{
        headers:{
            Authorization:`Bearer ${access_token}`
        }
    })
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
