import React,{ useState } from "react";
import {Typography,Button,Form, Input, Descriptions } from 'antd';
import Fileupload from "../use/Fileupload";
const {TextArea}=Input;

function Upload(){

    const [Title, setTitle]=useState("");
    const [Descriptions , setDescription]=useState("");
    const [Price, setPrice]=useState(0);
    const [Images, setImages]=useState([]);


    


    const titleChangeHandler=(event)=>{
        setTitle(event.currentTarget.value)
    };

    const descriptionChangeHandler=(evnet)=>{
        setDescription(evnet.currentTarget.value)

    };

    const prcieChangeHandler=(event)=>{
        setPrice(event.currentTarget.value)

    };
    

    

    return(
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h2> 글업로드하기</h2>

            </div>
            <Form>

                <Fileupload   />

                
                <br />
                <br />
                <label> 내이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label> 내용을 적어주세요</label>
                <TextArea onChange={descriptionChangeHandler} value={Descriptions}/>
                <br />
                <br />
                <label> 설명</label>
                <Input  type="number" onChange={prcieChangeHandler} value= {Price}/>
                <br />
                <br />
                <select>
                    <option></option>
                </select>
                <br/>
                <br/>
                <Button>
                    등록
                </Button>

            </Form>
           
        </div>


    )
};

export default Upload;