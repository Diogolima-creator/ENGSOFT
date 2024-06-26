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

export const Text = styled.p`
  font-weight:500;
  font-size:18px;
  margin:0;
`;

export const HeaderBackGround = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-itens:center;
  height:25%;
  background-color:#4181FF;
  border-radius:5px 5px 0 0 ;
`;

export const ProfilePic = styled.img`
  height:75px;
  border-radius:45px;
  width:75px;
  position:relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top:95px;
`;

export const HeaderItems = styled.div`
  width:25%;
  height:100%;
  display:flex;
  padding-left:10%;
  padding-top:5%;
  flex-direction:column;
  justify-content:space-between;
`;

export const Content = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  width:80%;
  padding-top:50px;
`;

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:1px;
`;

export const Name = styled.p`
  margin:0;
  letter-spacing:1px;
  font-weight:600;
`;

export const Paragraph = styled.p`
  margin:0;
  letter-spacing:1px;
  color:#454545;
`;

export const Menu = styled.div`
  margin-top:20px;

  .icon{
    height:26px;
    width:26px;
  }
`;

export const MenuItem = styled.div`
  display:flex;
  height:45px;
  gap:20px;
  transition: 0.5s;
  font-weight:500;
  color:black;
  align-items:center;
  padding:0 5px;

  &:hover{
    cursor:pointer;
    background-color:rgba(0,0,0, .1);
    opacity: .7;
  }
`;
