import * as R from './styles'
import * as T from '../../types/types'
import CancelIcon from '@mui/icons-material/Cancel';

export const RecusedVerifyRent = (props:T.Screen) => {
  return (
    <R.Verify>
        <CancelIcon sx={{ width:156, height:156, color:'red'}}/>
        <R.Paragraph>Seu aluguel falhou, entre em contato com a assistencia tecnica.</R.Paragraph>
        <R.Button onClick={() => props.setPage(9)}>Solicitar suporte tecnico</R.Button>
        <R.ButtonBack onClick={() => props.setPage(6)}>Voltar</R.ButtonBack>
    </R.Verify>
  )
}
