import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";

interface SignUpForm {
  displayName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}
const defaultFormFields: SignUpForm = {
  displayName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
};
const SignUpComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, emailAddress, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const response = await createAuthUserWithEmailAndPassword(
        emailAddress,
        password
      );
      if (response)
        await createUserDocumentFromAuth(response.user, { displayName });
      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email address"
          required
          type="email"
          onChange={handleChange}
          name="emailAddress"
          value={emailAddress}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpComponent;
