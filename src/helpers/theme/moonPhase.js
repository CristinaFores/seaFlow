const moonPhase = (phase) => {
  switch (phase) {
    case 'New Moon':
      return 'Luna Nueva'
    case 'Waxing Crescent':
      return 'Creciente'
    case 'First Quarter':
      return 'Cuarto Creciente'
    case 'Waxing Gibbous':
      return 'Gibosa Creciente'
    case 'Full Moon':
      return 'Luna Llena'
    case 'Waning Gibbous':
      return 'Gibosa Menguante'
    case 'Last Quarter':
      return 'Cuarto Menguante'
    case 'Waning Crescent':
      return 'Menguante'
    default:
      return phase
  }
}

export default moonPhase