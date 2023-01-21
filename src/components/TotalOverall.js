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
    <div className=" flex flex-col pb-8">
      <h1 className="text-2xl text-center py-4 font-bold">Total Overall</h1>
      <table>
        <thead className="text-lg text-white">
          <tr>
            <th className="px-4 text-center">Basic Pay</th>
            <th className="px-4 text-center">DA</th>
            <th className="px-4 text-center">HRA</th>
            <th className="px-4 text-center">Other Allowance</th>
            <th className="px-4 text-center">Total Positive Salary</th>
            <th className="px-4 text-center">NPS</th>
            <th className="px-4 text-center">GPF</th>
            <th className="px-4 text-center">GIS</th>
            <th className="px-4 text-center">TDS</th>
            <th className="px-4 text-center">Total Negative Salary</th>
            <th className="px-4 text-center">Net Salary</th>
            <th className="px-4 text-center">Total NPS By Employee</th>
          </tr>
        </thead>
        <tbody className="text-lg text-green-200">
          <tr>
            <td className="px-4 text-center">{totalBasePay}</td>
            <td className="px-4 text-center">{totalDA}</td>
            <td className="px-4 text-center">{totalHRA}</td>
            <td className="px-4 text-center">{totalOtherAllowance}</td>
            <td className="px-4 text-center">{totalPositiveSalary}</td>
            <td className="px-4 text-center">{totalNPS}</td>
            <td className="px-4 text-center">{totalGPF}</td>
            <td className="px-4 text-center">{totalGIS}</td>
            <td className="px-4 text-center">{totalTDS}</td>
            <td className="px-4 text-center">{totalNegativeSalary}</td>
            <td className="px-4 text-center">{totalNetSalary}</td>
            <td className="px-4 text-center">{totalNPSByEmp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
