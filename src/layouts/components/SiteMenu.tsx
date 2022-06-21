import React from "react"
import {Menu} from "antd"
import {Link, matchPath, useLocation} from "react-router-dom"

interface MenuItem {
    label: string;
    target: string;
}

interface Props {
    items: MenuItem[]
}

export const SiteMenu: React.FC<Props> = ({items}: Props): React.ReactElement => {
    const {pathname} = useLocation()
    const manageCookieIndex = items.findIndex((menuItem) => matchPath(pathname, {path: menuItem.target, strict: true}))
    return (
        <Menu
            defaultSelectedKeys={[`${manageCookieIndex}`]}
            mode="horizontal"
            defaultOpenKeys={["sub1"]}
            selectedKeys={[pathname]}
            style={{
                borderRight: 0,
                background: "transparent",
            }}
        >
            {
                items.map(({label, target}, index) => (
                    <Menu.Item key={target} >
                        <Link to={target}>{label}</Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
}
