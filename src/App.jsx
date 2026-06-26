import { useEffect } from 'react'
import heroImg from './assets/kyushu-hero.png'
import Day105 from './pages/Day105'
import Day106 from './pages/Day106'
import Day107 from './pages/Day107'
import Day108 from './pages/Day108'
import Day109 from './pages/Day109'
import Day1010 from './pages/Day1010'
import Day1011 from './pages/Day1011'
import Day1012 from './pages/Day1012'
import Day1013 from './pages/Day1013'
import './App.css'

const dayComponents = [Day105, Day106, Day107, Day108, Day109, Day1010, Day1011, Day1012, Day1013]
const itineraryPages = dayComponents.map((Component) => ({ ...Component.day, Component }))

function App() {
  const params = new URLSearchParams(window.location.search)
  const selectedDate = params.get('day')
  const selectedPage = itineraryPages.find((item) => item.date === selectedDate)

  useEffect(() => {
    document.title = selectedPage
      ? `${selectedPage.date}｜${selectedPage.title}｜福岡行程`
      : '福岡・鹿兒島・霧島行程手冊'
  }, [selectedPage])

  if (selectedPage) {
    return <selectedPage.Component />
  }

  return (
    <main>
      <section className="frontPage" id="cover">
        <img src={heroImg} alt="九州旅行風景封面" className="coverImage" />
        <div className="coverOverlay" />

        <div className="frontContent">
          <div className="coverCopy">
            <p className="eyebrow">KYUSHU TRIP 2026</p>
            <h1>福岡・鹿兒島・霧島行程手冊</h1>
            <p className="subtitle">10/5 - 10/13｜高雄 ⇄ 福岡</p>
          </div>

          <nav className="tocPanel" aria-label="行程目錄">
            <div className="tocHeader">
              <p className="sectionKicker">CONTENTS</p>
              <h2>目錄</h2>
            </div>
            <div className="dayNav">
              {itineraryPages.map((item) => (
                <a
                  href={`?day=${encodeURIComponent(item.date)}`}
                  target="_blank"
                  rel="noreferrer"
                  title={`${item.date}｜${item.title}`}
                  key={item.date}
                >
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
