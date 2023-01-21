export default function SalaryHeader({ NPSApplicable }) {
  const GPFScreen = () => {
    if (NPSApplicable) {
      return (
        <div className="text-center text-red-500 px-4 py-2 w-36  ">NPS</div>
      );
    } else {
      return (
        <div className="text-center text-red-500 px-4 py-2 w-36  ">GPF</div>
      );
    }
  };

  const EmployeeContribution = () => {
    if (NPSApplicable) {
      return (
        <div className="text-center text-black px-4 py-2 w-max-36  ">
          Employer contr. of NPS
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-row font-bold bg-gray-300 pt-4">
      <div className="text-center text-blue-600 px-4 py-2 w-36  ">
        Month
      </div>
      <div className="text-center text-blue-600 px-4 py-2 w-36  ">
        Grade Pay
      </div>

      {/*  positives */}
      <div className="text-center text-blue-600 px-4 py-2 w-36  ">
        Basic Pay
      </div>
      <div className="text-center text-blue-600 px-4 py-2 w-36  ">DA %</div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36  ">
        DA Amount
      </div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36  ">
        HRA
      </div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36  ">
        Others
      </div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36  ">
        Gross Emoluments
      </div>

      {/*  negatives */}
      <GPFScreen />
      <div className="text-center text-red-500 px-4 py-2 w-36  ">GIS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36  ">TDS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36  ">
        Total Deductions
      </div>

      {/*  total */}
      <div className="text-center text-blue-600 px-4 py-2 w-36 ">
        Net Payment
      </div>
      <EmployeeContribution />
    </div>
  );
}
