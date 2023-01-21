import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameComponent from "./NameComponent";

export default function Profile() {
  const [NPSApplicable, setNPSApplicable] = useState(true);
  const [profile, setProfile] = useState({
    TeacherName: "",
    MSIDNumber: "",
    TeacherPost: "",
    SchoolName: "",
    VikasKhand: "",
    District: "",
    PANNumber: "",
    PRANNumber: "",
    AadharNumber: "",
    Phone: "",
    BankName: "",
    BankAccountNumber: "",
    IFSCCode: "",
    BranchName: "",
    DateOfBirth: "",
    FirstJoiningDate: "",
    CurrentSalaryGradePay: "",
  });



  const navigate = useNavigate();
  return (
    <div className="grid justify-center items-center">
      {/* Toggle Button */}
      <div className="flex flex-row gap-4 justify-center my-16">
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


      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent heading="Teacher Name" profile={profile} setProfile={setProfile} value="TeacherName" />
        <NameComponent heading="MS ID Number" profile={profile} setProfile={setProfile} value="MSIDNumber" />
        <NameComponent heading="Teacher Post" profile={profile} setProfile={setProfile} value="TeacherPost" />
        <NameComponent heading="School Name" profile={profile} setProfile={setProfile} value="SchoolName" />
        <NameComponent heading="Vikas Khand" profile={profile} setProfile={setProfile} value="VikasKhand" />
        <NameComponent heading="District" profile={profile} setProfile={setProfile} value="District" />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent heading="PAN Number" profile={profile} setProfile={setProfile} value="PANNumber" />
        <NameComponent heading="PRAN Number" profile={profile} setProfile={setProfile} value="PRANNumber" />
        <NameComponent heading="Aadhar Number" profile={profile} setProfile={setProfile} value="AadharNumber" />
        <NameComponent heading="Phone" profile={profile} setProfile={setProfile} value="Phone" />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent heading="Bank Name" profile={profile} setProfile={setProfile} value="BankName" />
        <NameComponent heading="Bank Account Number" profile={profile} setProfile={setProfile} value="BankAccountNumber" />
        <NameComponent heading="IFSC Code" profile={profile} setProfile={setProfile} value="IFSCCode" />
        <NameComponent heading="Branch Name" profile={profile} setProfile={setProfile} value="BranchName" />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
        <NameComponent heading="Date of Birth" profile={profile} setProfile={setProfile} value="DateOfBirth" />
        <NameComponent heading="First Joining Date" profile={profile} setProfile={setProfile} value="FirstJoiningDate" />
        <NameComponent heading="Current Salary Grade Pay" profile={profile} setProfile={setProfile} value="CurrentSalaryGradePay" />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-8 w-40"
        onClick={() => {
          navigate("/salary", {
            state: {
              NPSApplicable: NPSApplicable,
              profile: profile,
            },
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}
