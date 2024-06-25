import { useState } from 'react'
import { HomeScreen } from './components/HomeScreen/HomeScreen'
import { ChoiceFunction } from './components/ChoiceFunction/ChoiceFunction'
import { ConfirmedVerify } from './components/ConfirmedVerify/ConfirmedVerify'
import { HomeApp } from './components/HomeApp/HomeApp'
import { BikeSearch } from './components/BikeSearch/BikeSearch'
import { Account } from './components/Account/Account'
import { OpenApp } from './components/OpenApp/OpenApp'
import { BikeAvailable } from './components/BikeAvailable/BikeAvailable'
import { BikeRent } from './components/BikeRent/BikeRent'
import * as A from './AppStyles'
import * as T from './types/types'

function App() {
  const [page, setPage] = useState(99)
  const [bike, setBike] = useState<T.Bike>({
    name: '',
    img: '',
    energy:0,
    autonomy: 0,
    doca: 0
  })

  return (
    <A.Container>
      <A.Mobile>
          {page === 0 && <HomeScreen setPage={setPage}/>}
          {page === 1 && <ChoiceFunction setPage={setPage}/>}
          {page === 2 && <ConfirmedVerify setPage={setPage}/>}
          {page === 3 && <HomeApp page={page} setPage={setPage}/>}
          {page === 4 && <BikeSearch page={page} setPage={setPage}/>}
          {page === 5 && <Account page={page} setPage={setPage}/>}
          {page === 6 && <BikeAvailable setBike={setBike} page={page} setPage={setPage}/>}
          {page === 7 && <BikeRent bike={bike} setPage={setPage}/>}
          {page === 99 && <OpenApp page={page} setPage={setPage}/>}
      </A.Mobile>
    </A.Container>
  )
}

export default App
