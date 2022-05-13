import React from 'react';
import Dropzone from 'react-dropzone'
import { PlusOutlined } from '@ant-design/icons';

function Fileupload() {

    
  return (
    <div style={{display :'flex',justifyContent: 'space-between'}}>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    
      <div 
             style={{
          width: 300, height: 240, border :'1px solid lightgray',
          display: 'flex', alignItems: 'center', justifyCotent: 'center'
      }} 
       {...getRootProps()}>
        <input {...getInputProps()} />
       <PlusOutlined style={{color: "#0c218b",fontSize:"100px", fontWeight:"500"}}/>
      </div>
    
  )}
</Dropzone>
    </div>
  );
};

export default Fileupload;