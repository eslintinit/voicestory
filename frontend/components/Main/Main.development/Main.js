import { useState, useEffect } from 'react';
import useSound from 'use-sound';

import Landing from './Landing/Landing';
import Widget from './Widget/Widget';
import WidgetIcon from './WidgetIcon/WidgetIcon';

export default () => {
  const widgetUrl = `${process.env.FRONTEND_URL}/vs/general/general`;
  const [widgetOpened, setWidgetOpened] = useState(true);

  const [playSoundWidgetOpen] = useSound('/sounds/card_drop.mp3');

  const openWidget = () => {
    playSoundWidgetOpen();
    setWidgetOpened(true);
  };

  useEffect(() => {
    if (document) {
      document.onkeyup = e => {
        if (e.key === 's') {
          playSoundWidgetOpen();
          setWidgetOpened(!widgetOpened);
        }
      };
    }
  }, []);

  useEffect(() => {
    const onClose = window.addEventListener(
      'message',
      event => {
        if (event.data.message === 'close-widget') {
          console.log('close');
          setWidgetOpened(false);
        }
      },
      false
    );
    return () => window.removeEventListener('message', onClose);
  }, []);

  return (
    <Landing>
      <WidgetIcon openWidget={openWidget} show={!widgetOpened} />
      <Widget widgetUrl={widgetUrl} show={widgetOpened} />
    </Landing>
  );
};
