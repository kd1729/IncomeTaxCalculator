export default function DisplayProfile({ profile }) {
  return (
    <div>
      <div className="text-center text-4xl my-4  text-blue-800">
        Welcome {profile.TeacherName}!
      </div>

      <div className=" mb-4 flex items-center gap-x-16 justify-center">

          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col">
              <div className="text-lg  mr-4 text-[#000000]">MSID Number</div>
              <div className="text-lg  mr-4 text-[#000000]">Teacher Post</div>
              <div className="text-lg  mr-4 text-[#000000]">School Name</div>
              <div className="text-lg  mr-4 text-[#000000]">Vikas Khand</div>
              <div className="text-lg  mr-4 text-[#000000]">District</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg  text-blue-800">{profile.MSIDNumber}</div>
              <div className="text-lg  text-blue-800">
                {profile.TeacherPost}
              </div>
              <div className="text-lg  text-blue-800">{profile.SchoolName}</div>
              <div className="text-lg  text-blue-800">{profile.VikasKhand}</div>
              <div className="text-lg  text-blue-800">{profile.District}</div>
            </div>
          </div>

          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col">
              <div className="text-lg  mr-4 text-[#000000]">PAN Number</div>
              <div className="text-lg  mr-4 text-[#000000]">PRAN Number</div>
              <div className="text-lg  mr-4 text-[#000000]">Aadhar Number</div>
              <div className="text-lg  mr-4 text-[#000000]">Phone Number</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg  text-blue-800">{profile.PANNumber}</div>
              <div className="text-lg  text-blue-800">{profile.PRANNumber}</div>
              <div className="text-lg  text-blue-800">
                {profile.AadharNumber}
              </div>
              <div className="text-lg  text-blue-800">{profile.Phone}</div>
            </div>
          </div>


        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col">
            <div className="text-lg  mr-4 text-[#000000]">Bank Name</div>
            <div className="text-lg  mr-4 text-[#000000]">Bank Account</div>
            <div className="text-lg  mr-4 text-[#000000]">IFSC Code</div>
            <div className="text-lg  mr-4 text-[#000000]">Branch Name</div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg  text-blue-800">{profile.BankName}</div>
            <div className="text-lg  text-blue-800">
              {profile.BankAccountNumber}
            </div>
            <div className="text-lg  text-blue-800">{profile.IFSCCode}</div>
            <div className="text-lg  text-blue-800">{profile.BranchName}</div>
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col">
            <div className="text-lg  mr-4 text-[#000000]">Date of Birth</div>
            <div className="text-lg  mr-4 text-[#000000]">
              First Joining Date
            </div>
            <div className="text-lg  mr-4 text-[#000000]">
              Receiving Date of <br />
              Current Grade Pay
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg  text-blue-800">{profile.DateOfBirth}</div>
            <div className="text-lg  text-blue-800">
              {profile.FirstJoiningDate}
            </div>
            <div className="text-lg  text-blue-800">
              {profile.CurrentSalaryGradePay}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
