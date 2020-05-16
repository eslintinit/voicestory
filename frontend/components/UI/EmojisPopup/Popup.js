import { useEffect, useState } from 'react'
import Checkbox from 'components/UI/Checkbox'
import * as S from './Popup.styled'
import emojis from 'utils/emojis'
import punycode from 'punycode'

const checkImageExists = (imageUrl, callBack) => {
  let imageData = new Image();
  imageData.onload = function() {
  callBack(true);
  };
  imageData.onerror = function() {
  callBack(false);
  };
  imageData.src = imageUrl;
}
  

  
const charToCode = char => {
  var points = punycode.ucs2.decode(char)
  return points.map(p => p.toString(16).padStart(4, "0")).join("-")
}

export default ({ setBody, body, opened, close, items = [], style = {} }) => {

  useEffect(() => {
    const listener = document.body.addEventListener('click', (event) => {
      const popupContainer = event.target.closest('.vs--emoji-popup')
      const iconContainer = event.target.closest('.vs-emoji-icon')
      if (!popupContainer && !iconContainer) {
        close()
      }
    })
    return () => document.body.removeEventListener('click', listener)
  }, [])

  let emojis2 = emojis.filter(e => e.group === 'smileys-emotion');
  const [currentEmoji, setCurrentEmoji] = useState(emojis2[0])

  const selectEmoji = (emoji) => {
    setBody(`${body}${emoji.character.replace('\\u', '0x')}`)
    close()
  }
  // console.log(emojis2);
  return (
    <S.Container active={opened} className="vs--emoji-popup" style={style}>
      <S.ListPanel>
        <S.List>
          {emojis2.map((emoji) => {
            return (
              <S.Item onClick={() => selectEmoji(emoji)} onMouseEnter={() => setCurrentEmoji(emoji)} key={emoji.slug}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {/* {checkImageExists(`http://localhost:3000/images/emojis/${charToCode(emoji.character.replace('\\u', '0x'))}.png`, function(existsImage) {
                    if(existsImage == true) {
                      return (
                        <S.Emoji src={`/images/emojis/${emoji.codePoint.split(' ')[0].toLowerCase()}.png`} /> 
                      )
                    }
                  })} */}
                  {emoji.character.replace('\\u', '0x')}
                </span>
              </S.Item>
            )
          })}
        </S.List>
      </S.ListPanel>

      {currentEmoji !== null && 
      <>
        <S.Separator />
        <S.DisplayPanel>
          <S.CurrentEmoji>{currentEmoji.character.replace('\\u', '0x')}</S.CurrentEmoji>
          <S.CurrentEmojiTitle>{currentEmoji.unicodeName.charAt(0).toUpperCase() + currentEmoji.unicodeName.slice(1)}</S.CurrentEmojiTitle>
          <S.CurrentEmojiSlug>:{currentEmoji.slug}:</S.CurrentEmojiSlug>
        </S.DisplayPanel>
      </>
      }
    </S.Container>
  )
}
