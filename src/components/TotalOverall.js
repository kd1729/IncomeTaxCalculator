export default function TotalOverall(props) {
  const {
    Basicpay,
    DA,
    Arrears,
    HRA,
    OtherAllowance,
    TotalPositiveSalary,
    NPS,
    GPF,
    GIS,
    TDS,
    Bonus,
    TotalNegativeSalary,
    NPSByEmp,
    NPSApplicable,
  } = props;

  const totalBasePay = Basicpay.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );

  const totalDA =
    DA.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    parseInt(Arrears.current.Arrear1) +
    parseInt(Arrears.current.Arrear2);

  const totalHRA = HRA.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  const totalOtherAllowance = OtherAllowance.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );

  const totalPositiveSalary =
    TotalPositiveSalary.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    parseInt(Arrears.current.Arrear1) +
    parseInt(Arrears.current.Arrear2) + 
    parseInt(Bonus.current.Bonus);

  const totalNPS =
    NPS.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    parseInt(Arrears.current.Arrear1NPS) +
    parseInt(Arrears.current.Arrear2NPS);

  const totalGPF =
    GPF.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    parseInt(Arrears.current.Arrear1GPF) +
    parseInt(Arrears.current.Arrear2GPF);

  const totalGIS = GIS.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  const totalTDS = TDS.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  const totalNegativeSalary = TotalNegativeSalary.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );

  const totalNPSByEmp =
    NPSByEmp.reduce((a, b) => parseInt(a) + parseInt(b), 0) +
    parseInt(Arrears.current.Arrear1NPSByEmp) +
    parseInt(Arrears.current.Arrear2NPSByEmp);

  return (
    <div className="my-16">
      <h1 className="text-xl text-center py-4 font-bold">Total Overall</h1>
      <table>
        <thead className="text-xl ">
          <tr>
            <th className="px-4">Basic Pay</th>
            <th className="px-4">DA</th>
            <th className="px-4">HRA</th>
            <th className="px-4">Other Allowance</th>
            <th className="px-4">Total Positive Salary</th>
            <th className="px-4">NPS</th>
            <th className="px-4">GPF</th>
            <th className="px-4">GIS</th>
            <th className="px-4">TDS</th>
            <th className="px-4">Total Negative Salary</th>
            <th className="px-4">Total NPS By Employee</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr>
            <td className="px-4">{totalBasePay}</td>
            <td className="px-4">{totalDA}</td>
            <td className="px-4">{totalHRA}</td>
            <td className="px-4">{totalOtherAllowance}</td>
            <td className="px-4">{totalPositiveSalary}</td>
            <td className="px-4">{totalNPS}</td>
            <td className="px-4">{totalGPF}</td>
            <td className="px-4">{GPF}</td>
            <td className="px-4">{totalGIS}</td>
            <td className="px-4">{totalTDS}</td>
            <td className="px-4">{totalNegativeSalary}</td>
            <td className="px-4">{totalNPSByEmp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
