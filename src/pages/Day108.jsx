import DayLayout from './DayLayout'

const day = {
  id: 'date-10-8',
  day: 'Day 4',
  date: '10/8',
  title: '租車前往櫻島',
  route: '鹿兒島 ↔ 櫻島',
  mood: '自駕日',
  items: ['10:00 租車', '搭渡輪前往櫻島', '櫻島景點與展望點', '返回鹿兒島'],
  note: '租車日要預留取車、停車、渡輪排隊與加油時間。',
}

function Day108() {
  return <DayLayout day={day} />
}

Day108.day = day

export default Day108
