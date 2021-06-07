import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState


  useEffect( () => {
    // console.log('Hey!')
  }, [])

  useEffect( () => {
    // console.log('El formState Cambio!')
  }, [formState])

  useEffect( () => {
    // console.log('El Email Cambio!')
  }, [email])

  const handleInputChange = ({target}) => {
    
    setFormState({
      ...formState,
      [target.name]:target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input 
          type="text"
          name="name" 
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text"
          name="email" 
          placeholder="Tu Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {
        (name == '123' ) && <Message />
      }

    </>
  )
}
