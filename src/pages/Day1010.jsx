import DayLayout from './DayLayout'

const day = {
  id: 'date-10-10',
  day: 'Day 6',
  date: '10/10',
  title: '新鳥栖 Outlet，晚上回博多',
  route: '鹿兒島 → 新鳥栖 → 博多',
  mood: '移動購物',
  items: ['10:02 - 11:25 前往新鳥栖站', 'UBER → Outlet', '17:00 離開 Outlet', 'Check-in', '一蘭拉麵、屋台、鰻魚'],
  schedule: [
    {
      time: '10:02 - 11:25',
      title: '前往新鳥栖站',
      detail: '抵達新鳥栖後改搭 UBER 前往 Outlet。',
    },
    {
      time: '白天',
      title: 'Outlet 購物',
      detail: '預計 17:00 離開，行李寄放與集合點先確認好。',
    },
    {
      time: '傍晚',
      title: 'Check-in',
      detail: '回到住宿辦理入住，整理行李後再出門吃晚餐。',
    },
    {
      time: '晚餐',
      title: '一蘭拉麵、屋台或鰻魚',
      detail: '依排隊狀況與大家想吃的類型決定。',
    },
  ],
  infoCards: [
    { label: '車程', value: '10:02 - 11:25' },
    { label: 'Outlet', value: '17:00 離開' },
    { label: '晚餐', value: '一蘭、屋台、鰻魚' },
  ],
  note: '這天轉乘和購物都會牽涉行李，建議先確認寄放方式與 Outlet 回程叫車點。',
}

function Day1010() {
  return <DayLayout day={day} />
}

Day1010.day = day

export default Day1010
