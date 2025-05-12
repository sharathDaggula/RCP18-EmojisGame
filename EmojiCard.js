// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmojiItem, onEmojiClick} = props
  const {emojiUrl, emojiName, id} = eachEmojiItem
  const handleEmojiClick = () => {
    onEmojiClick(id)
  }
  return (
    <li>
      <button
        type="button"
        className="emoji-card-container"
        onClick={handleEmojiClick}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image-styling" />
      </button>
    </li>
  )
}
export default EmojiCard
