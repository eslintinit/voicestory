import * as S from './Shortcut.styled'

const ShortcutsWindow = ({ shortcut, index }) => (
  <S.Shortcut index={index}>
    {/*
    <S.ShortcutNumber>1</S.ShortcutNumber>
    */}
    <S.ShortcutLabel>{shortcut.label}</S.ShortcutLabel>
    {/*
    <S.ShortcutDescription>Description</S.ShortcutDescription>
    */}
    <S.ShortcutKeys>
      {shortcut.keys.map((key) => {
        // If key is an array - it means there are alternative shortcuts
        if (typeof key === 'object') {
          return (
            <>
              {key.map((keyOption) => {
                return <S.ShortcutKey>{keyOption}</S.ShortcutKey>
              })}
            </>
          )
        }

        return <S.ShortcutKey>{key}</S.ShortcutKey>
      })}
    </S.ShortcutKeys>
  </S.Shortcut>
)

export default ShortcutsWindow
