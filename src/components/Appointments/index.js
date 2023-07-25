import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentsList = [
  {id: uuidv4(), title: '', date: '', isFavorite: false},
]

class Appointments extends Component {
  state = {
    title: '',
    date: '',
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
        return {...each.isFavorite, isFavorite: !each.isFavorite}
      }
      return each
    })
    this.setState({
      appointmentsList: filteredList,
    })
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
            <h1>Add Appointment</h1>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              onChange={this.onChangeTitle}
              className="title"
              value={title}
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              onChange={this.onChangeDate}
              className="date"
              value={date}
            />
            <div>
              <button
                type="button"
                onClick={this.onAddButton}
                className="button"
              >
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="appointment-image"
          />
          <div>
            <hr className="separator" />
            <div className="appointment-container">
              <div className="heading-container">
                <h1>Appointments</h1>
                <button type="button" className="starred-button">
                  Starred
                </button>
              </div>
              <ul>
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
    )
  }
}

export default Appointments
