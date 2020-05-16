import styled from 'styled-components'
import actionIcon from 'public/icons/action.svg'

const ActionIcon = styled.svg.attrs({
  className: 'vs-action-icon',
})`
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-left: 8px;
  padding: 7px 10px;
  border: solid 1px ${(props) => props.theme.messageActionBorder};
  border-radius: 5px;
  margin-top: -34px;
  background-color: ${(props) => props.theme.messageActionBG};
  fill: ${(props) => (props.active ? '#69a9ff' : props.theme.iconColor)};

`

export default ({ onClick, active, style }) => (
  <ActionIcon onClick={onClick} active={active} style={style || {}}>
    <use xlinkHref={`${actionIcon}#icon-action`} />
  </ActionIcon>
)
