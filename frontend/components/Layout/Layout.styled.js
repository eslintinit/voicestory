import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  background: ${(props) => props.theme.chatBG};
  width: 100%;
  flex-basis: 100%;
`

export const Layout = styled.div.attrs({
  id: 'vs-layout',
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.chatBG};
  font-family: 'Helvetica Neue';
`
