import { itinerary } from '../data/itinerary'
import DayLayout from './DayLayout'

const day = itinerary.find((item) => item.date === '10/12')

function Day1012() {
  return <DayLayout day={day} />
}

Day1012.day = day

export default Day1012
