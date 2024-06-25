import styled from "styled-components";

export const Item = styled.div`
  display:flex;
  gap:20px;
  width: 98%;
  height:95px;
  cursor:pointer;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  transition: .2s;

  &:hover{
    background-color:white;
    transform: scale(1.01);
  }
`;

export const Img = styled.img`
  height:95px;
  width:95px;
`;

export const Texts = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  gap:5px;
  justify-content:center;
`; 

export const Name = styled.p`
  margin:0;
  font-weight:600;
`;

export const Energy = styled.p`
  margin:0;
  color: #4181FF;
  font-size:14px;
  font-weight:600;
`;

export const Autonomy = styled.p`
  margin:0;
  font-size:15px;
`;
