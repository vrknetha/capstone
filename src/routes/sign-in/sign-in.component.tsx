import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpComponent from "../../components/sign-up/sign-up.component";
import React from "react";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>I am sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpComponent />
    </div>
  );
};

export default SignIn;
