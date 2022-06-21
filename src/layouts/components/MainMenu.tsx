import React from 'react'
import { Menu } from 'antd'
import { Link, matchPath, useLocation } from 'react-router-dom'

const { SubMenu } = Menu

export interface MainMenuItem {
  label: string
  icon: React.ReactElement
  path: string
  subMenu?: MainMenuItem[]
}

interface Props {
  items: MainMenuItem[]
  inlineCollapsed: boolean
}

export const MainMenu: React.FC<Props> = ({
  items,
  inlineCollapsed
}: Props): React.ReactElement => {
  const { pathname } = useLocation()
  const manageCookieIndex = items.findIndex(menuItem =>
    matchPath(pathname, { path: menuItem.path, strict: true })
  )
  return (
    <Menu
      defaultSelectedKeys={[`${manageCookieIndex}`]}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      inlineCollapsed={inlineCollapsed}
      mode="inline"
    >
      {items.map(({ label, path, subMenu, icon }, index) => {
        if (!subMenu) {
          return (
            <Menu.Item key={path} icon={icon}>
              <Link to={path}>{label}</Link>
            </Menu.Item>
          )
        }
          return (
            <SubMenu key={path} icon={icon} title={label}>
              {subMenu.map(menu => (
                <Menu.Item key={menu.path} icon={menu.icon}>
                  <Link to={menu.path}>{menu.label}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          )

      })}
    </Menu>
  )
}
