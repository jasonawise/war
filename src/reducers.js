export function counterReducer(state, action) {
  switch (action.type) {
    case 'win':
      return [parseInt(state) + 1]
    default:
      return state
  }
}

export function roundReducer(state, action) {
  switch (action.type) {
    case 'next':
      return [parseInt(state) + 1]
    default:
      return state
  }
}
