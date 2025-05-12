/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emojiClickCount: 0,
    totalCount: 0,
    clickedEmojiIds: [],
    isGameOn: true,
    allEmojisClicked: false,
  }

  onEmojiClick = emojiId => {
    const {clickedEmojiIds, emojiClickCount, totalCount} = this.state
    if (clickedEmojiIds.includes(emojiId)) {
      this.setState({
        isGameOn: false,
      })
    } else {
      const newScore = emojiClickCount + 1
      const newClickedEmojiIds = [...clickedEmojiIds, emojiId]
      const hasWon = newClickedEmojiIds.length === 12
      this.setState({
        emojiClickCount: newScore,
        clickedEmojiIds: newClickedEmojiIds,
        totalCount: newScore > totalCount ? newScore : totalCount,
        isGameOn: !hasWon,
        allEmojisClicked: hasWon,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartGame = () => {
    this.setState(prevState => {
      const newTopScore =
        prevState.emojiClickCount > prevState.totalCount
          ? prevState.emojiClickCount
          : prevState.totalCount
      return {
        emojiClickCount: 0,
        totalCount: newTopScore,
        clickedEmojiIds: [],
        isGameOn: true,
        allEmojisClicked: false,
      }
    })
  }

  render() {
    const {emojiClickCount, totalCount, isGameOn, allEmojisClicked} = this.state
    const shuffledList = this.shuffledEmojisList()
    return (
      <div className="emoji-game-bg-container">
        <NavBar
          emojiClickCount={emojiClickCount}
          totalCount={totalCount}
          allEmojisClicked={allEmojisClicked}
          isGameOn={isGameOn}
        />
        <div className="emojis-bg-container">
          {isGameOn ? (
            <ul className="emojis-container">
              {shuffledList.map(eachEmojiItem => (
                <EmojiCard
                  key={eachEmojiItem.id}
                  eachEmojiItem={eachEmojiItem}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              restartGame={this.restartGame}
              emojiClickCount={emojiClickCount}
              allEmojisClicked={allEmojisClicked}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
