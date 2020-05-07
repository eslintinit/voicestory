import { useState } from 'react'
import { MoreIcon } from 'components/UI/Icons'
import MorePopup from './MorePopup/MorePopup'

export default ({ toggleUserBlock, toggleUserBlockFromChannel, toggleUserBlockFromCommunity, message }) => {
  const [showMorePopup, setShowMorePopup] = useState(false)

  return (
    <>
      <MoreIcon
        active={showMorePopup}
        onClick={() => setShowMorePopup(!showMorePopup)}
      />
      <MorePopup toggleUserBlock={toggleUserBlock} toggleUserBlockFromChannel={toggleUserBlockFromChannel} toggleUserBlockFromCommunity={toggleUserBlockFromCommunity} message={message} opened={showMorePopup} close={() => setShowMorePopup(false)} />
    </>
  )
}
