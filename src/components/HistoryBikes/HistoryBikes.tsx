import * as H from './styles'
import * as T from '../../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { HistoryItem } from '../HistoryItem/HistoryItem';

export const HistoryBikes = (props:T.Screen) => {

  const [seeItem, setSeeItem] = useState(false)
  const [historyItem, setHistoryItem] = useState<T.HistoryItem>({ 
    bike: 'Bicicleta Elétrica',
    km: 14,
    checkIn: '14/03/2024, 09:00',
    checkOut: '17/03/2024, 17:00',
    img:'',
    doca: 6,
    energy: 25
  })

  const history = [
    { 
      bike: 'Bicicleta Elétrica',
      km: 14,
      checkIn: '14/03/2024, 09:00',
      checkOut: '17/03/2024, 17:00',
      img:'../../bike.jpg',
      doca: 6,
      energy: 25
    },
    { 
      bike: 'Bicicleta Elétrica',
      km: 1,
      checkIn: '21/04/2024, 09:00',
      checkOut: '21/04/2024, 14:00',
      points: 2.25,
      img:'../../bike.jpg',
      doca: 7,
      energy: 14
    },
    { 
      bike: 'Bicicleta Elétrica',
      km: 4,
      checkIn: '14/03/2024, 11:00',
      checkOut: '17/03/2024, 15:00',
      points: 5.00,
      img:'../../bike.jpg',
      doca: 4,
      energy: 3
    },
    { 
      bike: 'Bicicleta Elétrica',
      km: 7,
      checkIn: '14/03/2024, 12:00',
      checkOut: '17/03/2024, 12:00',
      points: 3.00,
      img:'../../bike.jpg',
      doca: 5,
      energy: 2
    }
  ]

  const handleOpenItem = (item:T.HistoryItem) => {
    setHistoryItem(item)
    setSeeItem(true)
  }

  return (
    !seeItem ? <H.History>
      <H.Header><KeyboardBackspaceIcon onClick={() => props.setPage(5)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <H.Text>HISTORICO DE ALUGUEIS</H.Text></H.Header>
      <H.Title>Sua pontuação atual: 4.95</H.Title>
      <H.HistoryList>
        {history.map((h) => 
        <H.HistoryItem onClick={() => handleOpenItem(h)}>
          <H.Name>{h.bike}</H.Name>
          <H.Paragraph>Data de retirada: {h.checkIn}</H.Paragraph>
          <H.Paragraph>Data de entrega: {h.checkOut}</H.Paragraph>
        </H.HistoryItem>)}
      </H.HistoryList>
    </H.History> : <HistoryItem historyItem={historyItem} setSeeItem={setSeeItem}/>
  )
}
