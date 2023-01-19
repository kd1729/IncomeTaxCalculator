export default function ArrearsComponent({ Basicpay, DAPerc, Arrears, NPSApplicable}) {
  var count = 3;
  var i;

  for (i = 0; i < 12; i++) {
    if (DAPerc[i] === DAPerc[i + 1]) {
      count++;
    } else {
      Arrears.current.Arrear1 =
        (count * (DAPerc[i + 1] - DAPerc[i]) * Basicpay[i]) / 100;
      count = 1;
      break;
    }
  }

  for (let j = i + 1; j < 12; j++) {
    if (DAPerc[j] === DAPerc[j + 1]) {
      count++;
    } else {
      Arrears.current.Arrear2 =
        (count * (DAPerc[j + 1] - DAPerc[j]) * Basicpay[j]) / 100;
      count = 0;
      break;
    }
  }



if(NPSApplicable) {
    Arrears.current.Arrear1NPS = Arrears.current.Arrear1 * 0.1;
    Arrears.current.Arrear2NPS = Arrears.current.Arrear2 * 0.1;
    Arrears.current.Arrear1NPSByEmp = Arrears.current.Arrear1 * .14;
    Arrears.current.Arrear2NPSByEmp = Arrears.current.Arrear2 * .14;
    Arrears.current.Arrear1GPF = 0;
    Arrears.current.Arrear2GPF = 0;
} else {
    Arrears.current.Arrear1GPF = Arrears.current.Arrear1 * 0.1;
    Arrears.current.Arrear2GPF = Arrears.current.Arrear2 * 0.1;
    Arrears.current.Arrear1NPSByEmp = 0;    
    Arrears.current.Arrear2NPSByEmp = 0;
    Arrears.current.Arrear1NPS = 0;
    Arrears.current.Arrear2NPS = 0;
}

Arrears.current.Arrear1Total = Arrears.current.Arrear1 - Arrears.current.Arrear1NPS - Arrears.current.Arrear1GPF;
Arrears.current.Arrear2Total = Arrears.current.Arrear2 - Arrears.current.Arrear2NPS - Arrears.current.Arrear2GPF;


  return (
    <div className="mb-20 flex flex-row items-center justify-center gap-40 pb-4 bg-yellow-100">
      <div>
        <h3 className="text-xl font-bold mt-4">Arrears</h3>
        <p className="text-lg font-bold">Arrear 1: {Math.round(Arrears.current.Arrear1)}</p>
        <p className="text-lg font-bold">Arrear 2: {Math.round(Arrears.current.Arrear2)}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mt-4">Arrears NPS</h3>
        <p className="text-lg font-bold">Arrear 1: {Math.round(Arrears.current.Arrear1NPS)}</p>
        <p className="text-lg font-bold">Arrear 2: {Math.round(Arrears.current.Arrear2NPS)}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mt-4">Arrears GPF</h3>
        <p className="text-lg font-bold">Arrear 1: {Math.round(Arrears.current.Arrear1GPF)}</p>
        <p className="text-lg font-bold">Arrear 2: {Math.round(Arrears.current.Arrear2GPF)}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mt-4">Arrears Final</h3>
        <p className="text-lg font-bold">Arrear 1: {Math.round(Arrears.current.Arrear1Total)}</p>
        <p className="text-lg font-bold">Arrear 2: {Math.round(Arrears.current.Arrear2Total)}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mt-4">Arrears NPS By Employee</h3>
        <p className="text-lg font-bold">Arrear 1: {Math.round(Arrears.current.Arrear1NPSByEmp)}</p>
        <p className="text-lg font-bold">Arrear 2: {Math.round(Arrears.current.Arrear2NPSByEmp)}</p>
      </div>
    </div>
  );
}
