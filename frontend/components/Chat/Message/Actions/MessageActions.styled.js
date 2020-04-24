import styled from 'styled-components'

export const Actions = styled.div`
  position: absolute;
  right: 60px;
  top: -15px;
  z-index: 1;
  display: none;
`

export const Action = styled.button.attrs({
  type: 'button',
  name: 'button',
})`
  width: 34px;
  height: 30px;
  background: ${(props) => props.theme.messageActionBG};
  border: ${(props) => props.theme.messageActionBorder};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  position: relative;
  :hover {
    background: ${(props) => props.theme.messageActionBGHover};
  }
  :active {
    transform: translateY(-2px);
    transition: 0.1s;
  }
`

export const TooltipWrapper = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  display: none;
  ${Action}:hover & {
    display: block;
  }
`

export const DeleteIcon = styled.svg`
  width: 17px;
  height: 17px;
  fill: transparent;
  stroke: ${(props) => props.theme.iconColor};
  :hover {
    stroke: ${(props) => props.theme.PRIMARY};
  }
`

export const EditIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: ${(props) => props.theme.iconColor};
  :hover {
    stroke: ${(props) => props.theme.PRIMARY};
  }
`
