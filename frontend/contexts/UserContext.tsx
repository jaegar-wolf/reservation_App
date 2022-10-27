import React from 'react';
import { getUser, UpdateUser } from '../services/userService';

export type User = {
  user_id:number,
  firstname:string,
  lastname:string,
  phone:string,
  email:string,
}
// Declaring the state object globally.
const initialUserState = {
  token:localStorage.getItem("token"),
  user:{
    user_id:0,
    firstname:sessionStorage.getItem("firstname"),
    lastname:sessionStorage.getItem("lastname"),
    phone:sessionStorage.getItem("phone"),
    email:sessionStorage.getItem("email"),
  }
};

const userContextWrapper = (component?: React.Component) => ({
  ...initialUserState,
  setTokens: (token: string) => {
    initialUserState.token = token;
    localStorage.setItem("token", token)
    component?.setState({ context: userContextWrapper(component) });
  },
  removeTokens: () => {
    initialUserState.token = "";
    localStorage.removeItem("token")
    component?.setState({ context: userContextWrapper(component) });
  },
  setUser: (user:User) => {
    initialUserState.user = user;
    sessionStorage.setItem("firstname", user.firstname)
    sessionStorage.setItem("lastname", user.lastname)
    sessionStorage.setItem("phone", user.phone)
    sessionStorage.setItem("email", user.email)
    component?.setState({ context: userContextWrapper(component) });
  },
  removeUser: () => {
    initialUserState.user = {
      user_id:0,
      firstname:"",
      lastname:"",
      phone:"",
      email:"",
    }
    sessionStorage.removeItem("firstname")
    sessionStorage.removeItem("lastname")
    sessionStorage.removeItem("phone")
    sessionStorage.removeItem("email")
    component?.setState({ context: userContextWrapper(component) });
  }
});

type Context = ReturnType<typeof userContextWrapper>;

export const UserContext = React.createContext<Context>(userContextWrapper());

interface State {
  context: Context;
}

export class UserContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {
    context: userContextWrapper(this),
  };

  render() {
    return (
      <UserContext.Provider value={this.state.context}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}