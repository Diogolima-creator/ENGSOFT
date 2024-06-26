import styled from "styled-components";

export const History = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  animation: scale-in-center 0.25s linear both;
`;


export const Header = styled.div`
  display:flex;
  margin-top:20px;
  width:70%;
  height:10%;
  justify-content:space-between;
  align-items:center;
`;

export const Text = styled.p`
  font-weight:500;
  font-size:18px;
  margin:0;
`;

export const Content = styled.div`
  height:100%;
  width:80%;
  display:flex;
  gap:25px;
  flex-direction:column;
  align-items:center;
  
`;

export const Img = styled.img`
  width:274px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height:244px;
`;

export const Texts = styled.div`
  display:flex;
  flex-direction:column;
  height:45%;
  gap:10px;
  width:90%;
  text-align:justify;
  margin-top:10px;
  justify-content:center;
`;

export const Name = styled.p`
  margin:0;
  font-weight:600;
  font-size:20px;
  letter-spacing:1px;
`;

export const Autonomy = styled.p`
  margin:0;
  color:#454545;
  font-size:15px;
`;

export const Place = styled.p`
  margin:0;
  font-size:14px;
  color: #4181FF;
`;


export const Date = styled.p`
  margin:0;
  font-weight:600;
  font-size:14px;
`;


export const Look = styled.p`
  margin:0;
  font-weight:600;
  font-size:18px;
  cursor:pointer;
  color: #4181FF;
  text-decoration:underline;
  margin-top:5px;

  &:hover{
    opacity: .7;
  }
`;