import styled from 'styled-components'
import Actions from './Actions'

export const Container = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 15px;

  :focus {
    background: ${(props) => props.theme.notificationBGHover};
    ${Actions} & {
      background: red !important
    }
  }

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
