import * as B from './styles'
import * as T from '../../types/types'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Footer } from '../Footer/Footer'
import { useState, useEffect } from 'react';
import { LoadingBikes } from '../LoadingBikes/LoadingBikes';

export const BikeSearch = (props:T.Screen) => {
  const [selectedDate,] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  }, []);

  const handleSearch = () => {
    setLoading(true)
    setTimeout(() => {
      props.setPage(6)
    }, 2500)
  }
  return (
    <B.Bike>
      {!loading ? <B.Content>
        <B.Header><KeyboardBackspaceIcon onClick={() => props.setPage(3)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <B.Text>ALUGAR UMA BICICLETA</B.Text></B.Header>
        <B.Date>
          <B.TextDate>escolha uma data e um horário</B.TextDate>
          <B.Inputs>
            <B.Label>Data da retirada</B.Label>
            <B.InputBlock>
              <B.InputDate value={currentDate} type='date'/>
              <B.InputNumber value={'09:00'} maxLength={5} className="input-number" placeholder='00:00'/>
            </B.InputBlock>
            <B.Label>Data da entrega</B.Label>
            <B.InputBlock>
              <B.InputDate value={currentDate} type='date'/>
              <B.InputNumber value={'17:00'} maxLength={5} className="input-number" placeholder='00:00'/>
            </B.InputBlock>
          </B.Inputs>
        </B.Date>
        <B.Button onClick={() => handleSearch()}>Buscar bicicletas disponiveis</B.Button>
      </B.Content> : <LoadingBikes />}
      {selectedDate !== '' && <Footer page={props.page} setPage={props.setPage}/>}
    </B.Bike>
  )
}
