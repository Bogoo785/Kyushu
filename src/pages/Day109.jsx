import DayLayout from './DayLayout'

const day = {
  id: 'date-10-9',
  day: 'Day 5',
  date: '10/9',
  title: '霧島自然與神社',
  route: '鹿兒島 → 霧島 → 鹿兒島中央',
  mood: '山景日',
  items: ['10:00 出發', '11:30 霧島市場', '13:00 丸尾瀑布', '道の駅 霧島 神話の里公園', '霧島神宮', '回程鹿兒島中央還車'],
  schedule: [
    {
      time: '10:00',
      title: '出發',
      detail: '從鹿兒島出發前往霧島，先確認油量與山區天氣。',
    },
    {
      time: '11:30',
      title: '霧島市場',
      detail: '安排午前或午餐前後停留，作為霧島路線第一站。',
    },
    {
      time: '13:00',
      title: '丸尾瀑布',
      detail: '瀑布景點停留拍照，注意步道與天候狀況。',
    },
    {
      time: '午後',
      title: '道の駅 霧島 神話の里公園',
      detail: '視時間安排展望、休息與補給。',
    },
    {
      time: '午後',
      title: '霧島神宮',
      detail: '霧島代表神社，作為回程前主要景點。',
    },
    {
      time: '回程',
      title: '鹿兒島中央還車',
      detail: '預留加油、塞車與還車檢查時間。',
    },
  ],
  infoCards: [
    { label: '出發', value: '10:00' },
    { label: '瀑布', value: '13:00 丸尾瀑布' },
    { label: '還車', value: '鹿兒島中央' },
  ],
  note: '山區天氣變化較快，前一天可以再確認天候；回程還車時間建議保守估。',
}

function Day109() {
  return <DayLayout day={day} />
}

Day109.day = day

export default Day109
