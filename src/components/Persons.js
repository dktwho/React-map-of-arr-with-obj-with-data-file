

import React from 'react'
import persons from '../data/persons'
import Person from './Person';

const Persons = () => {
  return (
    <div className='cards'>
          {persons.map((person) => {
      return <Person {...person}
          key={person.id}
          
      // key={person.id}
      // firstName={person.firstName}
      // lastName={person.lastName}
      // email={person.email}
      // img={person.img}

      />
    })}
    </div>

  )
}

export default Persons
