import * as T from '../../types/types'
import { Footer } from '../Footer/Footer';
import * as H from './styles'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import PersonIcon from '@mui/icons-material/Person';

export const HomeApp = (props:T.Screen) => {
  
  const users = [{
    name:'Pedro Conte',
    bike:'Bicicleta Eletrica',
    km: 12,
    url: './images/pedro.png'
  },{
    name:'Teilor Ferraz',
    bike:'Bicicleta Eletrica',
    km: 9,
    url: './images/teylor.png'
  },{
    name:'Davi Mortari',
    bike:'Bicicleta Eletrica',
    km: 5,
    url: './images/davi.png'
  },{
    name:'Diogo Lima',
    bike:'Bicicleta Eletrica',
    km: 3,
    url: './images/diogo.png'
  }]


  return (
    <H.Home>
      <H.Header>
        <DragHandleIcon sx={{ width:26, height: 26, cursor:'pointer' }}/>
        <PersonIcon sx={{ width:26, height: 26, cursor:'pointer', borderRadius:'45px' }}/>
      </H.Header>
      <H.Body>
        <H.Texts>
          <H.Title>Bem vindo Davi,</H.Title>
          <H.Paragraph>encontre sua bicicleta</H.Paragraph>
        </H.Texts>
        <H.Card>
          <h1>BIKE UFMS</h1>
          <H.Button>ALUGAR AGORA</H.Button>
        </H.Card>
        <H.Users>
          <H.HeaderUser>Usuarios mais frequentes</H.HeaderUser>
        </H.Users>
        {users.map((user) => 
          <H.UserItem>
            <H.ProfilePic src={user.url}/>
            <H.Info>
                <H.Name>{user.name}</H.Name>
                <H.Bike>{user.bike}</H.Bike>
                <H.Km>{user.km} KM</H.Km>
            </H.Info>
          </H.UserItem>
        )}
      </H.Body>
      <Footer page={props.page} setPage={props.setPage}/>
    </H.Home>
  )
}
