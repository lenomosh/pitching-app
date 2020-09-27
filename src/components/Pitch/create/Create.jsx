import React, {useEffect} from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import {useState} from "react";
import {Button,Select} from "antd";
import Axios from "axios";
import apiUrls, {axiosHeader} from "../../environment";
import {message} from "antd/es";
import {PlusOutlined} from '@ant-design/icons'
import Divider from "antd/es/divider";
import Input from "antd/es/input";
import {useSelector} from "react-redux";
const {Option} = Select
const PitchCreate =()=>{
    const currentuser = useSelector(state=>state.user.currentUser)
    const [pitchValue, setPitchValue] = useState('');
    const [categories, setCategories] = useState(null);
    const [pitchCategoryID, setPitchCategoryID] = useState('');
    const [newCategory, setNewCategory] = useState('');
    useEffect(() => {
        if (!categories){
            getCategories()
        }

    }, );
    const getCategories =()=>{
        Axios.get(apiUrls.category.index,{
            headers:{
                Authorization:`Bearer ${currentuser.access_token}`
            }
        })
            .then(res=>setCategories(res.data))
            .catch(err=>{
                message.error(err.response.data.description,10)
                console.log(err.response)
            })
    }

    const submitForm = ()=>{
        if (!pitchCategoryID){
            return message.warn("Select category to which the pitch should belong!",6)
        }
        if (!pitchValue){
            return message.info("You really want to submit a blank pitch? Wow",6)
        }
        console.log(pitchValue.length)
        console.log(pitchValue)
        if (pitchValue.length<9){
            return message.warn("Seriously, your pitch is too short. :XD")
        }
        Axios.post(apiUrls.pitch.create
        ,{
                content:pitchValue,
                user_id:currentuser.user.id,
                category_id:pitchCategoryID
            },
            {
           headers: {
               ...axiosHeader,
               Authorization: `Bearer ${currentuser.access_token}`
           }
            })
            .then(res=>{
                message.success("Pitch created successfully.",10)
                setPitchCategoryID('')
                setPitchValue('')
                console.log(res.data)
        })
            .catch(err=>{
                message.error(err.response.data.description,10)
                console.log(err)
        })
    }

    const createCategory=()=> {
        if (categories.filter(data=>data.name.toLowerCase() ===newCategory.toLowerCase()).length>0){
           return  message.error("The category you are trying to create already exist",10)
        }
        Axios.post(
            apiUrls.category.create,
            {
            name:newCategory.charAt(0).toUpperCase()+newCategory.slice(1).toLowerCase()
        },
            {
                headers: {
                    ...axiosHeader,
                    Authorization: `Bearer ${currentuser.access_token}`
                }
            })
            .then(res=>{
            console.log(res)
                getCategories()
            return message.success("Category created successfully!",10)

        })
            .catch(err=>{
                console.log(err.response)
                return  message.error(err.response.data.description,10)
        })
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p>Category:</p>
                    <Select
                        style={{ width: 240 }}
                        placeholder="Select Category"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input placeholder={"New category"} style={{ flex: 'auto' }} value={newCategory} onChange={({target:{value}})=>setNewCategory(value)} />
                                    {newCategory&& newCategory.length>2 &&
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={createCategory}
                                    >
                                        <PlusOutlined /> Add item
                                    </a>}
                                </div>
                            </div>
                        )}
                        onChange={setPitchCategoryID}
                    >
                        {categories && categories.map(item => (
                            <Option key={item.id} value={item.id}>{item.name}</Option>
                        ))}
                    </Select>
                    <p className={'pt-4'}>Pitch:</p>
                    <ReactQuill className={'my-4'}  style={{backgroundColor:'white',height:"100px"}} theme={'snow'} value={pitchValue} onChange={setPitchValue}/>

                </div>
                <div className="card-footer">

                    <Button onClick={submitForm} className={'float-right'}>Submit</Button>

                </div>
            </div>

        </div>
    )
}
export default  PitchCreate
