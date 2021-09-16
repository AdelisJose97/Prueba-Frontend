import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  let user = localStorage.getItem('nombre')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute