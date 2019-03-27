import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { NavbarWithUser } from "./components/Navbar";
import { UserShowWithUserAndLakes } from "./components/UserShow";
import { UserEditWithUser } from "./components/UserEdit";

class App extends Component {
  render() {
    return (
      <>
        <div className="wallpaper"></div>
        <NavbarWithUser />
        <Switch>
          <Route
            exact 
            path="/user"
            component={UserShowWithUserAndLakes}
          />
          <Route
            exact 
            path="/user/edit"
            component={UserEditWithUser}
          />
        </Switch>
      </>
    );
  }
}

export default App;
