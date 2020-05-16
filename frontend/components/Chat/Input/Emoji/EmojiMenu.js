import { useState } from 'react'
import { EmojiIcon } from 'components/UI/Icons'
import EmojiPopup from './EmojiPopup/EmojiPopup'

export default ({ setBody, body}) => {
  const [showEmojiPopup, setShowEmojiPopup] = useState(false)

  return (
    <>
      <EmojiIcon
        active={showEmojiPopup}
        onClick={() => setShowEmojiPopup(!showEmojiPopup)}
      />
      <EmojiPopup body={body} setBody={setBody} opened={showEmojiPopup} close={() => setShowEmojiPopup(false)} />
    </>
  )
}
