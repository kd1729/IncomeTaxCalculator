import {useNavigate} from 'react-router-dom';

export default function TotalOverall(props) {

  const navigate = useNavigate();

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

  const totalGPF =
    GPF.reduce((a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)), 0) +
    parseInt(Math.round(Arrears.current.Arrear1GPF)) +
    parseInt(Math.round(Arrears.current.Arrear2GPF)) +
    parseInt(Math.round(Bonus.BonusGPF));

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

  const totalNetSalary =
    NetSalary.reduce(
      (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
      0
    ) +
    parseInt(Math.round(Bonus.Bonus)) -
    parseInt(Math.round(Bonus.BonusGPF)) +
    parseInt(Math.round(Arrears.current.Arrear1Total)) +
    parseInt(Math.round(Arrears.current.Arrear2Total));

  const totalNPSByEmp =
    NPSByEmp.reduce(
      (a, b) => parseInt(Math.round(a)) + parseInt(Math.round(b)),
      0
    ) +
    parseInt(Math.round(Arrears.current.Arrear1NPSByEmp)) +
    parseInt(Math.round(Arrears.current.Arrear2NPSByEmp));

  return (
    <div className=" flex flex-col py-4">
      <h1 className="text-4xl text-center py-8 text-black font-bold">Total Overall</h1>
      <table>
        <thead className="text-xl text-black">
          <tr>
            <th className="px-4 text-center">Basic Pay</th>
            <th className="px-4 text-center">DA</th>
            <th className="px-4 text-center">HRA</th>
            <th className="px-4 text-center">Others</th>
            <th className="px-4 text-center">Emoluments</th>
            {NPSApplicable ? (
              <th className="px-4 text-center">NPS</th>
            ) : (
              <th className="px-4 text-center">GPF</th>
            )}
            <th className="px-4 text-center">GIS</th>
            <th className="px-4 text-center">TDS</th>
            <th className="px-4 text-center">Deductions</th>
            <th className="px-4 text-center">Net Salary</th>
            {NPSApplicable ? (
              <th className="px-4 text-center">Employer contr. of NPS</th>
            ) : null}
          </tr>
        </thead>
        <tbody className="text-lg text-green-800">
          <tr>
            <td className="px-4 text-center">{totalBasePay || 0}</td>
            <td className="px-4 text-center">{totalDA || 0}</td>
            <td className="px-4 text-center">{totalHRA || 0}</td>
            <td className="px-4 text-center">{totalOtherAllowance || 0}</td>
            <td className="px-4 text-center">{totalPositiveSalary || 0}</td>
            {NPSApplicable ? (
              <td className="px-4 text-center">{totalNPS || 0}</td>
            ) : (
              <td className="px-4 text-center">{totalGPF || 0}</td>
            )}

            <td className="px-4 text-center">{totalGIS || 0}</td>
            <td className="px-4 text-center">{totalTDS || 0}</td>
            <td className="px-4 text-center">{totalNegativeSalary || 0}</td>
            <td className="px-4 text-center">{totalNetSalary || 0}</td>
            {NPSApplicable ? (
              <td className="px-4 text-center">{totalNPSByEmp || 0}</td>
            ) : null}
          </tr>
        </tbody>
      </table>
      
      <div className=" flex justify-center">
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white text-2xl font-semibold py-4 px-8 rounded my-8 w-60"
          onClick={() => {
            navigate("/tax", {
              state: {
                totalBasePay,
                totalDA,
                totalHRA,
                totalOtherAllowance,
                totalPositiveSalary,
                totalNPS,
                totalGPF,
                totalGIS,
                totalNegativeSalary,
                totalNetSalary,
                totalTDS,
                totalNPSByEmp,
                NPSApplicable,
              },
            });
          }}
        >
          Calculate Tax
        </button>
      </div>

    </div>
  );
}
