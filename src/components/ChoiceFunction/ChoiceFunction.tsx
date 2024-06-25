import * as C from './styles'
import * as T from '../../types/types'
import HandymanIcon from '@mui/icons-material/Handyman';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Header } from '../Header/Header';
import { useState } from 'react';
import { LoadingLogo } from '../LoadingLogo/LoadingLogo';

export const ChoiceFunction = (props:T.Screen) => {

  const [selectOptions, setSelectOptions] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePageLoading = (page:number) => {
    setLoading(true)
    setTimeout(() => {
      props.setPage(page)
    }, 5000)
  }

  return (
    !loading ? <C.Choice>
      <Header/>
      <C.Title>Escolha a categoria em que você se enquadra:</C.Title>
      <C.Blocks>
        <C.Block onClick={()=> setSelectOptions('tech')} className={selectOptions === 'tech' ? 'selected' : ''}> 
            <HandymanIcon sx={{ width:42, height:42, color:'#804000' }}/>
            <C.Paragraph>Tecnico</C.Paragraph>
        </C.Block>
        <C.Block onClick={()=> setSelectOptions('user')} className={selectOptions === 'user' ? 'selected': ''}>
          <DirectionsBikeIcon sx={{ width:42, height:42, color:'#804000' }}/>
          <C.Paragraph>Ciclista</C.Paragraph>
        </C.Block>
      </C.Blocks>
      <C.Inputs>
        <C.Input onChange={(e) => setInputValue(e.target.value)} placeholder={`Digite o seu numero de ${selectOptions === 'tech' ? 'TAEs' : selectOptions === 'user' ? 'RGA' : ''}`}/>
      </C.Inputs>
      <C.Buttons>
        <C.Button onClick={() => handlePageLoading(2)}disabled={inputValue === '' || selectOptions === ''}>Solicitar verificação</C.Button>
        <C.ButtonBack onClick={() => props.setPage(0)}>Cancelar</C.ButtonBack>
      </C.Buttons>
    </C.Choice> : <LoadingLogo/>
  )
}
