import styled from 'styled-components'

export const Shortcut = styled.div`
  flex-basis: 30%;
  // :before {
  //   content: '${(props) => props.index + 1}';
  //   display: inline-block;
  //   text-align: center;
  //   border-radius: 9999px;
  //   width: 23px;
  //   height: 23px;
  //   line-height: 24px;
  //   font-size: 12px;
  //   margin-bottom: 10px;
  //   border: 1px solid #fcfcfc;
  //   color: #fcfcfc;
  //   box-sizing: border-box;
  // }
`

export const ShortcutNumber = styled.div``

export const ShortcutLabel = styled.h4`
  color: ${(props) => props.theme.chatAuthor};
  font-size: 14px;
  font-weight: 500;
`

export const ShortcutDescription = styled.p`
  color: ${(props) => props.theme.chatText};
`

export const ShortcutKeys = styled.div`
  margin-top: 10px;
  display: flex;
`

export const ShortcutKey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #18a0fb;
  color: #2c2c2c;
  border-radius: 4px;

  height: 36px;
  width: 36px;
  margin-right: 5px;
`
