import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/10')

function Day1010() {
  return <DayLayout day={day} />
}

Day1010.day = day

export default Day1010
