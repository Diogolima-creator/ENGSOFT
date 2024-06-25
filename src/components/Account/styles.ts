import styled from "styled-components";

export const Account = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:5px;
  animation: slide-in-fwd-left 0.5s ease-in-out both;
`;

export const Header = styled.div`
  display:flex;
  margin-top:20px;
  width:70%;
  height:10%;
  align-items:center;
  gap:20px;
`;

export const Content = styled.div`
  height:80%;
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:5px;
`;

export const ProfilePic = styled.img`
  border-radius:90px;
  height:156px;
  width:156px;
`;

export const Label = styled.label`
  color: rgba(127,127,127);
  font-weight:bold;
  margin-top:12px;
  font-size:15px;
  text-align:start;
  width:70%;
`;

export const Input = styled.input`
  border-radius:5px;
  width:250px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color:rgba(127,127,127, .15);
  outline:none;
  font-size:18px;
  border:none;
  font-family: "Inter", sans-serif;
  color: rgba(127,127,127);
  padding:10px;
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
  margin-top:15px;

  &:disabled {
    background-color: rgba(127,127,127, .6);
    cursor: not-allowed;
  }

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;

export const Text = styled.p`
  font-weight:500;
  font-size:18px;
  margin:0;
`;
