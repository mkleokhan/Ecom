import { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    email: yup.string().required("Enter your email").email(),
    phone: yup.string().required("Enter your phone number"),
    password: yup
      .string()
      .required("Enter your password")
      .min(8, "Password must not be less than 8 characters"),
    dob: yup.date().required("Enter valid date"),
  });

  const handleSubmit = (values) => console.log("values:", values);
  return (
    <>
      <div>
        <h1 className="text-lg font-bold mt-4">
          <center>Sign Up here </center>
        </h1>
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full">
            <label htmlFor="name">Name</label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="something@something.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="phone">Phone</label>

            <Field
              name="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="phone"
              placeholder="phone number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="dob">Date of Birth</label>
            <Field
              name="dob"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="dob"
            />
            <ErrorMessage name="dob" component="div" className="text-red-500" />
            <label htmlFor="profilePic">Profile Picture</label>
            <Field
              name="profilePic"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
            />
            <button
              type="submit"
              className="mt-2 ml-1 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
