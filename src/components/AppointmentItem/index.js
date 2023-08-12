import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, changeStar} = props
  const {title, id, date, isFavorite} = appointmentDetails

  const starImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onChangeStar = () => {
    changeStar(id)
  }

  return (
    <li>
      <div className="list-container">
        <div>
          <h1>{title}</h1>
          <p>Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
        </div>
        <button
          type="button"
          onClick={onChangeStar}
          className="star"
          data-testid="star"
        >
          <img src={starImg} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
