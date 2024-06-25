import * as A from './styles'
import * as T from '../../types/types'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const Account = (props:T.Screen) => {

  const user = {
    name:'Davi',
    email: 'teste@gmail.com',
    cel: '(67) 99999-9999',
    rga: '2024.1905.045.12',
    role: 'Estudante'
  }

  return (
    <A.Account>
      <A.Header><KeyboardBackspaceIcon onClick={() => props.setPage(3)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <A.Text>CONTA</A.Text></A.Header>
      <A.Content>
        <A.ProfilePic src='images/davi.png'/>
        <A.Label>Nome</A.Label>
        <A.Input value={user.name}/>
        <A.Label>Email</A.Label>
        <A.Input value={user.email}/>
        <A.Label>Celular</A.Label>
        <A.Input value={user.cel}/>
        <A.Label>RGA</A.Label>
        <A.Input value={user.rga}/>
        <A.Label>Cargo</A.Label>
        <A.Input readOnly={true} value={user.role}/>
        <A.Button>Salvar e Continuar</A.Button>
      </A.Content>
    </A.Account>
  )
}