import * as H from './styles'
import * as T from '../../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';



export const HistoryItem = (props:T.HistoryProps) => {

  const [modal, setModal] = useState(false)

  return (
    <H.History>
        <H.Header><KeyboardBackspaceIcon onClick={() => props.setSeeItem(false)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <H.Text>HISTORICO DE ALUGUEIS</H.Text></H.Header>
        <H.Content>
          <H.Texts>
            <H.Name>{props.historyItem.bike}</H.Name>
            <H.Autonomy>Km pilotados {props.historyItem.km.toFixed(2)}</H.Autonomy>
            <H.Autonomy>Energia na entrega {props.historyItem.energy}%</H.Autonomy>
            <H.Place>Pego na doca {props.historyItem.doca} do posto eletrico</H.Place>
            <H.Autonomy>Data da retirada</H.Autonomy>
            <H.Date>{props.historyItem.checkIn}</H.Date>
            <H.Autonomy>Data da entrega</H.Autonomy>
            <H.Date>{props.historyItem.checkOut}</H.Date>
            <H.Autonomy>Pontos recebido pelo tecnico: {props.historyItem.points ? props.historyItem.points : 'Esta em avaliação'}</H.Autonomy>
            <H.Look onClick={() => setModal(true)}>Abrir trajeto realizado</H.Look>
          </H.Texts>
          <H.Img src={props.historyItem.img} />
        </H.Content>
        {modal && <Modal setModal={setModal}/>}
    </H.History>
  )
}
