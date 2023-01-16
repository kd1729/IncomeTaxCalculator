import NameComponent from "./NameComponent";

export default function Profile() {
  return (
    <div className="grid justify-center items-center">

      <h1 className="text-4xl font-bold text-center my-12">Teacher Details</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12 my-8">
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
      </div>
    </div>
  );
}
