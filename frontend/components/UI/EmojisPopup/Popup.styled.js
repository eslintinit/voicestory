import styled from 'styled-components'

export const Container = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  bottom: 70px;
  right: 30px;
  width: 75%;
  background: ${(props) => props.theme.popupBG};
  box-shadow: 0px 5px 10px rgba(20, 46, 75, 0.2);
  border-radius: 8px;
  z-index: 1888;
`
export const ListPanel = styled.div`
  height: 100px;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const List = styled.ul`
  list-style: none;
  padding: 8px 0;
`
export const Item = styled.li`
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.chatText};
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  position: relative;
  float: left;
  width: 40px;
  text-align: center;
  :hover {
    background: ${(props) => props.theme.popupBorder};
  }
`

export const Emoji = styled.img`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.popupBG};

`

export const Separator = styled.hr`
  border-top: none;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${(props) => props.theme.popupBorder};
`

export const DisplayPanel = styled.div`
  height: 60px;
  width: 100%;
`

export const CurrentEmoji = styled.span`
  display: block;
  float: left;
  font-size: 40px;
  padding: 10px 10px 10px 30px;
  line-height: 50px;
`

export const CurrentEmojiTitle = styled.span`
  display: block;
  font-size: 15px;
  padding-top: 12px;
  color: ${(props) => props.theme.chatText};
`

export const CurrentEmojiSlug = styled.span`
  color: ${(props) => props.theme.chatText}8a;

`

export const Icon = styled.svg`
  height: 16px;
  width: 16px;
  fill: #989ba0;
  margin-right: 13px;
`
