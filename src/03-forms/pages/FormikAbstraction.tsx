import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required("First Name is required")
            .max(15, "Debe tener 15 caracteres o menos"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Must Accept Terms and Conditions"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Action not permited")
            .required("Job Type is required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="FirstName"
            />

            <MyTextInput
              label="Last Name"
              name="lasstName"
              placeholder="LastName"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="Email"
              type="email"
            />

            
            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-jr">IT Jr</option>
            </MySelect>
            
            <MyCheckbox name="terms" label="Terms and conditions" />
            
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
