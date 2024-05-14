import "../styles/styles.css";
import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  const onSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          name: Yup.string()
            .min(2, "Name should greater than 1 character")
            .max(15, "Name should be less than 15 characters")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password length min 6")
            .required("Required"),
          repeatPassword: Yup.string()
            .min(6, "Password length min 6")
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              autocomplete="off"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <MyTextInput
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              placeholder="Repeat Password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
