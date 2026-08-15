import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/8')

function Day108() {
  return <DayLayout day={day} />
}

Day108.day = day

export default Day108
