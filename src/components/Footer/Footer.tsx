import * as F from './styles'
import * as T from '../../types/types'
import HomeIcon from '@mui/icons-material/Home';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Footer = (props:T.Screen) => {

  const menu = [{
    icon: <HomeIcon sx={{ width:24 , height:24}}/>,
    text: 'Início',
    pos: [3]
  },{
    icon: <ElectricScooterIcon sx={{ width:24 , height:24}}/>,
    text: 'Bicicletas',
    pos: [4,6]
  },{
    icon: <AccountBoxIcon sx={{ width:24 , height:24}}/>,
    text: 'Conta',
    pos: [5]
  }]

  return (
    <F.Footer>
        {menu.map((menuItem, index) =>
        <F.MenuItem className={index === 0 ? 'start' : index === 2 ? 'end' : ''} onClick={()=> props.setPage(menuItem.pos[0])}>
            <F.MenuIcon className={menuItem.pos.includes(props.page!) ? 'selected' : ''}>{menuItem.icon}</F.MenuIcon>
            <F.MenuText className={menuItem.pos.includes(props.page!) ? 'selected' : ''}>{menuItem.text}</F.MenuText>
        </F.MenuItem> 
      )}
      </F.Footer>
  )
}
