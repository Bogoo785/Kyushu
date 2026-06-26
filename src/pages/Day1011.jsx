import DayLayout from './DayLayout'

const day = {
  id: 'date-10-11',
  day: 'Day 7',
  date: '10/11',
  title: '福岡市區散策',
  route: '福岡市區',
  mood: '城市日',
  items: ['櫛田神社', '大濠公園', '午餐', '天神地下街', '晚餐：牛腸鍋或水炊雞'],
  note: '市區日可以把購物、咖啡與晚餐名店穿插安排。',
}

function Day1011() {
  return <DayLayout day={day} />
}

Day1011.day = day

export default Day1011
