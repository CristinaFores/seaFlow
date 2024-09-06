function dmsToDecimal(dms) {
  const cleanedDMS = dms.replace(/[^\d°'"\s.-]+/g, '').replace('�', '-').trim()
  const match = cleanedDMS.match(/(\d{1,3})°?\s*(\d{1,2})'?\s*(\d{1,2})"?/)
  const degrees = parseFloat(match[1], 10)
  const minutes = parseFloat(match[2], 10)
  const seconds = parseFloat(match[3] || '0', 10)

  const decimal = Math.abs(degrees) + minutes / 60 + seconds / 3600
  return cleanedDMS.slice(0, 1) === '-' ? -decimal : decimal
}

export default dmsToDecimal