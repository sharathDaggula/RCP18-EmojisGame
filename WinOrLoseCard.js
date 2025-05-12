// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {restartGame, emojiClickCount, allEmojisClicked} = props
  return (
    <div className="lose-card-container">
      <div className="lose-score-container">
        <h1 className="lose-heading">
          {allEmojisClicked ? 'You Won' : 'You Lose'}
        </h1>
        <div className="special-class">
          <p className="lose-description">
            {allEmojisClicked ? 'Best Score' : 'Score'}
          </p>
          <p className="lose-final-score">{emojiClickCount}/12</p>
          <button type="button" onClick={restartGame} className="lose-button">
            Play Again
          </button>
        </div>
      </div>
      <img
        src={
          allEmojisClicked
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
        className="lose-image"
      />
    </div>
  )
}

export default WinOrLoseCard
