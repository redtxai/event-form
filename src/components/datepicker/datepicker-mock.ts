import { OptionType } from "../Select/Select";

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

export const generateMockDateTime = () => {
  const dateAux = new Date();
  const dateTimeArray: OptionType[] = []

  for (let i = 0; i < 5; i++) {
    dateAux.setDate(dateAux.getDate() + i)
    const date = `${dateAux.getDate()} ${months[dateAux.getMonth()]} ${dateAux.getFullYear()}`

    for (let j = 8; j < 13; j++) {
      dateTimeArray.push({ text: `${date} ${j}:00`, selected: false })
    }

    for (let j = 13; j < 19; j++) {
      dateTimeArray.push({ text: `${date} ${j}:00`, selected: false })
    }
  }

  return dateTimeArray
}

export const generateMockDurations = () => [1, 2, 3, 4, 5, 6].map(time => ({ text: `${time} hour${time > 1 ? 's' : ''}`, selected: false }))
