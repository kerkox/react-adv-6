import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>
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
          terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Action not permited")
            .required("Job Type is required"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">FirstName</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select" >
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-jr">IT Jr</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
