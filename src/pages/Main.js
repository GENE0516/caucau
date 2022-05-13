import React from 'react';
import Input from './Input';
import styled from "styled-components";

let Container = styled.div`
  background: #89B2E9;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
let Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

let Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #0c218b;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

let LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #4B54DC;
    text-align: center;
    font-size: 22px;
  }
  span {
    color:#4B54DC;
    font-weight: 300;
    font-size: 18px;
  }
`;

let Containers = styled.div`
  width:582px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  height: 100%;
  left: 429px;

 display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-evenly;
  top:0px;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

function Main() {
  return (
    <Container>
  
     <Containers>
      <LogoWrapper>
        <h3>
          One <span>CAU</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button >Sign up</button>
      </Form>
      <div>
        <Terms>
        ⓒ 2018 Chung-Ang Univ. <br /> 유의사항 사용자ID/비밀번호를 모를 경우 사용자ID 찾기/비밀번호 찾기를 이용하면 됩니다.
        <br />관련문의 02)820-5114
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
     
    

    </Containers>
  
  
  </Container>
  );
};


export default Main;