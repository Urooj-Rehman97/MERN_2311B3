import React from 'react'

const Card = () => {
  return (
    <div class="ui raised link card">
    <div class="content">
      <div class="header">Cute Dog</div>
      <div class="meta">
        <span class="category">Animals</span>
      </div>
      <div class="description">
        <p></p>
      </div>
    </div>
    <div class="extra content">
      <div class="right floated author">
        <img class="ui avatar image" src="/images/avatar/small/matt.jpg" /> Matt
      </div>
    </div>
  </div>
  )
}

export default Card
