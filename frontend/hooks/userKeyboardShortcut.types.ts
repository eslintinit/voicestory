export enum ModKey {
  CtrlKey = 'ctrlKey',
  AltKey = 'altKey',
  ShiftKey = 'shiftKey',
  MetaKey = 'metaKey',
}

export enum EventType {
  Keypress = 'keypress',
  Keydown = 'keydown',
  Keyup = 'keyup',
}

export enum Attribute {
  Key = 'key',
  KeyCode = 'keyCode',
}

export interface Options {
  modKey: keyof typeof ModKey
  eventType: keyof typeof EventType
  attr: keyof typeof Attribute
}
