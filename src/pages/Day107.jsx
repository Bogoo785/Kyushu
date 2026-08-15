import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/7')

function Day107() {
  return <DayLayout day={day} />
}

Day107.day = day

export default Day107
