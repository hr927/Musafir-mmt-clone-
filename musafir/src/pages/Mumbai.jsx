import React from 'react'

const Mumbai = ({price,name,image}) => {
  return (
    <div >
        <div>
       price  <b data-testid="country-card-name">{price}</b>
        </div>
        <div>
name<b data-testid="country-card-population">{name}</b>
        </div>
        <img src={image} alt="" />
      </div>
  )
}

export default Mumbai


