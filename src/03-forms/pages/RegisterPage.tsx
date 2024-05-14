import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
 
  const { email, name, password, repeatPassword, onChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ event });
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="repeatedPassword"
          value={repeatPassword}
          onChange={onChange}
          type="password"
          placeholder="Repeat Password"
        />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
