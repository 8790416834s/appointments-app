import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    isActive: false,
    appointmentsList: initialAppointmentsList,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  changeStar = id => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.map(each => {
      if (each.id === id) {
        return {...each, isFavorite: !each.isFavorite}
      }
      return each
    })
    this.setState({
      appointmentsList: filteredList,
    })
  }

  onStarred = () => {
    const {appointmentsList, isActive} = this.state
    const starredList = appointmentsList.filter(
      each => each.isFavorite === true,
    )
    if (isActive === true) {
      this.setState(prevState => ({
        appointmentsList,
        isActive: !prevState.isActive,
      }))
    } else {
      this.setState(prevState => ({
        appointmentsList: starredList,
        isActive: !prevState.isActive,
      }))
    }
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {title, date, appointmentsList} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="input-container">
            <form className="form-container" onSubmit={this.onAddButton}>
              <h1>Add Appointment</h1>
              <label htmlFor="Title">TITLE</label>
              <input
                type="text"
                placeholder="Title"
                onChange={this.onChangeTitle}
                className="Title"
                value={title}
              />
              <label htmlFor="Date">DATE</label>
              <input
                type="date"
                onChange={this.onChangeDate}
                className="Date"
                value={date}
              />
              <div>
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-image"
            />
          </div>
          <div className="details-container">
            <div>
              <hr className="separator" />
              <div className="appointment-container">
                <div className="heading-container">
                  <h1>Appointments</h1>
                  <button
                    type="button"
                    className="starred-button"
                    onClick={this.onStarred}
                  >
                    Starred
                  </button>
                </div>
                <ul className="appointment-list">
                  {appointmentsList.map(each => (
                    <AppointmentItem
                      key={each.id}
                      appointmentDetails={each}
                      changeStar={this.changeStar}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
