import * as L from './styles'
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingBikes = () => {
  return (
    <L.Loading>
      <L.Text>Procurando Bicicletas</L.Text>
      <CircularProgress sx={{ minHeight:'75px', minWidth:'75px', color: 'orange'}}/>
    </L.Loading>
  )
}
