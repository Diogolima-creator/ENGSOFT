import * as O from './styles'
import * as T from '../../types/types';

export const OpenApp = (props:T.Screen) => {
  return (
    <O.OpenApp>
      <O.Img>
        <O.Icon onClick={() => props.setPage(0)}>
            <O.IconImg src='images/logo.png'/>
            <O.IconName >BikeAPP</O.IconName>
        </O.Icon>
      </O.Img>
    </O.OpenApp>
  )
}
