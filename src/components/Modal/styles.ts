import styled from "styled-components";

export const Back = styled.div`
  width:373px;
  height:800px;
  background-color:rgba(0,0,0, .8);
  z-index:99;
  position:absolute;
`;

export const Modal = styled.div`
  width:373px;
  height:800px;
  z-index:99;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  animation: scale-in-center 0.25s linear both;
`;  

export const Image = styled.img`
  height:50%;
  object-fit:cover;
  width:95%;
`;

export const Download = styled.p`
  margin:0;
  color:white;
  font-size:20px;
  font-weight:600;
  text-decoration:underline;
  cursor:pointer;
  transition: 0.5s;

  &:hover{
    opacity:.7;
  }
`;

export const Close = styled.p`
  margin:0;
  color:white;
  font-size:20px;
  font-weight:600;
  text-decoration:underline;
  cursor:pointer;
  transition: 0.5s;

  &:hover{
    opacity:.7;
  }
`;