import styled from "styled-components";

export const History = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  animation: scale-in-left 0.5s linear both;
`;


export const Header = styled.div`
  display:flex;
  margin-top:20px;
  width:80%;
  height:10%;
  align-items:center;
  gap:20px;
`;

export const Text = styled.p`
  font-weight:500;
  font-size:18px;
  margin:0;
`;

export const ChatList = styled.div`
  width:80%;
  height:80%;
`;

export const ChatItem = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  height:100px;
  align-items:center;
  justify-content:center;
  text-align:start;
  gap:5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: .5s;
  cursor:pointer;

  &:hover{
    background-color:rgba(0,0,0, .1);
  }
`;

export const ProfilePic = styled.img`
  height:100px;
  width:100px;
`;

export const TicketId = styled.p`
  margin:0;
  width:100%;
  padding-left:10px;
  color:grey;
  font-size:13px;
`;

export const Name = styled.p`
  margin:0;
  width:100%;
  padding-left:10px;
  font-weight:600;
  font-size:17px;
`;

export const Role = styled.p`
  margin:0;
  width:100%;
  padding-left:10px;
  font-weight:400;
  font-size:16px;
`;

export const Status = styled.p`
  margin:0;
  width:100%;
  font-weight:700;
  padding-left:10px;
  color:#00ff00;
`;
