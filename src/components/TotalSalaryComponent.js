import { useEffect, useState, useRef } from "react";

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

export default function TotalSalaryComponent() {
  const [Basepay, setBasepay] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const CurrIdx = useRef(0);

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
              value={Basepay[month.id]}
              onChange={(e) => {
                CurrIdx.current = month.id;
                Basepay[CurrIdx.current] = e.target.value;
                for (let i = CurrIdx.current + 1; i < 12; i++) {
                  Basepay[i] = e.target.value;
                }

                setBasepay([...Basepay]);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
