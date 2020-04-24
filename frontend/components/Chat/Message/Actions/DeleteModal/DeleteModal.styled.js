import styled from 'styled-components'

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  overflow: hidden;
`

export const Modal = styled.div`
  background-color: ${(props) => props.theme.popupBG};
  box-shadow: 0 20px 60px 0 rgba(6, 8, 37, 0.06);
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.popupBorder};
  max-width: 520px;
  height: min-content;
  padding: 24px;
  font-family: 'Helvetica Neue';
`

export const Header = styled.div``

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.chatAuthor};
  margin-bottom: 16px;
  text-align: start;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => props.theme.chatText};
  text-align: start;
`

export const MessagePreview = styled.div`
  background: ${(props) => props.theme.chatBG};
  padding-right: 50px;
  border: 1px solid rgba(29, 28, 29, 0.1);
  text-align: start;
  padding: 8px 0 12px;
  border-radius: 5px;
  margin: 24px 0;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`
