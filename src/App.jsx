import { useEffect } from 'react'
import heroImg from './assets/kyushu-hero.png'
import DayLayout from './pages/DayLayout'
import { itinerary } from './data/itinerary'
import './App.css'

function App() {
  const params = new URLSearchParams(window.location.search)
  const selectedDate = params.get('day')
  const selectedDay = itinerary.find((item) => item.date === selectedDate)

  useEffect(() => {
    document.title = selectedDay
      ? `${selectedDay.date}｜${selectedDay.title}｜九州旅行`
      : '九州南北縱走｜鹿兒島・福岡 9 日旅行'
  }, [selectedDay])

  if (selectedDay) return <DayLayout day={selectedDay} />

  return (
    <main>
      <section className="frontPage" id="cover">
        <img src={heroImg} alt="九州山海旅行風景" className="coverImage" />
        <div className="coverOverlay" />
        <div className="frontContent">
          <div className="coverCopy">
            <p className="eyebrow">KYUSHU TRIP 2026</p>
            <h1>九州南北縱走</h1>
            <p className="subtitle">10/5－10/13｜鹿兒島、指宿、櫻島、霧島、福岡</p>
          </div>
          <nav className="tocPanel" aria-label="每日行程目錄">
            <div className="tocHeader">
              <div>
                <p className="sectionKicker">CONTENTS</p>
                <h2>每日行程</h2>
              </div>
              <span className="tripLength">9 DAYS</span>
            </div>
            <div className="dayNav">
              {itinerary.map((item) => (
                <a href={`?day=${encodeURIComponent(item.date)}`} title={`${item.date}｜${item.title}`} key={item.date}>
                  <span>{item.date}</span>
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

export default App
