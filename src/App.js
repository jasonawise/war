import useScoreCounter from './hooks/useScoreCounter'
import './App.css'
import { counterReducer, roundReducer } from './reducers'
import useRoundCounter from './hooks/useRoundCounter'
import { deckOfCards } from './utlis/deck'
import { shuffleCards } from './utlis/shuffle'

function App() {
  const [score, dispatchScore] = useScoreCounter(counterReducer, 0)
  const [round, dispatchRound] = useRoundCounter(roundReducer, 1)
  const deck = deckOfCards()
  // need to shuffle the deck
  // eslint-disable-next-line no-console
  console.log(shuffleCards(deck))
  const handleButtonClick = () => {
    dispatchRound({ type: 'next' })
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <button type="button" onClick={handleButtonClick}>
        Go to War!
      </button>
      <p> The current round is: {round}</p>
    </div>
  )
}

export default App
