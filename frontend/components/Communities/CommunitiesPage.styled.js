import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background: ${(props) => props.theme.chatBG};
`

export const CommunitiesWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  justify-content: center;
`

export const Header = styled.div`
  height: 73px;
  padding: 12px 23px;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.chatHeaderBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.h3`
  color: ${(props) => props.theme.titleColor};
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
`

export const SearchInput = styled.input`
  width: 600px;
  padding: 0 10px 0 10px;
  display: block;
  font-weight: 400;
  font-size: 15px;
  line-height: 44px;
  border-radius: 6px;
  border: 1px solid #e0e1e4;
  visibility: ${(props) => (props.isSearch ? 'visible' : 'hidden')};
`

export const PlusIconWrapper = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${(props) => props.theme.iconColor};
  margin-left: 12px;
  :hover {
    opacity: 0.85;
  }
`
