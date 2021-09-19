import React from 'react'

function useRoundCounter(reducer, initialState) {
  const [state, setState] = React.useState(initialState)

  function dispatch(action) {
    const nextRound = reducer(state, action)
    setState(nextRound)
  }

  return [state, dispatch]
}

export default useRoundCounter
