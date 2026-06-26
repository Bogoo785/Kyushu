import DayLayout from './DayLayout'

const day = {
  id: 'date-10-12',
  day: 'Day 8',
  date: '10/12',
  title: '搭船、鰻魚飯與太宰府',
  route: '福岡 → 太宰府 → 天神',
  mood: '文化日',
  items: ['10:00 搭船', '11:10 結束', '吃鰻魚飯', '太宰府、天滿宮、表參道', '太宰府 → 天神'],
  note: '太宰府表參道適合安排點心與伴手禮。',
}

function Day1012() {
  return <DayLayout day={day} />
}

Day1012.day = day

export default Day1012
