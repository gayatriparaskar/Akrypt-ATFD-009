import React from 'react'

const ShowFormData = ({firstName, lastName, email,password,phNumber,country,birthDate, avatar,marriageStatus,gender,handleChange}) => 
    {
    return (
        <div>
<form
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
          value={firstName}
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
          value={lastName}
          className="border-1 border-solid font-medium text-gray-900, w-100 , m-4 rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <br></br>
        <label className="block font-medium text-gray-900, w-100">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
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
          value={password}
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
          value={phNumber}
          className="border-1 border-solid, w-100 rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        <span> </span>
        <select
          name="country"
          id="country"
          value={country}
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
            value={birthDate}
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
          value={avatar}
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
          checked={marriageStatus}
          className="border-1 border-solid rounded-lg shadow-gray-400"
          onChange={handleChange}
        />
        isMarried
        <br></br>
        <br></br>
        <h1 checked={gender}> Gender :</h1>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="others" /> Others
        <br></br>
        <br></br>
        <button type="submit" className="border-1 border-solid , p-1 rounded-lg shadow-gray-400">
          Submit
        </button>
      </form>
        </div>
    );
}

export default ShowFormData;
