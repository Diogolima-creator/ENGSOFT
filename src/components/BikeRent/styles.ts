import styled from "styled-components";

export const Bike = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  height:100%;
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
  height:80%;
  width:100%;
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
  height:18%;
  gap:8px;
  width:274px;
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
  color:grey;
  font-size:15px;
`;

export const Place = styled.p`
  margin:0;
  font-size:14px;
  color: #4181FF;
`;


export const Hr = styled.div`
  height:0px;
  border:2px dotted grey;
  border-bottom:0;
  width:100%;
`;

export const BlockList = styled.div`
  height:10%;
  display:flex;
  justify-content:space-between;
  width:100%;
`;

export const Block = styled.div`
  display:flex;
  flex-direction:column;
  text-align:justify;
  gap:5px;
  font-weight:500;
`;

export const Date = styled.p`
  margin:0;
  font-weight:600;
  font-size:14px;
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