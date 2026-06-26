import DayLayout from './DayLayout'

const day = {
  id: 'date-10-9',
  day: 'Day 5',
  date: '10/9',
  title: '霧島自然與神社',
  route: '霧島',
  mood: '山景日',
  items: ['霧島市場', '霧島展望台', '霧島神宮'],
  note: '山區天氣變化較快，前一天可以再確認天候。',
}

function Day109() {
  return <DayLayout day={day} />
}

Day109.day = day

export default Day109
