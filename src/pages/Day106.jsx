import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/6')

function Day106() {
  return <DayLayout day={day} />
}

Day106.day = day

export default Day106
