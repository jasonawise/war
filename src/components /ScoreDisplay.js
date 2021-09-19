import React from 'react'

function ScoreDisplay({score, player}) {
  return (
    <div>
      <p>"${player} your score is ${score}"</p>
    </div>
  )
}

export default ScoreDisplay
