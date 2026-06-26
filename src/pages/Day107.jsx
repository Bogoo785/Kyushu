import DayLayout from './DayLayout'

const day = {
  id: 'date-10-7',
  day: 'Day 3',
  date: '10/7',
  title: '指宿砂蒸體驗',
  route: '鹿兒島 → 指宿',
  mood: '溫泉日',
  items: ['搭 JR 前往指宿', '轉乘公車', '指宿砂蒸會館 砂樂'],
  schedule: [
    {
      time: '08:30',
      title: '集合',
      detail: '確認車票、回程時間與隨身物品。',
    },
    {
      time: '09:56 - 10:47',
      title: '鹿兒島 → 指宿車站',
      detail: '7 月初記得看票，確認是否搭乘玉手箱列車。',
    },
    {
      time: '午餐',
      title: 'にこにこすし（niconicosushi）',
      detail: '抵達指宿後安排午餐。',
    },
    {
      time: '午後',
      title: '指宿砂浴',
      detail: '砂浴價格約 2100 円，體驗後補水休息。',
    },
    {
      time: '傍晚',
      title: '回鹿兒島',
      detail: '回市區後安排晚餐與伴手禮採買。',
    },
  ],
  infoCards: [
    { label: '交通', value: '鹿兒島 → 指宿 09:56 - 10:47' },
    { label: '午餐', value: 'にこにこすし' },
    { label: '砂浴', value: '約 2100 円' },
  ],
  note: '砂蒸後會流汗，記得補水，也可以準備替換衣物；回程時間建議先查好。',
}

function Day107() {
  return <DayLayout day={day} />
}

Day107.day = day

export default Day107
