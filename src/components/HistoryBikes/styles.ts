import styled from "styled-components";

export const History = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  animation: slide-in-fwd-left 0.5s ease-in-out both;
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

export const Title = styled.h1`
  font-size:16px;
`;

export const HistoryList = styled.div`
  height:70%;
  width:95%;
  gap:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const HistoryItem = styled.div`
  border:1px solid black;
  width:90%;
  padding:7px 10px;
  cursor:pointer;
  transition: .5s;

  &:hover{
    background-color:rgba(0,0,0, .6);
    color:white;
  }
`;

export const Name = styled.p`
  margin:0;
  font-size:15px;
  font-weight:600;
`;

export const Paragraph = styled.p`
  margin:0;
  font-size:14px;
`;