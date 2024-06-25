import { useEffect, useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as H from './styles'
import * as T from '../../types/types'

export const HomeScreen = (props:T.Screen) => {
  const [loading, setLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  useEffect(() => {
    if(loading){
    setTimeout(() => {
      setLoading(false)
    }, 2000) 
    }
  },[loading])

  const handleShowLoginRegister = (type: string) => {
    if(type === 'login'){
      setShowLogin(true)
      setShowRegister(false)
    }else{
      setShowLogin(false)
      setShowRegister(true)
    }
  }

  const handleChangePage = (page:number) => {
    setLoading(true)
    setTimeout(() => {
      props.setPage(page)
    },1500)
  }

  return (
     !loading ? 
     <H.Home>
     <H.Support><QuestionMarkIcon sx={{ cursor:'pointer', border: '2px solid black', borderRadius:'45px', padding:'1px', width:20, height:20}}/></H.Support>
      <H.Header>
        <H.Logo src='images/logo.png'/>
        <H.HeaderText>BikeAPP</H.HeaderText>
      </H.Header>
      {!(showLogin || showRegister) && 
      <H.Texts>
        <H.Title>Bem vindo ao BikeAPP, </H.Title>
        <H.Paragraph onClick={() => setShowLogin(true)}>Já possui cadastro?</H.Paragraph>
        <H.Button onClick={() => setShowRegister(true)}>Criar Cadastro</H.Button>
      </H.Texts>}
      {showLogin && 
      <H.Login>
        <H.Label>Email</H.Label>
        <H.Input placeholder='Digite o seu email'/>
        <H.Label>Senha</H.Label>
        <H.Input placeholder='Digite a sua senha'/>
        <H.ButtonLogin onClick={()=> handleChangePage(3)}>Entrar</H.ButtonLogin>
        <H.ChangeInput onClick={() => handleShowLoginRegister('register')}>Não possuo conta, criar agora!</H.ChangeInput>
      </H.Login>}
      {showRegister && 
      <H.Register>
        <H.Label>Email</H.Label>
        <H.Input placeholder='Digite o seu email'/>
        <H.Label>Senha</H.Label>
        <H.Input placeholder='Digite a sua senha'/>
        <H.Label>Confirmar Senha</H.Label>
        <H.Input placeholder='Digite novamente a sua senha'/>
        <H.ButtonLogin onClick={()=> handleChangePage(1)}>Criar</H.ButtonLogin>
        <H.ChangeInput onClick={() => handleShowLoginRegister('login')}>Já possuo conta, entrar agora!</H.ChangeInput>
      </H.Register>}
      <H.Footer>
        <H.FooterText>Dados Protegido por LGPD </H.FooterText><LockOutlinedIcon sx={{ width:22, height:22 }} />
      </H.Footer>
    </H.Home> : 
    <H.Box>
      <H.LogoLoading src='images/logo.png'/>
      <H.LoadingText>BikeAPP</H.LoadingText>
    </H.Box>
    
  )
}
