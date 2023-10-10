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
      <div className="flex flex-row gap-10 justify-center my-16">
        <div className="flex flex-row ">
          <label className=" font-bold text-3xl text-white nps--class">
            NPS{" "}
          </label>

          <label className=" font-bold text-3xl text-black">NPS </label>
          <input
            type="checkbox"
            className="ml-2 w-8 hover:cursor-pointer checkbox--class"
            checked={NPSApplicable}
            onChange={(e) => setNPSApplicable((e) => !e)}
          />
        </div>

        <div className="flex flex-row">
          <label className=" font-bold text-3xl text-white gpf--class">
            GPF{" "}
          </label>
          <label className=" font-bold text-3xl text-black">GPF </label>
          <input
            type="checkbox"
            className="ml-2 w-8 hover:cursor-pointer checkbox--class"
            checked={!NPSApplicable}
            onChange={(e) => setNPSApplicable((e) => !e)}
          />
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <NameComponent
          heading="Teacher Name"
          profile={profile}
          setProfile={setProfile}
          value="TeacherName"
        />
      </div>

      <div className="grid grid-cols-4 place-items-center gap-12">
        <div className="flex flex-col gap-4">
          <NameComponent
            heading="MS ID Number"
            profile={profile}
            setProfile={setProfile}
            value="MSIDNumber"
          />
          <NameComponent
            heading="Teacher Post"
            profile={profile}
            setProfile={setProfile}
            value="TeacherPost"
          />
          <NameComponent
            heading="School Name"
            profile={profile}
            setProfile={setProfile}
            value="SchoolName"
          />
          <NameComponent
            heading="Vikas Khand"
            profile={profile}
            setProfile={setProfile}
            value="VikasKhand"
          />
          <NameComponent
            heading="District"
            profile={profile}
            setProfile={setProfile}
            value="District"
          />
        </div>
        <div className="flex flex-col gap-4">
          <NameComponent
            heading="PAN Number"
            profile={profile}
            setProfile={setProfile}
            value="PANNumber"
          />
          <NameComponent
            heading="PRAN Number"
            profile={profile}
            setProfile={setProfile}
            value="PRANNumber"
          />
          <NameComponent
            heading="Aadhar Number"
            profile={profile}
            setProfile={setProfile}
            value="AadharNumber"
          />
          <NameComponent
            heading="Phone"
            profile={profile}
            setProfile={setProfile}
            value="Phone"
          />
        </div>

        <div className="flex flex-col gap-4">
          <NameComponent
            heading="Bank Name"
            profile={profile}
            setProfile={setProfile}
            value="BankName"
          />
          <NameComponent
            heading="Bank Account Number"
            profile={profile}
            setProfile={setProfile}
            value="BankAccountNumber"
          />
          <NameComponent
            heading="IFSC Code"
            profile={profile}
            setProfile={setProfile}
            value="IFSCCode"
          />
          <NameComponent
            heading="Branch Name"
            profile={profile}
            setProfile={setProfile}
            value="BranchName"
          />
        </div>

        <div className="flex flex-col gap-4">
          <NameComponent
            heading="Date of Birth"
            profile={profile}
            setProfile={setProfile}
            value="DateOfBirth"
          />
          <NameComponent
            heading="First Joining Date"
            profile={profile}
            setProfile={setProfile}
            value="FirstJoiningDate"
          />
          <NameComponent
            heading="Receiving Date of Current Salary Grade Pay"
            profile={profile}
            setProfile={setProfile}
            value="CurrentSalaryGradePay"
          />
        </div>
      </div>

      <div className=" flex justify-center">
        <button
          className="submit-button--class"
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
    </div>
  );
}
