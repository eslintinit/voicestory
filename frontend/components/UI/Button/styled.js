import styled from 'styled-components'

export const Button = styled.button.attrs({
  type: (props) => props.type || 'button',
  name: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 20px;
  transition: 0.2s;
  height: 37px;
  line-height: 100%;
  box-sizing: border-box;
  padding-bottom: 1px;
  :last-child {
    margin-left: 8px;
  }
  ${(props) =>
    props.compact &&
    `
    font-size: 13px;
    padding: 0px 12px;
    height: 31px;
  `}
`

export const ButtonSubtle = styled(Button)`
  border: ${(props) => props.theme.buttonSubtleBorder};
  color: ${(props) => props.theme.chatText};
  background: ${(props) => props.theme.buttonSubtleBG};
  :hover {
    background: ${(props) => props.theme.buttonSubtleBGHover};
  }
  :active {
    background: ${(props) => props.theme.buttonSubtleBGActive};
  }
`

export const ButtonPrimary = styled(Button).attrs({
  type: (props) => props.type || 'button',
  name: 'button',
})`
  color: #fff;
  background-color: #69a9ff;
  border: 1px solid #69a9ff;
  :hover {
    border: 1px solid #69a9ff;
    background: none;
    color: #69a9ff;
  }
  :active {
    transform: translateY(-2px);
    transition: 0.1s;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.7 !important;
    background: #5296f1;
    cursor: progress;
  `}
`

export const ButtonDanger = styled(Button).attrs({
  type: (props) => props.type || 'button',
  name: 'button',
})`
  border: 1px solid #ea3363;
  background: #ea3363;
  color: white;
  :hover {
    border-color: #ea3363;
    color: #ea3363;
    background: none;
  }
`

export const ButtonOutline = styled(Button)`
  color: ${(props) => props.theme.chatAuthor};
  border: 1px solid ${(props) => props.theme.buttonOutlineBorder};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  :hover {
    background: ${(props) => props.theme.buttonOutlineBGHover};
  }
  :active {
    background: ${(props) => props.theme.buttonOutlineBGActive};
  }
`
