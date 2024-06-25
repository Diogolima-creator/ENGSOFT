import * as C from './styles'
import * as T from '../../types/types'
import CancelIcon from '@mui/icons-material/Cancel';

export const RecusedVerifyRent = (props:T.Screen) => {
  return (
    <C.Verify>
        <CancelIcon sx={{ width:156, height:156, color:'red'}}/>
        <C.Paragraph>Seu aluguel falhou, entre em contato com a assistencia tecnica.</C.Paragraph>
        <C.Button onClick={() => props.setPage(0)}>Solicitar suporte tecnico</C.Button>
        <C.ButtonBack onClick={() => props.setPage(6)}>Voltar</C.ButtonBack>
    </C.Verify>
  )
}
