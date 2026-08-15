import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/9')

function Day109() {
  return <DayLayout day={day} />
}

Day109.day = day

export default Day109
