import { useEffect, useState, useContext } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from 'context/UserContext'
import { useRouter } from 'next/router'
import { useEscapeToClose, useKeyboardShortcut } from 'hooks'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import useSound from 'use-sound'
import dynamic from 'next/dynamic'
import { MentionsInput, Mention } from 'react-mentions'
import { isBlocked, isBlockedFromChannel, isBlockedFromCommunity } from 'utils/permission'

import useDarkMode from 'use-dark-mode'
import { themeDark, themeWhite } from 'styles/themes'
import Emoji from './Emoji'

import emojis from 'utils/emojis'

import { GET_CHANNELS } from 'apis/Channel'
import { SEND_MESSAGE } from 'apis/Message'
import { COMPANY_NAME } from 'utils/config'

import plusIcon from 'public/icons/plus.svg'
import * as S from './ChatInput.styled'

const DynamicTypingStatus = dynamic(
  () => import('./TypingStatus/TypingStatus'),
  { ssr: false },
)

const ChatInput = () => {
  const {
    query: { channel: channelUrl, community: communityUrl },
    push,
  } = useRouter()

  const [getChannels, { data: { channels = [] } = {}, loading }] = useLazyQuery(
    GET_CHANNELS
  )

  useEffect(() => {
    getChannels({ variables: { communityUrl } })
  }, [communityUrl])

  const { value: isDarkMode } = useDarkMode(false);
  const theme = isDarkMode ? themeDark : themeWhite;
  const defaultMentionStyle = {
    width: '100%',
    control: {
      width: "100%",
      fontSize: 15,
      fontWeight: 400,
      lineHeight: "26px",
      border: "none",
    },
  
    highlighter: {
      overflow: 'hidden',
    },
  
    input: {
      margin: 0,
      width: "100%",
    },
  
    '&singleLine': {
      control: {
        display: 'inline-block',
        width: "100%",
      },
  
      highlighter: {
        padding: 1,
        border: '2px inset transparent',
      },
  
      input: {
        padding: 1,
        width: "100%",
        color: theme.chatText,
        border: '2px inset',
      },
    },
  
    '&multiLine': {
      control: {
        width: "100%",
      },
  
      highlighter: {
        padding: 9,
      },
  
      input: {
        padding: 9,
        minHeight: "100%",
        color: theme.chatText,
        outline: 0,
        border: 0,
      },
    },
  
    suggestions: {
      list: {
        backgroundColor: theme.tabBG,
        border: '0px solid rgba(0,0,0,0.15)',
        fontSize: 15,
        maxHeight: 100,
        overflow: 'auto',
        position: 'absolute',
        bottom: "20px",
        borderRadius: "5px",
      },
  
      item: {
        padding: '5px 15px',
        borderBottom: '0px solid rgba(0,0,0,0.15)',
        color: theme.activeTabText,
        minWidth: '300px',
        '&focused': {
          backgroundColor: theme.tabBGHover,
        },
      },
    },
  };
  // console.log(theme.chatText);

  


  const [sendMessage] = useMutation(SEND_MESSAGE)

  useEscapeToClose(() => document.getElementById('vs-input').blur())

  useKeyboardShortcut(
    {
      Enter: () => document.getElementById('vs-input').focus(),
    },
    {
      modKey: null,
      // event: 'keydown',
    },
  )
  
  const [body, setBody] = useState('')
  const { user: loggedUser } = useContext(UserContext)

  // const [playSoundSendMessage] = useSound('/sounds/click_snap_lo.mp3')

  const onSendMessage = () => {
    if (!loggedUser) {
      push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
        shallow: true,
      })
    } else if (body !== '') {
      // playSoundSendMessage()
      let bodyFiltered = body;
      bodyFiltered = (bodyFiltered.split('~~~1').map(x => !x.includes('@') ? x : `${x.split('@')[0]}@${x.split('@')[1].split('~~~')[0]}` ).join(''))
      bodyFiltered = (bodyFiltered.split('~~~0').map(x => !x.includes('@') ? x : `${x.split('@')[0]}@${x.split('@')[1].split('~~~')[0]}` ).join(''))
      // let splitBody = body.split('~~~1');
      // if(splitBody.length > 1) {
      //   for (let i=0; i<splitBody.length; i++) {
      //     splitBody[i] = !splitBody[i].includes('@') ? splitBody[i] : `${splitBody[i].split('@')[0]}@${splitBody[i].split('@')[1].split('~~~')[0]}` 
      //   }
      // }
      sendMessage({
        variables: {
          body: bodyFiltered,
          communityUrl,
          channelUrl,
        },
      })
      setBody('')
    }
  }

  const onKeyDown = (e) => {
    // Sending message
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  const onChange = (e) => {
    setBody(e.target.value)
  }

  if (loading || !channels.length) {
    return <div />
  }

  const selectedChannel = channels.find((channel) => channel.url === channelUrl)
  const queryEmojis = async (query, callback) => {
    
    const results = emojis.filter(e => e.slug.includes(query)).slice(0, 50)
    callback(results.map(({ character }) => ({ id: character })))
  }
  // const queryEmojis = async (query, callback) => {
  //   const url = new URL('https://emoji.getdango.com/api/emoji')
  //   url.searchParams.append('q', query)
  //   const { results } = await fetch(url).then(res => res.json())
  //   callback(results.map(({ text }) => ({ id: text })))
  // }
  // const queryEmojis = async (query, callback) => {
  //   const url = new URL('https://emoji-api.com/emojis')
  //   url.searchParams.append('search', query)
  //   url.searchParams.append('access_key', "6a5aeee6e087d21c9ea05bebc146791cb60e3dc4")
  //   fetch(url).then(res => res.json())
  //     .then(({ results }) => {
  //       if(typeof results !== 'undefined') {
  //         callback(results.map(({ character }) => ({ id: character })))
  //       }
  //       else {
  //         callback([]);
  //       }          
  //     }).catch((err) => callback([]));
  // }
  const neverMatchingRegex = /($a)/

  if(isBlocked(loggedUser) || isBlockedFromChannel(loggedUser, channelUrl, communityUrl) || isBlockedFromCommunity(loggedUser, communityUrl)) {
    return <div />
  }

  return (
    <S.ChatInputWrapper>
      <S.AddButton>
        <S.PlusIcon>
          <use xlinkHref={`${plusIcon}#icon-plus`} />
        </S.PlusIcon>
      </S.AddButton>

      <S.Container>
        <S.InputWrapper>
          {!loading && 
          <MentionsInput id="vs-input" placeholder="What's happening?" onKeyDown={onKeyDown} value={body} onChange={onChange} style={defaultMentionStyle}>
            <Mention
              trigger="@"
              data={selectedChannel.community.members.map(m => ({ id: m.id, display: [m.fullname, m.image, m.username, (m.isOnline === true ? '1' : '0')].join('~~~') }))}
              // data={[]}
              displayTransform={(id, display) => `@${display.split('~~~')[0]}`}
              // onAdd={(id, display) => {
              //   return `@${display.split('~~~')[0]}`;
              //   console.log(document.getElementById('vs-input').value)
              // }}
              appendSpaceOnAdd={true}
              style={defaultMentionStyle}
              renderSuggestion={(
                suggestion,
                search,
                highlightedDisplay,
                index,
                focused
              ) => (
                <div className={`user ${focused ? 'focused' : ''}`}>
                  {/* {console.log(suggestion.display)} */}
                  <img style={{ width: "25px", height: "25px", display: "block", float: "left", marginTop: "-1px", borderRadius: "2px", marginRight: "5px" }} src={suggestion.display.split('~~~')[1]} />
                  {suggestion.display.split('~~~')[0]}
                  <span style={{ color: "#7d7d7d", marginLeft: "5px" }}>@{suggestion.display.split('~~~')[2]}</span>
                  <S.OnlineStatus online={suggestion.display.split('~~~')[3] === '1'}></S.OnlineStatus>
                </div>
              )}
    
            />
            <Mention
              trigger=":"
              markup="__id__"
              regex={neverMatchingRegex}
              data={queryEmojis}
              style={defaultMentionStyle}
            />
          </MentionsInput>
          }
          <Emoji body={body} setBody={setBody} />
          {/* <ContentEditable
            html={body}
            onChange={onChange}
            onPress={onKeyDown}
            autoFocus
            autoComplete="off"
          /> */}
          {/* <S.Input
            value={body}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus
            autoComplete="off"
          /> */}
        </S.InputWrapper>

        {loggedUser ? (
          body !== '' && (
            <S.SendButton onClick={onSendMessage}>Send</S.SendButton>
          )
        ) : (
          <S.SendButton
            style={{ padding: '0 16px', width: 'auto' }}
            onClick={() =>
              push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
                shallow: true,
              })
            }
          >
            Login
          </S.SendButton>
        )}
      </S.Container>

      {/*
      <DynamicTypingStatus />
      */}
    </S.ChatInputWrapper>
  )
}

export default ChatInput
