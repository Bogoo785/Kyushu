import { useEffect } from 'react'
import heroImg from './assets/kyushu-hero.png'
import DayLayout from './pages/DayLayout'
import { itinerary } from './data/itinerary'
import './App.css'

function App() {
  useEffect(() => {
    document.title = '九州南北縱走｜鹿兒島・福岡 9 日旅行'
    const url = new URL(window.location.href)
    const linkedDay = itinerary.find((item) => item.date === url.searchParams.get('day'))
    if (linkedDay && !url.hash) {
      url.searchParams.delete('day')
      url.hash = linkedDay.id
      window.history.replaceState(null, '', url)
    }
    const target = document.getElementById(url.hash.slice(1))
    if (target) target.scrollIntoView()
  }, [])

  return (
    <main>
      <nav className="dateNav" aria-label="日期快速導覽">
        <a className="dateNavHome" href="#cover">行程總覽</a>
        <div className="dateNavDates">
          {itinerary.map((item) => (
            <a href={`#${item.id}`} title={`${item.date}｜${item.title}`} key={item.id}>
              {item.date}
            </a>
          ))}
        </div>
      </nav>
      <section className="frontPage" id="cover">
        <img src={heroImg} alt="九州山海旅行風景" className="coverImage" />
        <div className="coverOverlay" />
        <div className="frontContent">
          <div className="coverCopy">
            <p className="eyebrow">KYUSHU TRIP 2026</p>
            <h1>九州南北縱走</h1>
            <p className="subtitle">10/5－10/13｜鹿兒島、指宿、櫻島、霧島、福岡</p>
            <div className="pdfResource">
              <div>
                <strong>福岡細流</strong>
                <p>行程文件 · PDF</p>
              </div>
              <div className="pdfActions">
                <a href={`${import.meta.env.BASE_URL}documents/fukuoka-itinerary.pdf`} target="_blank" rel="noopener noreferrer">開啟 PDF ↗</a>
                <a href={`${import.meta.env.BASE_URL}documents/fukuoka-itinerary.pdf`} download="福岡細流.pdf">下載</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="days">
        {itinerary.map((day) => <DayLayout day={day} key={day.id} />)}
      </div>
    </main>
  )
}

export default App
