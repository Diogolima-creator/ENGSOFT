import * as C from './styles'
import * as T from '../../types/types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ConfirmedVerifyRent = (props:T.Screen) => {
  return (
    <C.Verify>
        <CheckCircleIcon sx={{ width:156, height:156, color:'#00ff00'}}/>
        <C.Paragraph>Aluguel realizado com sucesso, você receberá um email confirmando sua locação.</C.Paragraph>
        <C.Button onClick={() => props.setPage(3)}>Voltar</C.Button>
    </C.Verify>
  )
}
