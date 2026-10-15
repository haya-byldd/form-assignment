"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const labelClass = "mb-2 block text-sm font-medium text-slate-700";
const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";
const errorClass = "mt-1 text-sm text-red-600";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  phoneNumber: "",
  gender: "",
  language: "",
  areaOfExpertise: [] as string[],
  bio: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(8, "Use at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  age: Yup.string().matches(/^\d+$/, "Enter a valid age").required("Age is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Enter a 10-digit phone number")
    .required("Phone number is required"),
  gender: Yup.string().required("Select a gender"),
  language: Yup.string().required("Select a language"),
  areaOfExpertise: Yup.array().of(Yup.string()).min(1, "Select an area of expertise"),
  bio: Yup.string().trim().required("Bio is required"),
});

export default function FormikForm() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Create an account</h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the details below to create your account.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form noValidate>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClass}>Full Name</label>
                <Field type="text" name="fullName" id="fullName" placeholder="Enter your full name" className={inputClass} />
                <ErrorMessage name="fullName" component="p" className={errorClass} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <Field type="email" name="email" id="email" placeholder="example@gmail.com" className={inputClass} />
                <ErrorMessage name="email" component="p" className={errorClass} />
              </div>

              <div>
                <label htmlFor="age" className={labelClass}>Age</label>
                <Field type="number" name="age" id="age" placeholder="Enter your age" className={inputClass} />
                <ErrorMessage name="age" component="p" className={errorClass} />
              </div>

              <div>
                <label htmlFor="phoneNumber" className={labelClass}>Phone number</label>
                <Field type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your Phone number" className={inputClass} />
                <ErrorMessage name="phoneNumber" component="p" className={errorClass} />
              </div>

              <div>
                <label htmlFor="password" className={labelClass}>Password</label>
                <Field type="password" name="password" id="password" placeholder="Create a password" className={inputClass} />
                <ErrorMessage name="password" component="p" className={errorClass} />
              </div>

              <div>
                <label htmlFor="confirmPassword" className={labelClass}>Confirm password</label>
                <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" className={inputClass} />
                <ErrorMessage name="confirmPassword" component="p" className={errorClass} />
              </div>

              <fieldset>
                <legend className={labelClass}>Gender</legend>
                <div className="flex w-full gap-4 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900">
                  <div className="flex items-center gap-1">
                    <Field type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Field type="radio" name="gender" id="female" value="female" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <ErrorMessage name="gender" component="p" className={errorClass} />
              </fieldset>

              <div>
                <label htmlFor="language" className={labelClass}>Language</label>
                <Field as="select" id="language" name="language" className={inputClass}>
                  <option value="" disabled>Select your language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </Field>
                <ErrorMessage name="language" component="p" className={errorClass} />
              </div>

              <fieldset className="col-span-1 md:col-span-2">
                <legend className={labelClass}>Area of Expertise</legend>
                <div className="flex w-full flex-wrap gap-4 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900">
                  <div className="flex items-center gap-1">
                    <Field type="checkbox" name="areaOfExpertise" id="frontend" value="frontend" />
                    <label htmlFor="frontend">Frontend Development</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Field type="checkbox" name="areaOfExpertise" id="backend" value="backend" />
                    <label htmlFor="backend">Backend Development</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Field type="checkbox" name="areaOfExpertise" id="ui/ux" value="uiUx" />
                    <label htmlFor="ui/ux">UI/UX</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Field type="checkbox" name="areaOfExpertise" id="testing" value="testing" />
                    <label htmlFor="testing">Testing</label>
                  </div>
                </div>
                <ErrorMessage name="areaOfExpertise" component="p" className={errorClass} />
              </fieldset>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="bio" className={labelClass}>Bio</label>
                <Field as="textarea" id="bio" name="bio" placeholder="Write something" className={inputClass} />
                <ErrorMessage name="bio" component="p" className={errorClass} />
              </div>
            </div>

            <div className="mt-8">
              <button type="submit" className="w-full rounded-lg bg-indigo-500 py-2 text-md text-white hover:bg-indigo-700">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
