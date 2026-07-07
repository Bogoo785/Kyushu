function DayLayout({ day }) {
  const hasSchedule = Array.isArray(day.schedule) && day.schedule.length > 0

  return (
    <main>
      <article className="dayPage singleDayPage" id={day.id}>
        <a className="backLink" href="./">
          返回目錄
        </a>

        <div className="dayHeader">
          <div>
            <p className="dayNumber">{day.day}</p>
            <h2>
              {day.date}｜{day.title}
            </h2>
          </div>
          <span className="mood">{day.mood}</span>
        </div>

        <div className="routeLine">
          <span>Route</span>
          <strong>{day.route}</strong>
        </div>

        {day.flightDeal && (
          <section className="flightDeal" aria-label={day.flightDeal.label}>
            <div className="flightRows">
              {day.flightDeal.flights.map((flight) => (
                <div className="flightRow" key={`${flight.from}-${flight.to}-${flight.departure}`}>
                  <div className="airlineMark">
                    <span>{day.flightDeal.airline}</span>
                  </div>
                  <div className="flightTime">
                    <strong>{flight.departure}</strong>
                    <span>{flight.from}</span>
                  </div>
                  <div className="flightPath">
                    <span>{flight.duration}</span>
                    <div className="flightLine" aria-hidden="true">
                      <i />
                    </div>
                    <span>{flight.type}</span>
                  </div>
                  <div className="flightTime">
                    <strong>{flight.arrival}</strong>
                    <span>{flight.to}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flightPrice">
              <span>{day.flightDeal.resultText}</span>
              <strong>{day.flightDeal.price}</strong>
              <button type="button">{day.flightDeal.action}</button>
            </div>
          </section>
        )}

        {hasSchedule ? (
          <div className="detailSchedule">
            {day.schedule.map((item) => (
              <section className="scheduleItem" key={`${item.time}-${item.title}`}>
                <span className="scheduleTime">{item.time}</span>
                <div>
                  <h3>{item.title}</h3>
                  {item.detail && <p>{item.detail}</p>}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <ol className="timeline">
            {day.items.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}

        {day.infoCards && (
          <div className="infoGrid">
            {day.infoCards.map((card) => (
              <div className="infoCard" key={card.label}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        )}

        <div className="dayGrid">
          <div className="noteBox">
            <span>小提醒</span>
            <p>{day.note}</p>
          </div>
          <div className="addLaterBox">
            <span>之後可新增</span>
            <p>餐廳預約、交通票券、景點連結、預算、照片或備用方案。</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default DayLayout
