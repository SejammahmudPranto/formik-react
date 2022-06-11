import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
}
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

export default function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log("formik touched", formik.touched);
  // console.log("formik error messages", formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter name"
          
        />
        {(formik.errors.name && formik.touched.name) ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      <div className="form-control">
        <label htmlFor="email" className="form-control">
          Email:{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Enter Email"
        ></input>
        {(formik.errors.email && formik.touched.email) ? <div className="error">{formik.errors.email}</div> : null}
      </div>

      <div className="form-control">
        <label htmlFor="channel" className="form-control">
          Channel:{" "}
        </label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
          placeholder="Enter Channel Name"
        ></input>
        {(formik.errors.channel && formik.touched.channel) ?  <div className="error">{formik.errors.channel}</div> : null}
      </div>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
