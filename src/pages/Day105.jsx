import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/5')

function Day105() {
  return <DayLayout day={day} />
}

Day105.day = day

export default Day105
