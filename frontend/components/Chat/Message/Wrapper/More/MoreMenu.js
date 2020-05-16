import { useState } from 'react'
import { ActionIcon } from 'components/UI/Icons'
import MorePopup from './MorePopup/MorePopup'

export default ({ currentShowMorePopupMessageId, setCurrentShowMorePopupMessageId, toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, message }) => {
  const [showMorePopup, setShowMorePopup] = useState(false)

  if(currentShowMorePopupMessageId !== message.id && showMorePopup) {
    setShowMorePopup(false);
  }

  const touglePopup = () => {
    if(currentShowMorePopupMessageId === message.id && showMorePopup) {
      setCurrentShowMorePopupMessageId(null);
      setShowMorePopup(false);
    }
    else {
      setCurrentShowMorePopupMessageId(message.id);
      setShowMorePopup(true);
    }
  }

  return (
    <>
      <ActionIcon
        active={currentShowMorePopupMessageId === message.id}
        onClick={touglePopup}
      />
      <MorePopup toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} message={message} opened={showMorePopup} close={() => setCurrentShowMorePopupMessageId(null)} />
    </>
  )
}
