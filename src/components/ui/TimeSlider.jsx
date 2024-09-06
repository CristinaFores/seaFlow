import { useEffect } from 'react'

const TimeSlider = ({ setTime, time, className }) => {
  const getCurrentTimeInMinutes = () => {
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    return currentMinutes
  }

  const calculateProgressPercentage = (value, max) => {
    return (value / max) * 100
  }

  useEffect(() => {
    if (time === 0) {
      setTime(getCurrentTimeInMinutes())
    }

    if (time === 1440) {
      setTime(1439)
    }
  }, [setTime, time])

  const handleSliderChange = (event) => {
    setTime(+event.target.value)
  }

  const rangeHours = ['0h', '6h', '12h', '18h', '24h']
  const oneDayInMinutes = 24 * 60

  return (
    <div className={`time-slider ${className}`}>
      <div className="time-slider__labels">
        {rangeHours.map((label, index) => (
          <p key={index} className="time-slider__label">
            {label}
          </p>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max={oneDayInMinutes}
        value={time}
        step="1"
        className="time-slider__input"
        onChange={handleSliderChange}
        style={{
          background: `linear-gradient(to right, #6366f1 ${calculateProgressPercentage(time, oneDayInMinutes)}%, #ddd ${calculateProgressPercentage(time, oneDayInMinutes)}%)`
        }}
      />
      {/* <span className="time-slider__display">
        {format(new Date(0, 0, 0, Math.floor(time / 60), time % 60), 'HH:mm')}
      </span> */}
    </div>
  )
}

export default TimeSlider
