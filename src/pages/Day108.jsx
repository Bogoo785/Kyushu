import DayLayout from './DayLayout'

const day = {
  id: 'date-10-8',
  day: 'Day 4',
  date: '10/8',
  title: '租車前往櫻島',
  route: '鹿兒島 ↔ 櫻島',
  mood: '自駕日',
  items: ['08:30 一樓集合', '09:00 租車', '10:00 渡船口到櫻島', '湯之平展望所、月讀神社、泡腳', '櫻島 → 鹿兒島', '購物'],
  schedule: [
    {
      time: '08:30',
      title: '一樓集合',
      detail: '確認駕照、租車資料、導航與今日路線。',
    },
    {
      time: '09:00',
      title: '租車',
      detail: '取車後前往渡船口，預留取車與上船排隊時間。',
    },
    {
      time: '10:00',
      title: '渡船口到櫻島',
      detail: '搭渡輪前往櫻島，抵達後開始自駕景點。',
    },
    {
      time: '白天',
      title: '櫻島景點',
      detail: '安排湯之平展望所、月讀神社與足湯，依天氣調整停留順序。',
    },
    {
      time: '傍晚',
      title: '櫻島 → 鹿兒島、購物',
      detail: '回鹿兒島後安排購物，還車前記得加油。',
    },
  ],
  infoCards: [
    { label: '集合', value: '08:30 一樓' },
    { label: '租車', value: '09:00' },
    { label: '渡輪', value: '10:00 前往櫻島' },
  ],
  note: '租車日要預留取車、停車、渡輪排隊與加油時間；櫻島景點可依天氣彈性調整。',
}

function Day108() {
  return <DayLayout day={day} />
}

Day108.day = day

export default Day108
