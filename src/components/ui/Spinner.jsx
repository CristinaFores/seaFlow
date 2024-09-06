
/**
* @typedef {Object} Props
* @param {object} props
* @param {number} props.width - Width del Spinner personalizar el size
* @param {number} props.height - Height del Spinner personalizar el size
* @param {('small'|'medium'|'large'|'extraLarge')} props.size - Tamaño del Spinner  small: 20px, medium: 40px, large: 60px, extraLarge: 80px
* @param {number} props.strokeWidth - Grosor del Spinner default dependiendo del size small: 3, medium: 3, large: 5, extraLarge: 6, si no se especifica el size por defecto es 3
* @param {string} props.className 
* @param {('primary'|'secondary')}  props.linearGradient  - Tipo de gradiente del Spinner default primary
* @param {Array<{offset: string, stopColor: string}>} props.customLinearGradient - Gradiente del Spinner Ej: [{ offset: '7.75%', stopColor: '#D4A9FF' }, { offset: '89.95%', stopColor: '#129AD4' }]
* @returns {JSX.Element}
*/

const colorSpinner = {
  primary: [
    { offset: '20%', stopColor: 'white', stopOpacity: 0.2 },
    { offset: '80%', stopColor: 'white', stopOpacity: .8 },
  ],
  secondary: [
    { offset: '20%', stopColor: '#4f46e5', stopOpacity: 0.2 },
    { offset: '80%', stopColor: '#818cf8', stopOpacity: .8 },
  ],
}

// const gradientColorsDefault = [
//   { color: '#4f46e5', offset: '0%' },
//   { color: '#818cf8', offset: '30%' },
//   { color: '#c7d2fe', offset: '100%' },
// ]

function Spinner({
  width = '',
  height = '',
  size = 'small',
  strokeWidth = 3,
  className = '',
  linearGradient = 'primary',
  customLinearGradient = []
}) {

  const typeStyleLinearGradient = {
    primary: colorSpinner.primary,
    secondary: colorSpinner.secondary,
  }

  const typeSize = { small: 20, medium: 40, large: 60, extraLarge: 80 }
  const strokeWidthDefault = { small: 3, medium: 4, large: 5, extraLarge: 6 }

  if (!width && !height) {
    width = typeSize[size]
    height = typeSize[size]
  }

  if (size) {
    strokeWidth = strokeWidthDefault[size]
  }

  if (customLinearGradient.length > 0) {
    typeStyleLinearGradient[linearGradient] = customLinearGradient
  }


  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(centerX, centerY) - strokeWidth
  const idRandom = Math.random().toString(36).substring(7)

  return (
    <>
      <svg
        className={`spinner ${className}`}
        width={width} height={height}>
        <linearGradient id={idRandom} x1="0" y1="0" x2="1" y2="1">
          {typeStyleLinearGradient[linearGradient]?.map((gradient, index) => (
            <stop key={index}
              offset={gradient?.offset}
              stopColor={gradient?.stopColor}
              stopOpacity={gradient?.stopOpacity}
            ></stop>
          ))}
        </linearGradient>
        <circle
          r={radius}
          cx={centerX}
          cy={centerY}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={`url(#${idRandom})`}
        ></circle>
      </svg>
    </>

  )
}

export default Spinner
