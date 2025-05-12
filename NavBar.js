// Write your code here.
import './index.css'

const NavBar = props => {
  const {emojiClickCount, totalCount, isGameOn} = props
  return (
    <nav className="navbar">
      <div className="logo-and-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="navbar-game-logo"
          alt="emoji logo"
        />
        <h1 className="navbar-heading">Emoji Game</h1>
      </div>

      {isGameOn && (
        <div className="navbar-scores-container">
          <p className="navbar-scores-styling">Score: {emojiClickCount}</p>
          <p className="navbar-scores-styling">Top Score: {totalCount}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
