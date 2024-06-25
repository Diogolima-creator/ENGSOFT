import * as B from './styles'
import * as T from '../../types/types';
import { Footer } from '../Footer/Footer';
import { BikeItem } from './components/BikeItem/BikeItem';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const BikeAvailable = (props:T.Screen) => {

  const bikes:T.Bike[] = [{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 89,
    autonomy: 89*0.1,
    doca: 0
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 95,
    autonomy: 95*0.1,
    doca: 1
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 100,
    autonomy: 100*0.1,
    doca: 2
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 44,
    autonomy: 44*0.1,
    doca: 3
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 32,
    autonomy: 32*0.1,
    doca: 4
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 68,
    autonomy: 68*0.1,
    doca: 5
  },{
    name: 'Bicicleta Elétrica',
    img: '../../bike.jpg',
    energy: 77,
    autonomy: 77*0.1,
    doca: 6
  },]

  return (
    <B.Bike>
      <B.Header><KeyboardBackspaceIcon onClick={() => props.setPage(4)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <B.Text>BICICLETAS DISPONIVEIS</B.Text></B.Header>
      <B.BikeList>
        {bikes.map((bike) => 
          <BikeItem bike={bike} setBike={props.setBike} setPage={props.setPage} />
        )}
      </B.BikeList>
      <Footer setPage={props.setPage} page={props.page} />
    </B.Bike>
  )
}
