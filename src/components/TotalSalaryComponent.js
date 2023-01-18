import SalaryHeader from "./SalaryHeader";

export default function TotalSalaryComponent() {
  return (
    // create a excel sheet with 14 columns and 14 rows
    <div className="flex flex-col py-20 px-10">
        <SalaryHeader />
    </div>
  );
}
