import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import SalaryHeader from "./SalaryHeader";
import ArrearsComponent from "./ArrearsComponent";
import BonusComponent from "./BonusComponent";

const months = [
  { id: 0, name: "March-22" },
  { id: 1, name: "April-22" },
  { id: 2, name: "May-22" },
  { id: 3, name: "June-22" },
  { id: 4, name: "July-22" },
  { id: 5, name: "Aug-22" },
  { id: 6, name: "Sept-22" },
  { id: 7, name: "Oct-22" },
  { id: 8, name: "Nov-22" },
  { id: 9, name: "Dec-22" },
  { id: 10, name: "Jan-23" },
  { id: 11, name: "Feb-23" },
];

export default function TotalPositiveSalaryComponent() {
  const location = useLocation();
  const NPSApplicable = location.state.NPSApplicable;
  const teacherName = location.state.TeacherName;

  const [Gradepay, setGradepay] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxGradepay = useRef(0);

  // POSITIVE SALARY

  const [Basicpay, setBasicpay] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxBasicpay = useRef(0);

  const [DAPerc, setDAPerc] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxDAPerc = useRef(0);

  const [DA, setDA] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      DA[i] = (parseFloat(Basicpay[i]) * parseFloat(DAPerc[i])) / 100;
    }
    setDA([...DA]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basicpay, DAPerc]);

  const [HRA, setHRA] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxHRA = useRef(0);

  const [OtherAllowance, setOtherAllowance] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxOtherAllowance = useRef(0);

  const [TotalPositiveSalary, setTotalPositiveSalary] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      TotalPositiveSalary[i] =
        parseFloat(Basicpay[i]) +
        parseFloat(DA[i]) +
        parseFloat(HRA[i]) +
        parseFloat(OtherAllowance[i]);
    }
    setTotalPositiveSalary([...TotalPositiveSalary]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basicpay, DA, HRA, OtherAllowance]);

  // NEGATIVE SALARY

  const [NPS, setNPS] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (NPSApplicable) {
      for (let i = 0; i < 12; i++) {
        NPS[i] = ((parseFloat(Basicpay[i]) + parseFloat(DA[i])) * 10) / 100;
      }
      setNPS([...NPS]);
    } else {
      setNPS([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basicpay, DA, NPSApplicable]);

  const [GPF, setGPF] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (!NPSApplicable) {
      for (let i = 0; i < 12; i++) {
        GPF[i] = (parseFloat(Basicpay[i]) * 10) / 100;
      }
      setGPF([...GPF]);
    } else {
      setGPF([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basicpay, NPSApplicable]);

  const [GIS, setGIS] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxGIS = useRef(0);

  const [TDS, setTDS] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxTDS = useRef(0);

  const [TotalNegativeSalary, setTotalNegativeSalary] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      TotalNegativeSalary[i] =
        parseFloat(NPS[i]) +
        parseFloat(GPF[i]) +
        parseFloat(GIS[i]) +
        parseFloat(TDS[i]);
    }
    setTotalNegativeSalary([...TotalNegativeSalary]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NPS, GPF, GIS, TDS]);

  // TOTAL SALARY

  const [NetSalary, setNetSalary] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      NetSalary[i] =
        parseFloat(TotalPositiveSalary[i]) - parseFloat(TotalNegativeSalary[i]);
    }
    setNetSalary([...NetSalary]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TotalPositiveSalary, TotalNegativeSalary]);

  const [NPSByEmp, setNPSByEmp] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    if (NPSApplicable) {
      for (let i = 0; i < 12; i++) {
        NPSByEmp[i] =
          ((parseFloat(Basicpay[i]) + parseFloat(DA[i])) * 14) / 100;
      }
      setNPSByEmp([...NPSByEmp]);
    } else {
      setNPSByEmp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basicpay, DA, NPSApplicable]);

  // Arrears
  const Arrears = useRef({
    Arrear1: 0,
    Arrear2: 0,
    Arrear1NPS: 0,
    Arrear2NPS: 0,
    Arrear1GPF: 0,
    Arrear2GPF: 0,
    Arrear1Total: 0,
    Arrear2Total: 0,
    Arrear1NPSByEmp: 0,
    Arrear2NPSByEmp: 0,
  });

  const Bonus = useRef({
    Bonus: 0,
    GPFPerc: 0.75,
    BonusGPF: 0,
  });

  // Conditional Rendering
  const NPSGPFScreen = ({ monthID, NPSApplicable }) => {
    if (NPSApplicable) {
      return (
        <div className="text-center py-2 w-36 px-4 ">
          {Math.round(NPS[monthID])}
        </div>
      );
    } else {
      return (
        <div className="text-center py-2 w-36 px-4 ">
          {Math.round(GPF[monthID])}
        </div>
      );
    }
  };

  const EmployeeContributionScreen = ({ monthID, NPSApplicable }) => {
    if (NPSApplicable) {
      return (
        <div className="text-center py-2 w-36 px-4 ">
          {Math.round(NPSByEmp[monthID])}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-center text-4xl my-8 font-semibold">
        Welcome {teacherName}!
      </div>

      <SalaryHeader NPSApplicable={NPSApplicable} />

      {months.map((month) => (
        <div
          className="flex flex-row text-base font-semibold bg-gray-300"
          key={month.id}
        >
          <div className="text-center py-2 w-36 ">{month.name}</div>

          {/* setting GradePay */}
          <div className="text-center py-2 w-36 px-4">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={Gradepay[month.id]}
              onChange={(e) => {
                CurrIdxGradepay.current = month.id;
                Gradepay[CurrIdxGradepay.current] = e.target.value;
                for (let i = CurrIdxGradepay.current + 1; i < 12; i++) {
                  Gradepay[i] = e.target.value;
                }
                setGradepay([...Gradepay]);
              }}
            />
          </div>

          {/* setting BasicPay */}
          <div className="text-center py-2 w-36 px-4 ">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={Basicpay[month.id]}
              onChange={(e) => {
                CurrIdxBasicpay.current = month.id;
                Basicpay[CurrIdxBasicpay.current] = e.target.value;
                for (let i = CurrIdxBasicpay.current + 1; i < 12; i++) {
                  Basicpay[i] = e.target.value;
                }
                setBasicpay([...Basicpay]);
              }}
            />
          </div>

          {/* setting DA% */}
          <div className="text-center py-2 w-36 px-4 ">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={DAPerc[month.id]}
              onChange={(e) => {
                CurrIdxDAPerc.current = month.id;
                DAPerc[CurrIdxDAPerc.current] = e.target.value;
                for (let i = CurrIdxDAPerc.current + 1; i < 12; i++) {
                  DAPerc[i] = e.target.value;
                }
                setDAPerc([...DAPerc]);
              }}
            />
          </div>

          {/* displaying DA */}
          <div className="text-center py-2 w-36 px-4">
            {Math.round(DA[month.id])}
          </div>

          {/* setting HRA */}
          <div className="text-center py-2 w-36 px-4 ">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={HRA[month.id]}
              onChange={(e) => {
                CurrIdxHRA.current = month.id;
                HRA[CurrIdxHRA.current] = e.target.value;
                for (let i = CurrIdxHRA.current + 1; i < 12; i++) {
                  HRA[i] = e.target.value;
                }
                setHRA([...HRA]);
              }}
            />
          </div>

          {/* setting OtherAllowance */}
          <div className="text-center py-2 w-36 px-4 ">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={OtherAllowance[month.id]}
              onChange={(e) => {
                CurrIdxOtherAllowance.current = month.id;
                OtherAllowance[CurrIdxOtherAllowance.current] = e.target.value;
                for (let i = CurrIdxOtherAllowance.current + 1; i < 12; i++) {
                  OtherAllowance[i] = e.target.value;
                }
                setOtherAllowance([...OtherAllowance]);
              }}
            />
          </div>

          {/* displaying TotalPositiveSalary */}
          <div className="text-center py-2 w-36 px-4 ">
            {Math.round(TotalPositiveSalary[month.id])}
          </div>

          {/* displaying NPS or GPF */}
          <NPSGPFScreen monthID={month.id} NPSApplicable={NPSApplicable} />

          {/* setting GIS */}
          <div className="text-center py-2 w-36 px-4">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={GIS[month.id]}
              onChange={(e) => {
                CurrIdxGIS.current = month.id;
                GIS[CurrIdxGIS.current] = e.target.value;
                for (let i = CurrIdxGIS.current + 1; i < 12; i++) {
                  GIS[i] = e.target.value;
                }
                setGIS([...GIS]);
              }}
            />
          </div>

          {/* setting TDS */}
          <div className="text-center py-2 w-36 px-4 ">
            <input
              type="number"
              min="0"
              className="w-24 text-center outline-none"
              value={TDS[month.id]}
              onChange={(e) => {
                CurrIdxTDS.current = month.id;
                TDS[CurrIdxTDS.current] = e.target.value;
                for (let i = CurrIdxTDS.current + 1; i < 12; i++) {
                  TDS[i] = e.target.value;
                }
                setTDS([...TDS]);
              }}
            />
          </div>

          {/* displaying totalNegative */}
          <div className="text-center py-2 w-36 px-4 ">
            {Math.round(TotalNegativeSalary[month.id])}
          </div>

          {/* displaying NetSalary */}
          <div className="text-center py-2 w-36 px-4 ">
            {Math.round(NetSalary[month.id])}
          </div>

          {/* displaying NPS By Employer */}
          <EmployeeContributionScreen monthID={month.id} NPSApplicable={NPSApplicable} />

        </div>
      ))}

      <div className="flex flex-row mt-8">
        <div className="w-[60%] h-36 bg-yellow-100">
          <ArrearsComponent
            Basicpay={Basicpay}
            DAPerc={DAPerc}
            Arrears={Arrears}
            NPSApplicable={NPSApplicable}
          />
        </div>
        <div className="w-[40%] h-36 bg-green-300">
          <BonusComponent myBonus={Bonus} NPSApplicable={NPSApplicable} />
        </div>
      </div>
    </div>
  );
}
