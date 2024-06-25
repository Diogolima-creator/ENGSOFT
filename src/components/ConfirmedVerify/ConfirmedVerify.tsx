import * as C from './styles'
import * as T from '../../types/types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ConfirmedVerify = (props:T.Screen) => {
  return (
    <C.Verify>
        <CheckCircleIcon sx={{ width:156, height:156, color:'#00ff00'}}/>
        <C.Paragraph>Verificação enviada com sucesso, em até 24 horas você receberá um email.</C.Paragraph>
        <C.Button onClick={() => props.setPage(0)}>Voltar</C.Button>
    </C.Verify>
  )
}
