import React from 'react'

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            name='text'
            id='name'
            placeholder='Enter your name here'
            required
            value={data.name || ''}
            onChange={(e) =>updateFieldHandler('name',e.target.value)} />
        </div>

        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input 
            type="email"
            name='email'
            id='email'
            placeholder='Enter your e-mail here'
            required
            value={data.email || ''}
            onChange={(e) =>updateFieldHandler('email',e.target.value)} />
        </div>

    </div>
  )
}

export default UserForm