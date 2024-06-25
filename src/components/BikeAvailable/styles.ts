import styled from "styled-components";

export const Bike = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
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

export const BikeList = styled.div`
  display:flex;
  flex-direction:column;
  height:80%;
  width:80%;
  gap:10px;
  overflow-y:scroll;
  align-items:center;
  padding:5px;
`;