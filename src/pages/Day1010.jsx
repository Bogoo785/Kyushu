import DayLayout from './DayLayout'

const day = {
  id: 'date-10-10',
  day: 'Day 6',
  date: '10/10',
  title: '新鳥栖 Outlet，晚上回博多',
  route: '鹿兒島 → 新鳥栖 → 博多',
  mood: '移動購物',
  items: ['10:00 前還車', '10:02 - 11:25 前往新鳥栖站', 'UBER → Outlet', '晚上新幹線 → 博多'],
  note: '這天轉乘多，建議先確認行李寄放方式。',
}

function Day1010() {
  return <DayLayout day={day} />
}

Day1010.day = day

export default Day1010
