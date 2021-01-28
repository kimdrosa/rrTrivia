import React, {createContext } from "react";
import {auth, generateUserDocument} from '../firebase_config.js';

export const UserContext = createContext({ user: null });
class UserProvider extends React.Component {
  state = {
    user: null
  };


    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
          const user = await generateUserDocument(userAuth);
          this.setState({ user });
        });
      };
 
  render() {
      const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}


export default UserProvider;