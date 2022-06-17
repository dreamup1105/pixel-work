import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        <span>Pixel</span><span>Work.io</span>
      </a>
      <ul className="mt-6">
        <li className="relative px-2 py-3"><button className="flex items-center h-8 w-4/5 rounded-full bg-slimgreen text-black mb-auto mt-auto text-white relative px-6 py-3">
          <Icon className="w-5 h-5 mr-4" aria-hidden="true" icon='FormsIcon' /><span className="text-white">Post Job</span></button></li>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-8 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-600 hover:text-white dark:hover:text-gray-200"
                activeClassName="text-white dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default SidebarContent
