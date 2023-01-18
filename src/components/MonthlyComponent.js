import { useState } from "react";



export default function MonthlyComponent() {
  const [EmployeeData, setEmployeeData] = useState({
    basePay: 0,
    daPercent: 0,
    HRA: 0,
    bonus: 0,
    GIS: 0,
    TDS: 0,
  });

  return <div></div>;
}
