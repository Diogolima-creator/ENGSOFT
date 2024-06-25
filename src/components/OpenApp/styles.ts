import styled from "styled-components";

export const OpenApp = styled.div`
  width:100%;
  height:100%;
  border-radius:10px;
`;

export const Img = styled.div`
  width:100%;
  height:100%;
  background:url(../../images/wallpaper.jpeg);
  background-size: contain;
  border-radius:10px;
`;

export const Icon = styled.div`
  padding-top:50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:65px;
  padding-left:20px;
  cursor:pointer;
`;

export const IconImg = styled.img`
  height:72px;
  width:72px;
  margin:0;
`;

export const IconName = styled.p`
  margin:0;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  letter-spacing:0.4px;
  font-size:12px;
  color:white;
`;
