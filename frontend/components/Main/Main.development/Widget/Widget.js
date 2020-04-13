import * as S from './Widget.styled'

export default ({ opened, widgetUrl }) => (
  <S.WidgetIframe opened={opened} src={widgetUrl} />
)
