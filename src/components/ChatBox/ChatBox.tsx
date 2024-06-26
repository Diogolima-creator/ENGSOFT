import * as C from './styles'
import * as T from '../../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SendIcon from '@mui/icons-material/Send';
export const ChatBox = (props:T.Screen) => {

  const messages = [
  {
    techMessage:'Olá Davi, tudo bem? Como posso te ajudar hoje?',
    peopleMessage:'Olá, estou com problemas na hora de alugar, por que disso?',
    time: 4
  },
  {
    techMessage:'Vamos averiguar o sistema, qual seu RGA?',
    peopleMessage:'Aqui está xxxx.xxxx.xxx-xx',
    time: 7
  },
  {
    techMessage:'Vejo que você tirou 10 no trabalho de ENG SOFT, vou atualizar imediatamente o sistema e voce pode tentar novamente.',
    peopleMessage:'Obrigado Ricardo, gratidão.',
    time: 13
  },
]

  return (
    <C.ChatBox>
      <C.Header><KeyboardBackspaceIcon onClick={() => props.setPage(6)}sx={{ width:26, height:28, cursor: 'pointer'}}/> <C.Text>Chat com Suporte</C.Text></C.Header>
      <C.ProfileTechnical>
        <C.Profile>
          <C.ProfilePic src='../../psor.gif' />
          <C.Texts>
            <C.Name>Ricardo Theis Geraldi</C.Name>
            <C.Role>Tecnico UFMS</C.Role>
          </C.Texts>
        </C.Profile>
      </C.ProfileTechnical>
      <C.Chat>
        {messages.map((m) => 
        <>
          <C.ChatMessageTech at={m.time}>{m.techMessage}</C.ChatMessageTech>
          <C.End at={m.time}><C.ChatMessagePeople >{m.peopleMessage}</C.ChatMessagePeople></C.End>
        </>)}
      </C.Chat>
      <C.SendArea>
        <C.Send value='Que bom que fiz aquele trabalho com a minha vida e alma, valeu a pena.'/>
        <C.Button>
          <SendIcon sx={{ cursor:'pointer' }} />
        </C.Button>
      </C.SendArea>
      
    </C.ChatBox>
  )
}
