import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, changeStar, isActive} = props
  const {title, id, date, isFavorite} = appointmentDetails

  const starImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onChangeStar = () => {
    changeStar(id)
  }

  return (
    <li className="list-container">
      {isActive ? (
        <div>
          <div>
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
          <button type="button" onClick={onChangeStar} className="star">
            <img src={starImg} alt="star" />
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
          <button type="button" onClick={onChangeStar} className="star">
            <img src={starImg} alt="star" />
          </button>
        </div>
      )}
    </li>
  )
}

export default AppointmentItem
