import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { useEscapeToClose } from 'hooks'

import { UserContext } from 'context/UserContext'
import { LOGIN } from 'apis/User'

import closeSVG from 'public/icons/close.svg'
import arrowLeftSVG from 'public/icons/arrow-left.svg'
import twitterSVG from 'public/icons/twitter.svg'

import * as S from './Login.styled'

const Login = () => {
  const router = useRouter()
  useEscapeToClose(router.back)

  const { signin } = useContext(UserContext)

  const [login, { error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      signin(data.login.token)
    },
  })

  const onSuccessTwitter = (response) => {
    response.json().then((body) => {
      console.log(body)
      // eslint-disable-next-line prefer-destructuring
      const username = body.profile.username
      const fullname = body.profile.displayName
      const email = body.profile.emails[0].value

      login({
        variables: {
          username,
          fullname,
          email,
          social: JSON.stringify(body.profile),
        },
      })
    })
  }

  const onFailed = (err) => {
    // TODO: Sentry
    console.log(error)
    console.log(err)
  }

  const closeWidget = () =>
    window.parent.postMessage({ message: 'close-widget' }, '*')

  return (
    <S.Container>
      <S.CloseIcon onClick={closeWidget}>
        <use xlinkHref={`${closeSVG}#icon-close`} />
      </S.CloseIcon>
      <S.Content>
        <S.BackIcon onClick={() => router.back()}>
          <use xlinkHref={`${arrowLeftSVG}#icon-arrow-left`} />
        </S.BackIcon>
        <S.Text>
          You can log in via
          <br />
          twitter
        </S.Text>
        <TwitterLogin
          loginUrl={`${process.env.BACKEND_URL}/api/v1/auth/twitter`}
          requestTokenUrl={`${process.env.BACKEND_URL}/api/v1/auth/twitter/reverse`}
          onSuccess={onSuccessTwitter}
          onFailure={onFailed}
          style={{ padding: 0, borderRadius: 6 }}
        >
          <S.Button>
            <S.TwitterIcon>
              <use xlinkHref={`${twitterSVG}#icon-twitter`} />
            </S.TwitterIcon>
            Sign in with Twitter
          </S.Button>
        </TwitterLogin>
      </S.Content>

      {error && <S.Error>{error.graphQLErrors[0].message}</S.Error>}
    </S.Container>
  )
}

export default Login
