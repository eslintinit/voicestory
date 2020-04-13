import Chat from 'components/Chat/Chat'

export default () => <Chat />
// import { useRouter } from 'next/router'
// import { COMPANY_NAME } from 'utils/config'

// export default () => {
//   const { push } = useRouter()
//   return (
//     <div
//       role="button"
//       onClick={() =>
//         push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
//           shallow: true,
//         })
//       }
//     >
//       login
//     </div>
//   )
// }
