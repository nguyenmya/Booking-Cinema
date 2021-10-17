import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    console.log("isPrivate", isPrivate);

    const { userLogin } = useSelector((state) => state.userLoginReducer);

    // const storageUserLogin = localStorage.getItem("userLogin", userLogin);
    // console.log(storageUserLogin, "storageUserLogin");

    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );
    if (isPrivate) {
      if (userLogin) {
        return content;
      } else {
      
        return <Redirect to="/Login" />;
      }
    }
    return content;
  };
};

export default withLayout;
