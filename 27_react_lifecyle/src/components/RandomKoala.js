import React, { Component } from 'react'

const RandomKoala = ({koala}) => {

  return (
    <div className="app-children">
      <img src={koala.image_url} alt=''/>
    </div>
  )
}

export default RandomKoala