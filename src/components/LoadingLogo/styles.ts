import styled from "styled-components";

export const Box = styled.div`
  overflow: hidden;
  animation: scale-in-center-loading 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoLoading = styled.img`
  height: 185px;
  border-radius: 45px;
  clip-path: circle(0%);
  animation: reveal-loading 2.5s linear forwards infinite;
`;

export const LoadingText = styled.p`
  margin: 0;
  font-size: 42px;
  font-weight: 700;
  animation: tracking-in-expand-loading 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both infinite;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
`;
