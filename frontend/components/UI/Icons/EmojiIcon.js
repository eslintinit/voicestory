import styled from 'styled-components'
import emojiIcon from 'public/icons/emoji.svg'

const EmojiIcon = styled.svg.attrs({
  className: 'vs-emoji-icon',
})`
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-left: 8px;
  margin-right: 20px;
  fill: ${(props) => (props.active ? '#69a9ff' : props.theme.iconColor)};
  :hover {
    opacity: 0.85;
  }
`

export default ({ onClick, active, style }) => (
  <EmojiIcon onClick={onClick} active={active} style={style || {}}>
    <use xlinkHref={`${emojiIcon}#icon-emoji`} />
  </EmojiIcon>
)
