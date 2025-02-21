import React, { useState } from "react";
import ShowFormData from "./ShowFormData";

const dataObj = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false, // default
  gender: "",
};

const Form = () => {
  const [formData, setFormData] = useState(dataObj);
  const [data, setData] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit Form");

    setData([...data, formData]);
    setFormData(dataObj);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(data);
  console.log(formData);
  return (
    <div>
      <h1> React Form Assignment</h1>
      <br></br>
      {showToast && (
        <div
          id="toast-success"
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="border-1 border-solid shadow-2xs  m-auto  md:w-32 lg:w-200 rounded-lg "
      >
        <div>
          <label  className=" font-medium text-gray-900  w-130 shadow-lg ">
            Firstname
          </label>
         
        </div>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          className="border-1 border-solid , font-medium text-gray-900, w-100 , m-4 rounded-lg shadow-lg shadow-gray-400"
          onChange={handleChange}
        /><br></br>
         <label  className="font-medium text-gray-900, w-100">
            Lastname
          </label>
          <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          className="border-1 border-solid font-medium text-gray-900, w-100 , m-4 rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <br></br>
        <label className="block font-medium text-gray-900, w-100">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          className="border-1 border-solid , lg:w-170 md:w-80 sm:w-80 rounded-lg shadow-gray-400" 
          onChange={handleChange}
        />
        <br></br>
        <label className="block font-medium text-gray-900, w-100">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          className="border-1 border-solid , w-170 rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label className=" font-medium text-gray-900, w-10">Phone : </label>
        <input
          type="number"
          name="phNumber"
          id="phone"
          value={formData.phNumber}
          className="border-1 border-solid, w-100 rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <span> </span>
        <select
          name="country"
          id="country"
          value={formData.country}
          className="border-1 border-solid rounded-lg shadow-gray-400"
          onChange={handleChange}
        >
          <option value="">select country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Russia">Russia</option>
          <option value="Brazil">Brazil</option>
          <option value="China">China</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Malaysia">Malaysia</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="">
          Birth Date{" "}
          <input
            type="date"
            name="birthDate"
            id=""
            value={formData.birthDate}
            onChange={handleChange}
            className=" p-3 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4 w-96 shadow-gray-400"
          />
        </label>
        <br></br>
        {""}
        Avatar :{" "}
        <input
          type="file"
          name="avatar"
          id="avatar"
          value={formData.avatar}
          className="border-1 border-solid rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        {/* Married status : <input type="checkbox" name="marriedStatus" id="merried" className="border-1 border-solid" /> */}
        Married status :{" "}
        <input
          type="checkbox"
          name="marriageStatus"
          id="merried"
          checked={formData.marriageStatus}
          className="border-1 border-solid rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        isMarried
        <br></br>
        <br></br>
        <h1 checked={formData.gender}> Gender :</h1>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="others" /> Others
        <br></br>
        <br></br>
        <button type="submit" className="border-1 border-solid , p-1 rounded-lg shadow-gray-400">
          Submit
        </button>
      </form>
      {data.map((e) => (
        <div>
          {/* <h1>{e.firstName}</h1>
          <h2>{e.lastName}</h2>
          <h3>{e.marriageStatus}</h3> */}
          <ShowFormData {...e} />
        </div>
      ))}
    </div>
  );
};

export default Form;
