import styled from "styled-components";

export const Verify = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
  flex-direction:column;
`;


export const Paragraph = styled.p`
  font-size:20px;
  text-align:center;
  font-weight:500;
  width:90%;
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

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;