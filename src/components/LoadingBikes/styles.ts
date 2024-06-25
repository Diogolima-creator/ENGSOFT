import styled from "styled-components";

export const Loading = styled.div`
  height:100%;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:50px;
  flex-direction:column;
`;

export const Text = styled.h1`
  margin:0;
  font-size:24px;
  animation: tracking-in-expand 0.85s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;