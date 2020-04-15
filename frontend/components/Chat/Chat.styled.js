import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 42px);
  display: flex;
  background: ${(props) => props.theme.chatBG};

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  outline: none;
  overflow: hidden;
`

export const ZoomImage = createGlobalStyle`
.ImageIcon--zoom {
  object-fit: cover;
  width: auto !important;
  max-width: 8%;
}
.AttachmentImage--zoom {
  object-fit: cover;
}
`
