export default function SalaryHeader() {
  return (
    <div className="flex flex-row gap-6 text-xl font-bold bg-gray-300 py-4 items-center">
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24">Month</div>
      <div className="text-cente text-blue-600 px-4 py-2 w-36 h-24">Grade Pay</div>

      {/*  positives */}
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24">Basic Pay</div>
      <div className="text-center text-blue-600  px-4 py-2 w-36 h-24">DA %</div>
      <div className="text-center text-emerald-600  px-4 py-2 w-36 h-24">DA Amount</div>
      <div className="text-center text-emerald-600  px-4 py-2 w-36 h-24">HRA</div>
      <div className="text-center text-emerald-600  px-4 py-2 w-36 h-24">Bonus</div>
      <div className="text-center text-emerald-600  px-4 py-2 w-36 h-24">Others</div>
      <div className="text-center text-emerald-600  px-4 py-2 w-36 h-24">Total positive</div>

      {/*  negatives */}
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24">NPS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24">GPF</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24">GIS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24">TDS</div>
      <div className="text-center text-red-500 px-4 py-2 w-36 h-24">Total negative</div>

      {/*  total */}
      <div className="text-center text-blue-600 px-4 py-2 w-36 h-24 text-2xl">Total</div>

      <div className="text-center text-black px-4 py-2 w-36 h-24">NPS Part2</div>
    </div>
  );
}
