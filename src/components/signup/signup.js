import InputField from "components/inputfield";
import { useContext, useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "containers/store/firebase/firebase";
import { UserContext } from "containers/store/context/usercontext";  

const defaultFormList = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormList);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext); 

  const resetFormFields = () => {
    setFormFields(defaultFormList);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password do not match.Try again.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signinform">
      <h1>Sign with your email</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label={"Display Name"}
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <InputField
         label={"Email"}
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputField
        label={"Password"}
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <InputField
        label={"Confirm Password"}
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button onClick={() => {}}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
