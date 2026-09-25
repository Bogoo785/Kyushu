function DayLayout({ day }) {
  return (
      <article className="dayPage" id={day.id} aria-labelledby={`${day.id}-title`}>
        <a className="backLink" href="#cover">↑ 返回目錄</a>
        <div className="dayHeader">
          <div>
            <p className="dayNumber">{day.day}</p>
            <h2 id={`${day.id}-title`}>{day.date}｜{day.title}</h2>
          </div>
          <span className="mood">{day.mood}</span>
        </div>
        <div className="routeLine">
          <span>Route</span>
          <strong>{day.route}</strong>
        </div>
        <div className="detailSchedule">
          {day.schedule.map((item) => (
            <section className="scheduleItem" key={`${item.time}-${item.title}`}>
              <span className="scheduleTime">{item.time}</span>
              <div>
                {item.group && <span className="scheduleGroup">{item.group}</span>}
                <h3>{item.title}</h3>
                {item.detail && <p>{item.detail}</p>}
              </div>
            </section>
          ))}
        </div>
        {day.infoCards?.length > 0 && (
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
            <span>行程備註</span>
            <p>{day.note}</p>
          </div>
          <div className="addLaterBox">
            <span>旅行提醒</span>
            <p>{day.reminder ?? '出發前再次確認交通班次、營業時間與預約狀態。'}</p>
          </div>
        </div>
      </article>
  )
}

export default DayLayout
