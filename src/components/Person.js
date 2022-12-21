

import React from 'react'

const Person = ({firstName, lastName, email, img }) => {

  return (
    <div className='card'>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h4>{email}</h4>
      <img src={img} alt=""/>
   
    </div>
  )
}

export default Person
