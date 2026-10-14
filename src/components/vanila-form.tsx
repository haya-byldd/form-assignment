"use client";

import React, { useState } from "react";

const labelClass = "mb-2 block text-sm font-medium text-slate-700";
const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  phoneNumber: string;
  gender: string;
  language: string;
  areaOfExpertise: string[];
  bio: string;
};

const initialState: FormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  phoneNumber: "",
  gender: "",
  language: "",
  areaOfExpertise: [],
  bio: "",
};

const VanilaForm = () => {
  const [data, setData] = useState(initialState);

  // const handleFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = e.target;
  //   setData((prevState) => {
  //     return (
  //       {...prevState, [name]: value}
  //     )
  //   })

  // }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {checked, value, name } = e.target;
  //   setData((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: checked
  //         ? [...prevData.areaOfExpertise, value]
  //         : prevData.areaOfExpertise.filter((exp) => exp !== value),
  //     };
  //   });
  // };

  const handleCheckbox = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {checked, value, name} = e.target;
    setData((prevState) => {
      return { ...prevState, [name] : checked ? [...prevState.areaOfExpertise, value] : [...prevState.areaOfExpertise.filter((expertise) => expertise !== value)]}
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the details below to create your account.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="example@gmail.com"
                id="email"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="age" className={labelClass}>
                Age
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="age"
                placeholder="Enter your age"
                id="age"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className={labelClass}>
                Phone number
              </label>
              <input
                onChange={handleChange}
                type="tel"
                name="phoneNumber"
                placeholder="Enter your Phone number"
                id="phoneNumber"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Create a password"
                id="password"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className={labelClass}>
                Confirm password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                id="confirmPassword"
                className={inputClass}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>Gender</legend>
              <div className="flex w-full gap-4 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900">
                <div className="flex items-center gap-1">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label htmlFor="male">Male</label>
                </div>

                <div className="flex items-center gap-1">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </fieldset>

            <div>
              <label htmlFor="language" className={labelClass}>
                Language
              </label>
              <select
                onChange={handleChange}
                id="language"
                name="language"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select your language
                </option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>

            <fieldset className="col-span-1 md:col-span-2">
              <legend className={labelClass}>Area of Expertise</legend>
              <div className="flex w-full flex-wrap gap-4 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900">
                <div className="flex items-center gap-1">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name="areaOfExpertise"
                    id="frontend"
                    value="frontend"
                  />
                  <label htmlFor="frontend">Frontend Development</label>
                </div>

                <div className="flex items-center gap-1">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name="areaOfExpertise"
                    id="backend"
                    value="backend"
                  />
                  <label htmlFor="backend">Backend Development</label>
                </div>

                <div className="flex items-center gap-1">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name="areaOfExpertise"
                    id="ui/ux"
                    value="uiUx"
                  />
                  <label htmlFor="ui/ux">UI/UX</label>
                </div>

                <div className="flex items-center gap-1">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name="areaOfExpertise"
                    id="testing"
                    value="testing"
                  />
                  <label htmlFor="testing">Testing</label>
                </div>
              </div>
            </fieldset>

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="bio" className={labelClass}>
                Bio
              </label>
              <textarea
                onChange={handleChange}
                id="bio"
                name="bio"
                placeholder="Write something"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 py-2 text-md text-white hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default VanilaForm;
