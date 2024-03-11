import React from "react";
import { Route } from "react-router-dom";
import { UserRole } from "../common-auth";

export interface MenuItem {
  label: string;
  icon: React.ReactElement;
  path: string;
  target: string;
  exact?: boolean;
  showInMenu?: boolean;
  subMenu?: MenuItem[];
  roles?: UserRole[];
  component: React.ReactElement | (() => React.ReactElement);
}

interface MainRouteProps {
  menuItems: Pick<MenuItem, "path" | "component" | "exact" | "subMenu">[];
}

export const MainRoute: React.FC<MainRouteProps> = ({ menuItems }): React.ReactElement => (
  <div>
    {menuItems.map((menuItem) => {
      if (menuItem.subMenu) {
        return menuItem.subMenu.map((menuItem) => (
          <Route key={menuItem.path} exact={menuItem.exact} path={menuItem.path}>
            {menuItem.component}
          </Route>
        ));
      }
      return (
        <Route key={menuItem.path} exact={menuItem.exact} path={menuItem.path}>
          {menuItem.component}
        </Route>
      );
    })}
  </div>
);
