import DayLayout from './DayLayout'

const day = {
  id: 'date-10-7',
  day: 'Day 3',
  date: '10/7',
  title: '指宿砂蒸體驗',
  route: '鹿兒島 → 指宿',
  mood: '租車溫泉日',
  items: ['09:56 - 10:47 鹿兒島 → 指宿車站', '租車', '拉麵、黃金鳥居、龍宮神社', '指宿砂浴', '還車後回鹿兒島'],
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
      time: '到站後',
      title: '租車',
      detail: '取車後開始指宿周邊景點，回程前記得預留還車時間。',
    },
    {
      time: '午餐',
      title: '元祖指宿拉麵二代目',
      detail: '預計 13:30 前吃完，接續下午景點。',
    },
    {
      time: '14:00',
      title: '黃金鳥居',
      detail: '短暫停留拍照，作為前往龍宮神社前的中繼點。',
    },
    {
      time: '15:00',
      title: '龍宮神社',
      detail: '海邊神社景點，依天氣與停車狀況調整停留時間。',
    },
    {
      time: '16:00 - 18:00',
      title: '指宿砂浴',
      detail: '砂浴價格約 2100 円，體驗後補水休息。',
    },
    {
      time: '晚餐',
      title: '長壽或 さつま味',
      detail: '還車後回鹿兒島，視時間與體力決定是否加宵夜。',
    },
  ],
  infoCards: [
    { label: '交通', value: '鹿兒島 → 指宿 09:56 - 10:47' },
    { label: '午餐', value: '元祖指宿拉麵二代目' },
    { label: '砂浴', value: '約 2100 円' },
  ],
  note: '這天景點多又有租車，取車、停車、還車時間都要抓鬆一點；砂蒸後記得補水。',
}

function Day107() {
  return <DayLayout day={day} />
}

Day107.day = day

export default Day107
