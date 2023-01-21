export default function DisplayProfile({ profile }) {
  return (
    <div>
      <div className="text-center text-4xl my-4  text-[#f6eded]">
        Welcome {profile.TeacherName}!
      </div>
      <div className=" mb-4 flex items-center justify-center">
        <div className="flex flex-row gap-x-20 items-center">
          <div className="flex flex-row gap-x-20 items-center">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-lg  mr-4 text-[#e9b7ff]">MSID Number</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Teacher Post</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">School Name</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Vikas Khand</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">District</div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg  text-white">
                  {profile.MSIDNumber}
                </div>
                <div className="text-lg  text-white">
                  {profile.TeacherPost}
                </div>
                <div className="text-lg  text-white">
                  {profile.SchoolName}
                </div>
                <div className="text-lg  text-white">
                  {profile.VikasKhand}
                </div>
                <div className="text-lg  text-white">{profile.District}</div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-lg  mr-4 text-[#e9b7ff]">PAN Number</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">PRAN Number</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Aadhar Number</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Phone Number</div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg  text-white">{profile.PANNumber}</div>
                <div className="text-lg  text-white">
                  {profile.PRANNumber}
                </div>
                <div className="text-lg  text-white">
                  {profile.AadharNumber}
                </div>
                <div className="text-lg  text-white">{profile.Phone}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-20 items-center">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col">
                <div className="text-lg  mr-4 text-[#e9b7ff]">Bank Name</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Bank Account</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">IFSC Code</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">Branch Name</div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg  text-white">{profile.BankName}</div>
                <div className="text-lg  text-white">
                  {profile.BankAccountNumber}
                </div>
                <div className="text-lg  text-white">{profile.IFSCCode}</div>
                <div className="text-lg  text-white">
                  {profile.BranchName}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-lg  mr-4 text-[#e9b7ff]">Date of Birth</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">First Joining Date</div>
                <div className="text-lg  mr-4 text-[#e9b7ff]">
                Receiving Date of <br/>Current Grade Pay
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg  text-white">
                  {profile.DateOfBirth}
                </div>
                <div className="text-lg  text-white">
                  {profile.FirstJoiningDate}
                </div>
                <div className="text-lg  text-white">
                  {profile.CurrentSalaryGradePay}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
