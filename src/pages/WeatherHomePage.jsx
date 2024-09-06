import DayPicker from '../components/ui/DayPicker'
import TimeSlider from '../components/ui/TimeSlider'
import TitleLocation from '../components/ui/TitleLocation'
import useStoreUser from '../store/useStoreUser'


function WeatherHomePage() {
  const { user, setUserDate, setUserTime } = useStoreUser()
  const { date, time } = user

  return (
    <div className="weather-home-page">
      <TitleLocation />
      <section className="weather-home-page__time-controls">
        <TimeSlider time={time} setTime={setUserTime} />
        <DayPicker currentDate={date} setCurrentDate={setUserDate} />
      </section>
    </div>
  )
}


export default WeatherHomePage


