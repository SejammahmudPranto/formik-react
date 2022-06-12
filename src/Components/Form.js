import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email("Invalid Email").required("Required!"),
  channel: Yup.string().required('Required!')

})

// eslint-disable-next-line no-unused-vars
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
}
const onSubmit = (values) => {
  console.log('form datas', values)
}

export default function NewForm() {

  // console.log("formik touched", formik.touched);
  // console.log("formik error messages", formik.errors);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form>
      <div className="form-control">
        <label htmlFor="name">Name: </label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
        />
        <ErrorMessage name="name"/>
      </div>

      <div className="form-control">
        <label htmlFor="email" className="form-control">
          Email:{" "}
        </label>
        <Field
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        <ErrorMessage name="email"/>
      </div>

      <div className="form-control">
        <label htmlFor="channel" className="form-control">
          Channel:{" "}
        </label>
        <Field
          type="text"
          id="channel"
          name="channel"
          placeholder="Enter Channel Name"
        />
        <ErrorMessage name="channel"/>
      </div>
      <button type="submit" className="button">
        Submit
      </button>
      </Form>
    </Formik>
  );
}
