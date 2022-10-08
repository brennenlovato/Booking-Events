import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LocationContext = React.createContext();

export const LocationConsumer = LocationContext.Consumer;

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllLocations = () => {
    axios.get('/api/locations')
      .then(res => setLocations(res.data))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addLocation = (location) => {
    axios.post('/api/locations', { location })
      .then(res => setLocations([...locations, res.data]))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateLocation =(id, location) => {
    axios.put(`/api/locations/${id}`, { location })
      .then( res => {
        const newUpdatedLocations = locations.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setLocations(newUpdatedLocations)
        navigate('/locations')
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteLocation = (id) => {
    axios.delete(`/api/locations/${id}`)
      .then(res => {
        setLocations(locations.filter(l => l.id !== id))
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <LocationContext.Provider value={{
      locations,
      errors,
      setErrors,
      getAllLocations,
      addLocation,
      updateLocation,
      deleteLocation,
    }}>
      { children }
    </LocationContext.Provider>
  )
}

export default LocationProvider