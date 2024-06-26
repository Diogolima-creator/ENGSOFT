import * as B from './styles'
import * as T from '../../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { LoadingLogo } from '../LoadingLogo/LoadingLogo';
import { ConfirmedVerifyRent } from '../ConfirmedVerifyRent/ConfirmedVerifyRent';
import { RecusedVerifyRent } from '../RecusedVerifyRent/RecusedVerifyRent';

export const BikeRent = (props:T.BikeProps) => {
  const [loading, setLoading] = useState(false)
  const [afterVerify, setAfterVerify] = useState(false)
  
  const handleRent = () => {
    setLoading(true)
    setAfterVerify(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    !loading ?
    <B.Bike>
      {!afterVerify ? <>
      <B.Header><KeyboardBackspaceIcon onClick={() => props.setPage!(6)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <B.Text>ALUGUEL</B.Text></B.Header>
      <B.Content>
        <B.Img src={props.bike.img} />
        <B.Texts>
          <B.Name>{props.bike.name}</B.Name>
          <B.Autonomy>0.1 Watt por quilometro</B.Autonomy>
          <B.Autonomy>Autonomia {props.bike.autonomy.toFixed(2)} KM</B.Autonomy>
          <B.Autonomy>Energia {props.bike.energy}%</B.Autonomy>
          <B.Place>encontrada na doca {props.bike.doca} do posto eletrico</B.Place>
        </B.Texts>
        <B.Hr/>
        <B.BlockList>
          <B.Block>
              <B.Autonomy>Data da retirada</B.Autonomy>
              <B.Date>26 de Junho, 2024</B.Date>
              <B.Date>9:00</B.Date>
          </B.Block>
          <B.Block>
              <B.Autonomy>Data da entrega</B.Autonomy>
              <B.Date>1 de Julho, 2024</B.Date>
              <B.Date>17:00</B.Date>
          </B.Block>
        </B.BlockList>
        <B.Hr/>
        <B.Button onClick={() => handleRent()}>
          Alugar Agora
        </B.Button>
      </B.Content>
      </> : props.bike.autonomy*10 < 80 ? <RecusedVerifyRent setPage={props.setPage!} /> : <ConfirmedVerifyRent setPage={props.setPage!}/> }
    </B.Bike> :
    <LoadingLogo />
  )
}
