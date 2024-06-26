import styled from "styled-components";

export const ChatBox = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  height:100%;
  align-items:center;
  animation: slide-in-fwd-top 0.5s linear both;
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

export const ProfileTechnical = styled.div`
  height:14%;
  width:90%;
  display:flex;
  padding-left:38px;
  justify-content:center;
  flex-direction:column;
  border-bottom:1px solid rgba(0,0,0, .05);
  gap:10px;
`;

export const Profile = styled.div`
  display:flex;
  gap:20px;
  align-items:center;
`;

export const ProfilePic = styled.img`
  height:80px;
  border-radius:45px;
  width:75px;
`;

export const Texts = styled.div`
  
`;

export const Name = styled.p`
  margin:0; 
  font-weight:500;

`;

export const Role = styled.p`
  margin:0; 

  
`;

export const Chat = styled.div`
  height:60%;
  width:90%;
  margin:5px 0;
  overflow-y:Scroll;
`;

interface ChatInterface {
  at: number  
}

export const ChatMessageTech = styled.p<ChatInterface>`
  background-color:white;
  border-radius:5px 5px 5px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size:15px;
  padding:5px;
  width:80%;
  animation: text-left ${props => 1*props.at}s linear both;
`;

export const ChatMessagePeople = styled.p`
  background-color:#4181FF;
  border-radius:5px 5px 0px 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size:15px;
  padding:5px;
  color:white;
  width:65%;
`;

export const End = styled.div<ChatInterface>`
  width:100%;
  display:flex;
  justify-content:end;
  animation: text-right ${props => 1.25*props.at}s linear both;
`;

export const SendArea = styled.div`
  background-color:rgba(0,0,0, .1);
  width:90%;
  height:10%;
  display:flex;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const Send = styled.textarea`
  height:10%;
  resize:none;
  border:none;
  outline:none;
  background:transparent;
  width:90%;
  height:100%;
  padding:3px 0px 0px 8px;
  font-size:16px;
  
  animation: test 17.5s linear both;
`;

export const Button = styled.div`
  width:10%;
  justify-content:center;
  border-left:1px solid rgba(0,0,0, .1);
  display:flex;
  align-items:center;
  color:#4181FF;
  height:100%;
`;