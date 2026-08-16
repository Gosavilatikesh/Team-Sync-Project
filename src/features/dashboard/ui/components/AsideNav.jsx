import React from 'react'
import NavigationTab from './NavigationTab'
import { ChartArea } from 'lucide-react'
import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'
import { adminNavigation, employeeNavigation } from '../../../../app/constants/navigations'

const AsideNav = () => {

  let { employee } = useSelector((store) => store.auth)

  let navigations = employee?.role === "admin" ? adminNavigation : employeeNavigation

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-semibold text-[#cab8f9]'>Team Sync</h1>
        <p className='text-mm text-(--text-muted)'>Enterprise Workspace</p>
      </div>
      <div className='flex flex-col gap-3'>
        {
          navigations.map((route) => {
            return (
              <NavigationTab path={route.path} Icon={route.icon} title={route.title} key={route.path}/>
            );
          })
        }
      </div>
    </div>
  )
}

export default AsideNav
