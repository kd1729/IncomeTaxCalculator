import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NameComponent from "./NameComponent";

export default function Profile() {
  const [NPSApplicable, setNPSApplicable] = useState(true);
  const navigate = useNavigate()
  return (
    <div className="grid justify-center items-center">
      {/* Toggle Button */}
      <div className="flex flex-row gap-4 justify-center my-8">
        <div className="flex flex-row">
          <label className=" font-bold text-2xl">NPS </label>
          <input
            type="checkbox"
            className="ml-2 w-8 hover:cursor-pointer"
            checked={NPSApplicable}
            onChange={(e) => setNPSApplicable((e) => !e)}
          />
        </div>

        <div className="flex flex-row">
          <label className=" font-bold text-2xl">GPF </label>
          <input
            type="checkbox"
            className="ml-2 w-8 hover:cursor-pointer"
            checked={!NPSApplicable}
            onChange={(e) => setNPSApplicable((e) => !e)}
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center my-12">Teacher Details</h1>
      <div>
        <NameComponent name="Teacher Name" />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        onClick={() => {
          navigate('/salary',
          {
            state: {
              NPSApplicable: NPSApplicable,
            }
          })
        }}
      >
        Submit
      </button>

      {/* <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent name="Teacher Name" />
        <NameComponent name="MS ID Number" />
        <NameComponent name="Teacher Post" />
        <NameComponent name="School Name" />
        <NameComponent name="Vikas Khand" />
        <NameComponent name="District" />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent name="PAN Number" />
        <NameComponent name="PRAN Number" />
        <NameComponent name="Aadhar Number" />
        <NameComponent name="Phone" />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent name="Bank Name" />
        <NameComponent name="Bank Account Number" />
        <NameComponent name="IFSC Code" />
        <NameComponent name="Branch Name" />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent name="Date of Birth" />
        <NameComponent name="First Joining Date" />
        <NameComponent name="Current Salary Grade Pay" />
      </div> */}
    </div>
  );
}
