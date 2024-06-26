import * as A from './styles'
import * as T from '../../types/types';
import { Footer } from '../Footer/Footer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

export const Account = (props:T.Screen) => {

  const menuItems = [
    {
      icon: <ElectricBikeIcon className='icon'/>,
      name:'Meus Alugueis',
      page: 10
    },
    {
    icon: <SettingsOutlinedIcon className='icon'/>,
    name:'Configurações',
    page: 8
  },
  {
    icon: <ForumOutlinedIcon className='icon'/>,
    name:'Chat Suporte',
    page: 11
  },
  {
    icon: <NotificationsOutlinedIcon className='icon'/>,
    name:'Notificação'
  },
  {
    icon: <InfoOutlinedIcon className='icon'/>,
    name:'Sobre nós'
  },
  {
    icon: <LockOutlinedIcon className='icon'/>,
    name:'Politica de privacidade'
  },
  {
    icon: <ArticleOutlinedIcon className='icon'/>,
    name:'Termos e condições de uso'
  },
  {
    icon: <LogoutOutlinedIcon className='icon'/>,
    name:'Sair',
    page: 0
  },
]
  return (
    <A.Account>
      <A.HeaderBackGround>
        <A.HeaderItems>
          <A.Header><KeyboardBackspaceIcon onClick={() => props.setPage(3)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <A.Text>CONTA</A.Text></A.Header>
          <A.ProfilePic src='../../davi.png'/>
        </A.HeaderItems>
      </A.HeaderBackGround>
      <A.Content>
        <A.Info>
          <A.Name>Davi Mortari</A.Name>
          <A.Paragraph>teste@ufms.br</A.Paragraph>
          <A.Paragraph>67 99852-1986</A.Paragraph>
        </A.Info>
        <A.Menu>
          {menuItems.map((item) => 
          <A.MenuItem onClick={item.page || item.page == 0 ? () => props.setPage(item.page) : () => console.log()}>
            {item.icon}
            <A.Paragraph>{item.name}</A.Paragraph>
          </A.MenuItem>)}
        </A.Menu>
      </A.Content>
      <Footer page={props.page} setPage={props.setPage}/>
    </A.Account>
  )
}
