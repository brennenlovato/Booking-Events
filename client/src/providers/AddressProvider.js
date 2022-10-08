import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddressContext = React.createContext();

export const AddressConsumer = AddressContext.Consumer;

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllAddresses = () => {
    axios.get('/api/addresses')
      .then(res => setAddresses(res.data))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addAddress = (address) => {
    axios.post('/api/addresses', { address })
      .then(res => setAddresses([...addresses, res.data]))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateAddress =(id, address) => {
    axios.put(`/api/addresses/${id}`, { address })
      .then( res => {
        const newUpdatedAddresses = addresses.map( a => {
          if (a.id == id) {
            return res.data
          }
          return a
        })
        setAddresses(newUpdatedAddresses)
        navigate('/addresses')
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteAddress = (id) => {
    axios.delete(`/api/addresses/${id}`)
      .then(res => {
        setAddresses(addresses.filter(a => a.id !== id))
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <AddressContext.Provider value={{
      addresses,
      errors,
      setErrors,
      getAllAddresses,
      addAddress,
      updateAddress,
      deleteAddress,
    }}>
      { children }
    </AddressContext.Provider>
  )
}

export default AddressProvider