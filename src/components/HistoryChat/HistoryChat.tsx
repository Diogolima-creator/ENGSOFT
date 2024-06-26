import * as H from './styles'
import * as T from '../../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const HistoryChat = (props:T.Screen) => {

  const chat = [{
    ticketId: '1sj2-8j98s-21s21-s1',
    name: 'Ricardo Theis Geraldi',
    role: 'Tecnico UFMS',
    status: 'Resolvido'
  }]

  return (
    <H.History>
      <H.Header><KeyboardBackspaceIcon onClick={() => props.setPage(5)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <H.Text>CHAT DE SUPORTE</H.Text></H.Header>
      <H.ChatList>
      {chat.map((c) => 
        <H.ChatItem onClick={() => props.setPage(9)}>
            <H.ProfilePic src='../../psor.gif'/>
            <H.TicketId>Ticket: {c.ticketId}</H.TicketId>
            <H.Name>{c.name}</H.Name>
            <H.Role>{c.role}</H.Role>
            <H.Status>Status:{c.status}</H.Status>
        </H.ChatItem>
      )}
      </H.ChatList>
    </H.History>
  )
}
