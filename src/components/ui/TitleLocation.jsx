import { format } from 'date-fns'
import es from 'date-fns/locale/es'

import useStoreUser from '../../store/useStoreUser'

function TitleLocation() {
  const { user } = useStoreUser()
  const { locationSelected, date, time } = user


  const formattedDate = format(new Date(date), 'PPPP', { locale: es }).toUpperCase()
  const formattedTime = format(new Date(0, 0, 0, Math.floor(time / 60), time % 60), 'HH:mm')

  return (
    <section className="title-location">
      <p>{formattedDate}</p>
      <p> Estado Actual a las&nbsp;{formattedTime} </p>
      <p>{locationSelected?.city} - {locationSelected?.name}</p>
    </section>
  )
}

export default TitleLocation
