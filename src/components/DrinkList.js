  import React from 'react'
  
  export default function DrinkList({drinks}) {

    return (
        <div>
        {drinks.map((drink) => (
          <div key={drink.id} style={{color:'white'}}>{drink.drink_name}</div>
        ))}
      </div>
    )
  }
  