import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const today = new Date()
const dates = Array.from({ length: 7 }, (_, i) => {
  const date = new Date()
  date.setDate(today.getDate() + i)
  return date.toISOString().split('T')[0]
})

const DayPicker = ({ currentDate, setCurrentDate, calendarDates = dates, className }) => {
  const selectedDate = calendarDates.find((date) => date === format(new Date(currentDate), 'yyyy-MM-dd'))
  const handleDateChange = (date) => { setCurrentDate(date) }

  return (
    <div className={`day-picker ${className}`}>
      {calendarDates?.map((date) => (
        <button
          key={date}
          className={`day-picker__button  ${date === selectedDate && 'day-picker__selected'}`}
          onClick={() => handleDateChange(date)}
        >
          <span className="day-picker__weekday">{format(new Date(date), 'iii', { locale: es })[0].toUpperCase() + format(new Date(date), 'iii', { locale: es }).slice(1)}</span>
          <span className="day-picker__day">{format(new Date(date), 'd', { locale: es })}</span>
          {/* <span className="day-picker__month">{format(new Date(date), 'MMM', { locale: es })[0].toUpperCase() + format(new Date(date), 'MMM', { locale: es }).slice(1)}</span> */}
        </button>
      ))}
    </div>
  )
}

export default DayPicker