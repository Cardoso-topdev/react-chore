import React from 'react'
import { ROUTES } from '../routes/index'
import { Route, Switch } from 'react-router-dom'

const MainLayout = () =>
  <Switch>
    { ROUTES.map(route => <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
        key={route.path + route.default}
      />) }
  </Switch>

export default MainLayout
