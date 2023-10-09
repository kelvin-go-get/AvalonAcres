import React from 'react'
import { Avatar, Menu} from '@mantine/core'

const ProfileMenu = ({user, logout}) => {
  return (
    <Menu>
       <Menu.Target>
        <Avatar src={user?.picture} alt='user image' radius={'50%'}/>
      </Menu.Target> 

      <Menu.Dropdown trigger="hover" openDelay={100} closeDelay={400} zindex={1}>
        <Menu.Item>
          Favorites
        </Menu.Item>
        <Menu.Item>
          Bookings
        </Menu.Item>
        <Menu.Item>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu