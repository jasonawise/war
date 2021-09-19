import React from 'react'

function useScoreCounter(reducer, initialState) {
  const [state, setState] = React.useState(initialState)

  function dispatch(action) {
    const newScore = reducer(state, action)
    setState(newScore)
  }

  return [state, dispatch]
}

export default useScoreCounter
