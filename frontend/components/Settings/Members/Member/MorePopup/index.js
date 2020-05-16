import { useRouter } from 'next/router'
import { COMPANY_NAME } from 'utils/config'
import Popup from 'components/UI/Popup'
import { isOwner, canManageRole } from 'utils/permission'

export default ({ show, close, me, user, roles, toggleUserBlock, toggleUserRole }) => {
  const router = useRouter()
  let items = [];

  if(isOwner(me) || canManageRole(me)) {
    items = roles.map((role) => ({
      type: 'checkbox',
      label: role.title,
      active:
        user.roles.filter((userRole) => userRole.id === role.id).length === 1,
      onClick: () => {
        // console.log(user.roles);
        // console.log(user.roles.filter((userRole) => userRole.id === role.id));
        // alert(user.roles.length + role.id)
        if(user.roles.filter((userRole) => userRole.id === role.id).length === 0) {
          // alert('Activating Role, Current roles: ' + user.roles.length);
          if(user.roles.length) {
            alert('Only 1 role can be assigned to member at a time.')
            return false
          }
          else {
            toggleUserRole(user, role)
            return true
          }
        }
        else {
          // alert('Deactivating Role.')
          toggleUserRole(user, role)
          return true
        }
        
      },
    }))
  }
  
  if(isOwner(me)) {
    items.push({
      type: 'separator',
    })

    items.push({
      type: 'default',
      label: 'New role',
      onClick: () =>
        router.push(
          `/[company]/settings/roles/new`,
          `/${COMPANY_NAME()}/settings/roles/new`,
          {
            shallow: true,
          },
        ),
    })

    items.push({
      type: 'default',
      label: `${user.blocked === '1' ? 'Unblock' : 'Block'} ${user.fullname}`,
      onClick: () => {
        toggleUserBlock(user);
        // close();
      }
        // router.push(
        //   `/[company]/settings/roles/new`,
        //   `/${COMPANY_NAME()}/settings/roles/new`,
        //   {
        //     shallow: true,
        //   },
        // ),
    })
  }


  return (
    <Popup opened={show} close={close} items={items} style={{ right: 0 }} />
  )
}
