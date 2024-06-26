import styled from "styled-components";

export const Home = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  gap:10px;
  flex-direction:column;
`;

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  width:85%;
  overflow-y:scroll;
`;

export const Header = styled.div`
  display:flex;
  width:85%;
  padding:24px 5px;
  justify-content:space-between;
  position:relative;
`;

export const Texts = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  width:80%;
  margin-bottom:20px;
`;

export const Title = styled.h1`
  margin:0;
  font-size:24px;
  text-align:justify;
  font-weight:600;
  letter-spacing:1px;
`;

export const Paragraph = styled.p`
  margin:0;
  color:#454545;
  letter-spacing:1px;
`;

export const Card = styled.div`
  background: linear-gradient(191deg, rgba(65,129,255,1) 0%, rgba(52,104,204,1) 29%, rgba(65,129,255,1) 71%, rgba(39,78,153,1) 100%);
  width:310px;
  min-height:219px;
  border-radius:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  h1{
    text-align:center;
    font-size:54px;
    color:white;
    margin:0;
  }
`;

export const Users = styled.div`
  display:flex;
  flex-direction:column;
  width:80%;
  gap:10px;
`;

export const HeaderUser = styled.p`
  font-size:18px;
  margin:10px 0;
  width:90%;
`;

export const UserItem = styled.div`
  display:flex;
  gap:15px;
  min-height:90px;
  width:98%;
  border: 2px solid transparent;
  margin-top:15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ProfilePic = styled.img`
  width:90px;
  height:90px;
`;

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  justify-content:center;
  height:100%;
`;

export const Name = styled.p`
  margin:0;
  color:#4181FF;
`;

export const Bike = styled.p`
margin:0;
color:#454545;
`;

export const Km = styled.p`
margin:0;
font-weight:bold;
`;

export const Button = styled.button`
  padding:15px 15px;
  background-color:rgba(255,255,255, 0.85);
  font-family: "Inter", sans-serif;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color:black;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:55%;
  font-size:15px;
  transition: 0.6s;
  font-weight:600;

  &:disabled {
    background-color: rgba(127,127,127, .6);
    cursor: not-allowed;
  }

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;