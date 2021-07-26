import React from "react";
import { AuthContext } from "./AuthContext";
import firebase from "firebase/app";
import { auth } from "../firebaseConfig";

/* 
   whenever we sign in, create an account, or sign out it will set
   the state of our user accordingly. It will either set the state
   to be the logged in user or null when no user is signed in.
*/

// React.FC because typescript is not going to be able to infer the
// type of AuthProvider on it’s own
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<firebase.User | null>(null);

  // creating a subscription to firebase which will feed us back
  // information whenever the state of the user changes.

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
