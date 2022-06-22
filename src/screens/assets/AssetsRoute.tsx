import React from "react";
import { Route, Switch } from "react-router";
import { Assets } from "./Assets";
import { AssetsRouteIn } from "./components/AssetsRouteIn";
interface Props {
  baseUrl: string;
}

export const AssetsRoute: React.FC<Props> = ({
  baseUrl,
}): React.ReactElement => {
  return (
    <>
      <Switch>
        <Route path={`${baseUrl}/detailasset/id:`}>
          <AssetsRouteIn baseUrl={baseUrl} />
        </Route>
        <Route path={`${baseUrl}`}>
          <Assets baseUrl={baseUrl} />
        </Route>
      </Switch>
    </>
  );
};
