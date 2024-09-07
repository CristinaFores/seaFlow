
import { startOfWeek, format, endOfWeek, eachDayOfInterval, isSameDay, isToday, subWeeks, isBefore, addDays, subDays, } from 'date-fns'
import { es } from 'date-fns/locale'
import { useEffect } from 'react'

import { ArrowAngleIcon } from '../../assets/Icons'

const currentDate = new Date()
const DayPicker = ({ selectedDate, setSelectedDate, className }) => {
  const startDay = startOfWeek(selectedDate, { weekStartsOn: 1, locale: es })
  const endDay = endOfWeek(selectedDate, { weekStartsOn: 1, locale: es })
  const days = eachDayOfInterval({ start: startDay, end: endDay }, { locale: es })
  const isPrevWeekDisabled = isBefore(startOfWeek(subWeeks(selectedDate, 1), { weekStartsOn: 1 }), startOfWeek(currentDate, { weekStartsOn: 1 }))

  const prevDay = () => {
    if (!isPrevWeekDisabled) {
      setSelectedDate(subDays(selectedDate, 1))
    }
  }

  const nextDay = () => {
    setSelectedDate(addDays(selectedDate, 1))
  }

  const isSelectedDay = (day) => {
    return isSameDay(day, selectedDate)
  }

  const isDisable = (day) => {
    return isBefore(day, currentDate) && !isToday(day)
  }

  const handleClick = (day) => {
    if (!isDisable(day)) {
      setSelectedDate(day)
    }
  }

  useEffect(() => {
    if (isDisable(selectedDate)) {
      setSelectedDate(currentDate)
    }
  }, [selectedDate, setSelectedDate])


  return (
    <div className={`day-picker ${className}`}>
      <button
        className="day-picker__arrow day-picker__button"
        onClick={prevDay}
        disabled={isPrevWeekDisabled}
      >
        <ArrowAngleIcon direction="left" />
      </button>
      {
        days?.map((day) => (
          <button
            key={day}
            className={`day-picker__button  ${isSelectedDay(day) && 'day-picker__selected'}`}
            onClick={() => handleClick(day)}
            disabled={isDisable(day)}
          >
            <span className="day-picker__weekday">
              {format(new Date(day), 'iii', { locale: es })[0].toUpperCase() + format(new Date(day), 'iii', { locale: es }).slice(1)}
            </span>
            <span className="day-picker__day">
              {format(new Date(day), 'd', { locale: es })}
            </span>
          </button>
        ))
      }
      <button
        className="day-picker__arrow day-picker__button"
        onClick={nextDay}
      >
        <ArrowAngleIcon direction="right" />
      </button>
    </div >
  )
}

export default DayPicker