import styled from "styled-components";

export const Choice = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  gap:60px;
  align-items:center;
  justify-content:center;
  animation: slide-in-fwd-right 0.5s ease-in-out both;
  
  .selected{
    background-color:#F08F58;
  }
`;

export const Blocks = styled.div`
  display:flex;
  justify-content:space-between;
  width:60%;
`;

export const Block = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  border:2px solid #804000;
  padding:12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor:pointer;
  transition: .5s;
`;

export const Title = styled.h1`
  text-align:center; 
  margin:0; 
  width:80%;
  font-weight:500;
  font-size:24px;
`;

export const Paragraph = styled.p`
  margin:0;
  font-size:22px;
  color:#804000;
`;

export const Buttons = styled.div`
  display:flex;
  flex-direction:column;
  gap:8px;
  align-items:center;
`;

export const Button = styled.button`
  padding:10px 15px;
  background-color:#4181FF;
  font-family: "Inter", sans-serif;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color:white;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:170px;
  transition: 0.6s;

  &:disabled {
    background-color: rgba(127,127,127, .6);
    cursor: not-allowed;
  }

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;

export const ButtonBack = styled.button`
  padding:10px 15px;
  background-color:red;
  font-family: "Inter", sans-serif;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color:white;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:90px;
  transition: 1.2s;

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;

export const Inputs = styled.div`

`;

export const Input = styled.input`
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width:250px;
  background-color:rgba(127,127,127, .15);
  outline:none;
  border:none;
  font-family: "Inter", sans-serif;
  color: rgba(127,127,127);
  padding:18px 12px;
`;