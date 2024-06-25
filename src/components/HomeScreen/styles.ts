import styled from "styled-components";

export const Home = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:90%;
  width:85%;
  animation: slide-in-fwd-right 0.5s ease-in-out both;
  overflow:hidden;
  justify-content:space-between;
`;

export const Support = styled.div`
  height:90px;
  display:flex;
  width:100%;
  align-items:start;
  justify-content:end;
`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
`;

export const HeaderText = styled.h1`
  margin:0;
  font-size:42px;
  font-weight:500;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  letter-spacing:1.5px;
`;

export const Texts = styled.div`
  display:flex;
  justify-content:center;
  text-align:justify;
  width:90%;
  align-items:end;
  height:100%;
  flex-direction:column;
  gap:8px;
`;

export const Title = styled.h1`
  margin:0;
  font-weight:400;
  font-size:24px;
`;

export const Paragraph = styled.p`
  font-size:16px;
  margin:0;
  color: #4181FF;
  font-weight:500;
  cursor:pointer;
  transition: 1s;

  &:hover{
    opacity: .5;
    text-decoration:underline;
  }
`;

export const Logo = styled.img`
  height:95px;
  border-radius:45px;
`;

export const Button = styled.button`
  padding:10px 15px;
  background-color:#4181FF;
  font-family: "Inter", sans-serif;
  border-radius:5px;
  color:white;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:170px;
  transition: 1.2s;

  &:hover{
    opacity: .8;
    text-decoration:underline;
  }

`;

export const Footer = styled.div`
  display:flex;
  align-items:end;
  height:5%;
`;

export const FooterText = styled.p`
  margin:0;
  font-weight:500;
  letter-spacing:1.5px;
`;

export const Box = styled.div`
  overflow: hidden;
  animation: scale-in-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  display:flex;
  align-items:center;
  flex-direction:column;
`;

export const LogoLoading = styled.img`
  height:185px;
  border-radius:45px;
  clip-path: circle(0%);
  animation: reveal 1.5s linear forwards;

`;

export const LoadingText = styled.p`
  margin:0;
  font-size:42px;
  font-weight:700;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);

`;

export const Login = styled.div`
  display:flex;
  justify-content:center;
  text-align:justify;
  width:75%;
  align-items:start;
  height:75%;
  gap:5px;
  flex-direction:column;
  animation: slide-in-fwd-top 0.5s ease-in-out both;
`;

export const Register = styled.div`
  display:flex;
  justify-content:center;
  text-align:justify;
  width:75%;
  align-items:start;
  height:75%;
  flex-direction:column;
  animation: slide-in-fwd-top 0.5s ease-in-out both;
`;

export const Label = styled.label`
  color: rgba(127,127,127);
  font-weight:bold;
  margin-top:12px;
  font-size:15px;
`;

export const Input = styled.input`
  border-radius:5px;
  width:250px;
  background-color:rgba(127,127,127, .15);
  outline:none;
  border:none;
  font-family: "Inter", sans-serif;
  color: rgba(127,127,127);
  padding:18px 12px;
`;

export const ButtonLogin = styled.button`
  padding:12px 15px;
  background-color:#4181FF;
  font-family: "Inter", sans-serif;
  border-radius:5px;
  color:white;
  font-weight:bold;
  border:none;
  outline:none;
  cursor:pointer;
  width:265px;
  transition: 1.2s;
  margin-top:10px;
  
  &:hover{
    opacity: .8;
  }

`;

export const ChangeInput = styled.p`
  text-align:center;
  width:100%;
  margin-top:55px;
  width:100%;
  cursor:pointer;
  font-size:15px;
  text-decoration: underline;
  transition: 0.6s;

  &:hover{
    opacity: .6;
  }
`;