import * as B from './styles'
import * as T from '../../../../types/types'

export const BikeItem = (props:T.BikeProps) => {

  const handleBikeChoice = () => {
    props.setBike!(props.bike)
    props.setPage!(7)
  }
  
  return (
    <B.Item onClick={() => handleBikeChoice()}>
      <B.Img src={props.bike.img}/>
      <B.Texts>
        <B.Name>{props.bike.name}</B.Name>
        <B.Energy>Carregando na Doca {props.bike.doca}</B.Energy>
        <B.Energy>Energia: {props.bike.energy}%</B.Energy>
        <B.Autonomy>Autonomia {props.bike.autonomy.toFixed(2)} KM</B.Autonomy>
      </B.Texts>
    </B.Item>
  )
}
