import styled from 'styled-components'

// &.unreaded {
//   background: #e7e7e7;
// }
export const Container = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 15px;
  transition: 0.1s background;

  ${(props) => props.editing && `background: #f8f8f8;`}
  background: ${(props) =>
    props.show ? props.theme.notificationBGHover : 'transparent'};
  .Message__link {
    color: #0066cc;
  }
  ${(props) =>
    props.isFirstMessage &&
    `
    margin-bottom: -1px;
  `}
`

export const Body = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${(props) => props.theme.chatText};
  line-height: 150%;
  max-width: 700px;
  ${(props) =>
    !props.child &&
    `
    margin-top: 1px;
    margin-bottom: -2px;
  `}
`
