import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/13')

function Day1013() {
  return <DayLayout day={day} />
}

Day1013.day = day

export default Day1013
