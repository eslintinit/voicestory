import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Container = styled.form`
  margin-right: 8px;
`

export const EditInput = styled(TextareaAutosize)`
  font-weight: 400;
  font-size: 15px;
  overflow: hidden;
  color: ${(props) => props.theme.chatText};
  line-height: 22px;
  resize: none;
  min-height: 18px;
  background: ${(props) => props.theme.editInputBG};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.editInputBorderColor};
  padding: 9px 9px 7px;
  box-sizing: border-box;

  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
`
