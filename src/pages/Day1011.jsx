import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/11')

function Day1011() {
  return <DayLayout day={day} />
}

Day1011.day = day

export default Day1011
