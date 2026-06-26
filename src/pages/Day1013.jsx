import DayLayout from './DayLayout'

const day = {
  id: 'date-10-13',
  day: 'Day 9',
  date: '10/13',
  title: '最後採買與返程',
  route: '福岡 → 高雄',
  mood: '返程日',
  items: ['喔米押給 OR 門司港', '20:20 飛機'],
  note: '最後一天要抓寬交通時間，避免景點或採買壓到機場報到。',
}

function Day1013() {
  return <DayLayout day={day} />
}

Day1013.day = day

export default Day1013
