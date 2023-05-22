import { Outlet } from 'react-router-dom';
import Nav from './comp/Nav';
import SidebarNav from './comp/SidebarAndNav'

type Props = {}

const Professors = (props: Props) => {
  return (
    <>
    <SidebarNav>
    <Outlet />
    </SidebarNav>
  </>
  )
}

export default Professors