// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

export const generateMockDateTime = () => {
  const dateAux = new Date();
  const dateTimeArray: string[] = []

  for (let i = 0; i < 5; i++) {
    dateAux.setDate(dateAux.getDate() + i)
    const date = `${dateAux.getDate()} ${months[dateAux.getMonth()]} ${dateAux.getFullYear()}`

    for (let j = 8; j < 12; j++) {
      dateTimeArray.push(`${date} ${j}:00`)
    }

    for (let j = 13; j < 19; j++) {
      dateTimeArray.push(`${date} ${j}:00`)
    }
  }

  return dateTimeArray
}

export const generateMockDurations = () => [1, 2, 3, 4, 5, 6].map(time => (`${time} hour${time > 1 ? 's' : ''}`))
