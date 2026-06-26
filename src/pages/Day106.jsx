import DayLayout from './DayLayout'

const day = {
  id: 'date-10-6',
  day: 'Day 2',
  date: '10/6',
  title: '鹿兒島市區慢遊',
  route: '鹿兒島市區',
  mood: '慢節奏',
  items: ['睡到飽', '鹿兒島市區散策', '天文館必去'],
  schedule: [
    {
      time: '上午',
      title: '睡到飽，鹿兒島市區出發',
      detail: '前一天抵達較晚，早上保留彈性時間。',
    },
    {
      time: '11:00',
      title: '午餐：鹿兒島拉麵 豚とろ',
      detail: '先吃午餐再開始市區景點。',
    },
    {
      time: '午後',
      title: '仙巖園',
      detail: '鹿兒島代表景點，可安排庭園散步與拍照。',
    },
    {
      time: '傍晚',
      title: '城山景觀',
      detail: '看鹿兒島市區與櫻島方向的景色。',
    },
    {
      time: '晚間',
      title: '泡溫泉、天文館晚餐',
      detail: '溫泉約 3500/人；晚餐安排在天文館周邊。',
    },
  ],
  infoCards: [
    { label: '午餐', value: '鹿兒島拉麵 豚とろ' },
    { label: '費用', value: '溫泉約 3500/人' },
    { label: '晚餐區域', value: '天文館' },
  ],
  note: '這天以鹿兒島市區為主，行程可以依天氣調整仙巖園和城山景觀的順序。',
}

function Day106() {
  return <DayLayout day={day} />
}

Day106.day = day

export default Day106
