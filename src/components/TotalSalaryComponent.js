import { useState, useEffect, useRef } from "react";

import SalaryHeader from "./SalaryHeader";

const months = [
  { id: 0, name: "January" },
  { id: 1, name: "February" },
  { id: 2, name: "March" },
  { id: 3, name: "April" },
  { id: 4, name: "May" },
  { id: 5, name: "June" },
  { id: 6, name: "July" },
  { id: 7, name: "August" },
  { id: 8, name: "September" },
  { id: 9, name: "October" },
  { id: 10, name: "November" },
  { id: 11, name: "December" },
];

export default function TotalPositiveSalaryComponent() {
  const [Gradepay, setGradepay] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxGradepay = useRef(0);

  const [Basicpay, setBasicpay] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxBasicpay = useRef(0);

  const [DAPerc, setDAPerc] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxDAPerc = useRef(0);

  const [DA, setDA] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [HRA, setHRA] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxHRA = useRef(0);

  const [Bonus, setBonus] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdxBonus = useRef(0);

  const [OtherAllowance, setOtherAllowance] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const CurrIdxOtherAllowance = useRef(0);

  const [TotalPositiveSalary, setTotalPositiveSalary] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      TotalPositiveSalary[i] =
        parseFloat(Basicpay[i]) +
        parseFloat(DA[i]) +
        parseFloat(HRA[i]) +
        parseFloat(Bonus[i]) +
        parseFloat(OtherAllowance[i]);
    }
    setTotalPositiveSalary([...TotalPositiveSalary]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ Basicpay, DA, HRA, Bonus, OtherAllowance]);


  return (
    <div className="flex flex-col">
      <SalaryHeader />

      {months.map((month) => (
        <div className="flex flex-row gap-6 text-base font-semibold bg-gray-300">
          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            {month.name}
          </div>

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
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

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
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

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
              value={DAPerc[month.id]}
              onChange={(e) => {
                CurrIdxDAPerc.current = month.id;
                DAPerc[CurrIdxDAPerc.current] = e.target.value;
                DA[month.id] = (parseFloat(DAPerc[month.id]) * parseFloat(Basicpay[month.id])) / 100;
                for (let i = CurrIdxDAPerc.current + 1; i < 12; i++) {
                  DAPerc[i] = e.target.value;
                  DA[i] = (parseFloat(DAPerc[i]) * parseFloat(Basicpay[i])) / 100;
                }
                setDAPerc([...DAPerc]);
                setDA([...DA]);
              }}
            />
          </div>

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            {DA[month.id]}
          </div>

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
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

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
              value={Bonus[month.id]}
              onChange={(e) => {
                CurrIdxBonus.current = month.id;
                Bonus[CurrIdxBonus.current] = e.target.value;
                for (let i = CurrIdxBonus.current + 1; i < 12; i++) {
                  Bonus[i] = e.target.value;
                }
                setBonus([...Bonus]);
              }}
            />
          </div>

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            <input
              type="number"
              className="w-24 text-center"
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

          <div className="text-center py-2 my-2 w-24 bg-slate-200">
            {TotalPositiveSalary[month.id]}
          </div>

        </div>
      ))}
    </div>
  );
}
