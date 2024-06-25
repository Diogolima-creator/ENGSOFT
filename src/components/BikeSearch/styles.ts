import styled from "styled-components";

export const Bike = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  animation: slide-in-fwd-top 0.5s ease-in-out both;
`;

export const Content = styled.div`
  width:85%;
  height:95%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;

export const Header = styled.div`
  display:flex;
  margin-top:20px;
  width:80%;
  height:10%;
  justify-content:space-between;
  align-items:center;
`;

export const Text = styled.p`
  font-weight:500;
  font-size:18px;
  margin:0;
`;

export const Date = styled.div`
  display:flex;
  flex-direction:column;
  width:80%;
  height:60%;
  gap:25px;
`;

export const TextDate = styled.div`
  font-size:16px;
  letter-spacing:1.5px;
`;

export const Inputs = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const Button = styled.button`
  padding:15px 15px;
  background-color:#4181FF;
  font-family: "Inter", sans-serif;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color:white;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:85%;
  height:55px;
  font-size:16px;
  transition: 0.6s;
  font-weight:200;

  &:disabled {
    background-color: rgba(127,127,127, .6);
    cursor: not-allowed;
  }

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;

export const InputBlock = styled.div`
  display:flex;
  background-color:transparent; 
  border:1px solid rgba(127,127,127, .3);
  padding:10px 12px;
  justify-content:space-between;
  width:85%;

  input{
    color:black;
  }

  .date-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export const InputDate = styled.input`
  border-radius:5px;
  outline:none;
  border:none;
  font-family: "Inter", sans-serif;
  color: rgba(127,127,127);
  font-size:15px;
  width:65%;
  background-color:transparent; 
`;

export const InputNumber = styled.input`
  border-radius:5px;
  font-size:15px;
  background-color:transparent; 
  outline:none;
  border:none;
  font-family: "Inter", sans-serif;
  color: rgba(127,127,127);
  width:25%;
`;

export const InputNumbers = styled.div`
  position: relative;
  display: inline-block;
  width:40%;
`;

export const Label = styled.label`
  color: rgba(127,127,127);
  font-weight:400;
  margin-top:12px;
  font-size:15px;
`;