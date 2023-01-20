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
    NetSalary,
    NPSByEmp,
    NPSApplicable,
  } = props;

  const totalBasePay = Basicpay.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalDA =
    DA.reduce((a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)), 0) +
    parseInt(Math.round(Arrears.current.Arrear1)) +
    parseInt(Math.round(Arrears.current.Arrear2));

  const totalHRA = HRA.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalOtherAllowance = OtherAllowance.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalPositiveSalary =
    TotalPositiveSalary.reduce(
      (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
      0
    ) +
    parseInt(Math.round(Arrears.current.Arrear1)) +
    parseInt(Math.round(Arrears.current.Arrear2)) +
    parseInt(Math.round(Bonus.Bonus));

  const totalNPS =
    NPS.reduce((a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)), 0) +
    parseInt(Math.round(Arrears.current.Arrear1NPS)) +
    parseInt(Math.round(Arrears.current.Arrear2NPS));

  console.log(NPS);
  console.log(
    NPS.reduce((a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)), 0),
    Arrears.current.Arrear1NPS,
    Arrears.current.Arrear2NPS
  );

  const totalGPF =
    GPF.reduce((a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)), 0) +
    parseInt(Math.round(Arrears.current.Arrear1GPF)) +
    parseInt(Math.round(Arrears.current.Arrear2GPF));

  const totalGIS = GIS.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalTDS = TDS.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalNegativeSalary = TotalNegativeSalary.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  );

  const totalNetSalary = NetSalary.reduce(
    (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
    0
  ) + parseInt(Math.round(Bonus.Bonus)) - parseInt(Math.round(Bonus.BonusGPF))
  + parseInt(Math.round(Arrears.current.Arrear1Total)) + parseInt(Math.round(Arrears.current.Arrear2Total));


  const totalNPSByEmp =
    NPSByEmp.reduce(
      (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
      0
    ) +
    parseInt(Math.round(Arrears.current.Arrear1NPSByEmp)) +
    parseInt(Math.round(Arrears.current.Arrear2NPSByEmp));

  return (
    <div className="my-16 flex flex-col   ">
      <h1 className="text-3xl text-center py-4 font-bold">Total Overall</h1>
      <table>
        <thead className="text-2xl">
          <tr>
            <th className="px-4 font-semibold text-center">Basic Pay</th>
            <th className="px-4 font-semibold text-center">DA</th>
            <th className="px-4 font-semibold text-center">HRA</th>
            <th className="px-4 font-semibold text-center">Other Allowance</th>
            <th className="px-4 font-semibold text-center">Total Positive Salary</th>
            <th className="px-4 font-semibold text-center">NPS</th>
            <th className="px-4 font-semibold text-center">GPF</th>
            <th className="px-4 font-semibold text-center">GIS</th>
            <th className="px-4 font-semibold text-center">TDS</th>
            <th className="px-4 font-semibold text-center">Total Negative Salary</th>
            <th className="px-4 font-semibold text-center">Net Salary</th>
            <th className="px-4 font-semibold text-center">Total NPS By Employee</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr>
            <td className="px-4 font-semibold text-center">{totalBasePay}</td>
            <td className="px-4 font-semibold text-center">{totalDA}</td>
            <td className="px-4 font-semibold text-center">{totalHRA}</td>
            <td className="px-4 font-semibold text-center">{totalOtherAllowance}</td>
            <td className="px-4 font-semibold text-center">{totalPositiveSalary}</td>
            <td className="px-4 font-semibold text-center">{totalNPS}</td>
            <td className="px-4 font-semibold text-center">{totalGPF}</td>
            <td className="px-4 font-semibold text-center">{totalGIS}</td>
            <td className="px-4 font-semibold text-center">{totalTDS}</td>
            <td className="px-4 font-semibold text-center">{totalNegativeSalary}</td>
            <td className="px-4 font-semibold text-center">{totalNetSalary}</td>
            <td className="px-4 font-semibold text-center">{totalNPSByEmp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
