import * as L from './styles'

export const LoadingLogo = () => {
  return (
    <L.Box>
      <L.LogoLoading src='images/logo.png'/>
      <L.LoadingText>BikeAPP</L.LoadingText>
    </L.Box>
  )
}
