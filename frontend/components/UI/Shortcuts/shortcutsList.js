const ENTER = '↩'
const META = '⌘'
const SHIFT = '⇧'
const CTRL = '⌃'
const ALT = '⌥'
const BACKSPACE = '⌫'
const ESCAPE = '⎋'

const ARROW_RIGHT = '→'
const ARROW_LEFT = '←'
const ARROW_UP = '↑'
const ARROW_DOWN = '↓'

const shortcuts = [
  {
    name: 'Essential',
    shortcuts: [
      {
        label: 'Open widget',
        description: 'Open Voicestory chat',
        keys: [ENTER, ENTER],
      },
      {
        label: 'Close widget',
        description: 'Close Voicestory chat',
        keys: [ESCAPE, ESCAPE],
      },
      {
        label: 'Show shortcuts',
        description: 'Show available keyboard shortcuts',
        keys: [META, '?'],
      },
      {
        label: 'Focus',
        description: 'Focus input',
        keys: [ENTER],
      },
      {
        label: 'Back',
        description: 'Go back',
        keys: [ESCAPE],
      },
    ],
  },
  {
    name: 'Communities',
    shortcuts: [
      {
        label: 'Browse communities',
        description: 'Browser available communities',
        keys: [SHIFT, '+'],
      },
      {
        label: 'Start community',
        description: 'Start a new community',
        keys: [SHIFT, '+'],
      },
      {
        label: 'Next community',
        description: 'Move to next community',
        keys: [ARROW_RIGHT],
      },
      {
        label: 'Previous community',
        description: 'Move to the previous community',
        keys: [ARROW_LEFT],
      },
    ],
  },
  {
    name: 'Chat',
    shortcuts: [
      {
        label: 'Move up',
        description: 'Description',
        keys: [['↑', 'K']],
      },
      {
        label: 'Move down',
        description: 'Description',
        keys: [['↓', 'J']],
      },
    ],
  },
  {
    name: 'Channels',
    shortcuts: [
      {
        label: 'Next channel',
        description: 'Move to next channel',
        keys: [SHIFT, ARROW_RIGHT],
      },
      {
        label: 'Previous channel',
        description: 'Move to the previous channel',
        keys: [SHIFT, ARROW_LEFT],
      },
      {
        label: 'New channel',
        description: 'Description',
        keys: [CTRL, 'N'],
      },
    ],
  },
  {
    name: 'Message',
    shortcuts: [
      {
        label: 'Edit',
        description: 'When selected',
        keys: ['E'],
      },
      {
        label: 'Delete',
        description: 'When selected',
        keys: [BACKSPACE],
      },
      {
        label: 'Share',
        description: 'When selected',
        keys: ['S'],
      },
      {
        label: 'React',
        description: 'When selected',
        keys: ['R'],
      },
    ],
  },
  {
    name: 'Input',
    shortcuts: [
      {
        label: 'Send message',
        description: 'description',
        keys: [ENTER],
      },
      {
        label: 'New line',
        description: 'description',
        keys: [SHIFT, ENTER],
      },
      {
        label: 'Add file',
        description: 'description',
        keys: [CTRL, 'A'],
      },
    ],
  },
  {
    name: 'Modal',
    shortcuts: [
      {
        label: 'Confirm action',
        description: 'description',
        keys: [ENTER],
      },
      {
        label: 'Close modal',
        description: 'description',
        keys: [ESCAPE],
      },
    ],
  },
]

export default shortcuts
