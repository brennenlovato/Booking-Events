import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllNotes = () => {
    axios.get('/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addNote = (note) => {
    axios.post('/api/notes', { note })
      .then(res => setNotes([...notes, res.data]))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateNote =(id, note) => {
    axios.put(`/api/notes/${id}`, { note })
      .then( res => {
        const newUpdatedNotes = notes.map( n => {
          if (n.id == id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdatedNotes)
        navigate('/notes')
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
      .then(res => {
        setNotes(notes.filter(n => n.id !== id))
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <NoteContext.Provider value={{
      notes,
      errors,
      setErrors,
      getAllNotes,
      addNote,
      updateNote,
      deleteNote,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider