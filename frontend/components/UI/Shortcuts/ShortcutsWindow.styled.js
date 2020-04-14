import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.navbarContainerBG};
  position: relative;
`

export const CloseIconWrapper = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
`

export const Tabs = styled.div`
  display: flex;
  :before {
    content: '';
    flex: 1;
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #444;
    border-bottom-right-radius: 2px;
  }
  :after {
    content: '';
    flex: 1;
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #444;
    padding-left: 1px;
  }
`

export const Tab = styled.button`
  flex: 1;
  background: #202225;
  color: #d4d4d4;
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid #444;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  ${(props) =>
    props.active &&
    `
    border-bottom-color: #202225;
    border-right: 1px solid #444;
    border-left: 1px solid #444;
  `}
`

export const Label = styled.h2``

export const Body = styled.div`
  height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
`
