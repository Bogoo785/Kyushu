import DayLayout from './DayLayout'

const day = {
  id: 'date-10-5',
  day: 'Day 1',
  date: '10/5',
  title: '抵達福岡，移動到鹿兒島',
  route: '高雄 → 福岡 → 博多 → 鹿兒島',
  mood: '抵達日',
  items: ['13:30 高雄機場集合', '21:24 - 22:44 博多 → 鹿兒島', '晚餐：LAWSON、7-11 或努努雞'],
  flightDeal: {
    label: 'EVA Air 航班價格',
    airline: 'EVA AIR',
    resultText: '12 項結果，最低只要',
    price: 'NT$19,033',
    action: '選擇',
    flights: [
      {
        departure: '15:30',
        from: 'KHH',
        duration: '2 小時 50 分鐘',
        type: '直飛',
        arrival: '19:20',
        to: 'FUK',
      },
      {
        departure: '20:20',
        from: 'FUK',
        duration: '2 小時 50 分鐘',
        type: '直飛',
        arrival: '22:10',
        to: 'KHH',
      },
    ],
  },
  schedule: [
    {
      time: '13:30',
      title: '高雄機場集合',
      detail: '先完成報到、行李托運與出境，抵達福岡後接續移動到博多。',
    },
    {
      time: '21:24 - 22:44',
      title: '博多 → 鹿兒島',
      detail: '晚上搭車前往鹿兒島，抵達後直接進飯店休息。',
    },
    {
      time: '晚餐',
      title: 'LAWSON、7-11 或努努雞',
      detail: '依抵達時間和體力決定，先以快速補給、早點休息為主。',
    },
  ],
  infoCards: [
    { label: '住宿', value: '鹿兒島索拉里亞西鐵飯店' },
    { label: '晚餐', value: 'LAWSON、7-11、努努雞' },
  ],
  note: '第一天以移動為主，建議把隔天票券、飯店地址和交通方式先整理好。',
}

function Day105() {
  return <DayLayout day={day} />
}

Day105.day = day

export default Day105
