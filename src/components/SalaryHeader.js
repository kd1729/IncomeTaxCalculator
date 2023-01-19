export default function SalaryHeader() {
  return (
    <div className="flex flex-row text-lg font-bold bg-gray-300">
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 bg-yellow-100">Month</div>
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 bg-red-100">Grade Pay</div>

      {/*  positives */}
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 bg-yellow-100">Basic Pay</div>
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 bg-red-100">DA %</div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36 h-24 bg-yellow-100">DA Amount</div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36 h-24 bg-red-100">HRA</div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36 h-24 bg-yellow-100">Others</div>
      <div className="text-center text-emerald-600 px-4 py-2 w-36 h-24 bg-red-100">Total positive</div>

      {/*  negatives */}
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24 bg-yellow-100">NPS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24 bg-red-100">GPF</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24 bg-yellow-100">GIS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24 bg-red-100">TDS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24 bg-yellow-100">Total negative</div>

      {/*  total */}
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 bg-red-100 text-2xl">Total</div>

      <div className="text-center text-black px-4 py-2 w-36 h-24 bg-yellow-100">NPS Part2</div>
    </div>
  );
}
