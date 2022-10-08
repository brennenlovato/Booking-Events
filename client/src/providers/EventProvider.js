import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EventContext = React.createContext();

export const EventConsumer = EventContext.Consumer;

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllEvents = () => {
    axios.get('/api/events')
      .then(res => setEvents(res.data))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addEvent = (event) => {
    axios.post('/api/events', { event })
      .then(res => setEvents([...events, res.data]))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateEvent =(id, event) => {
    axios.put(`/api/events/${id}`, { event })
      .then( res => {
        const newUpdatedEvents = events.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setEvents(newUpdatedEvents)
        navigate('/events')
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteEvent = (id) => {
    axios.delete(`/api/events/${id}`)
      .then(res => {
        setEvents(events.filter(e => e.id !== id))
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <EventContext.Provider value={{
      events,
      errors,
      setErrors,
      getAllEvents
      addEvent,
      updateEvent,
      deleteEvent,
    }}>
      { children }
    </EventContext.Provider>
  )
}

export default EventProvider