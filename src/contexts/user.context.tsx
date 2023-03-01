import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthChangeListener,
} from "../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (user: User | null) => null,
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthChangeListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      // @ts-ignore
      return setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
