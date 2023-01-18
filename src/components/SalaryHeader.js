export default function SalaryHeader() {
  return (
    <div className="flex flex-row gap-8 text-lg font-semibold bg-gray-300 p-8">
      <div className="px-4 py-2">Month</div>
      <div className="px-4 py-2">Grade Pay</div>

      {/*  positives */}
      <div className="bg-green-200 px-4 py-2">Basic Pay</div>
      <div className="bg-green-200 px-4 py-2">DA %</div>
      <div className="bg-green-200 px-4 py-2">DA Amount</div>
      <div className="bg-green-200 px-4 py-2">HRA</div>
      <div className="bg-green-200 px-4 py-2">Bonus</div>
      <div className="bg-green-200 px-4 py-2">Others</div>
      <div className="bg-green-400 px-4 py-2">Total +</div>

      {/*  negatives */}
      <div className="bg-red-200 px-4 py-2">NPS</div>
      <div className="bg-red-200 px-4 py-2">GIS</div>
      <div className="bg-red-200 px-4 py-2">TDS</div>
      <div className="bg-red-400 px-4 py-2">Total -</div>

      {/*  total */}
      <div className="px-4 py-2">Total</div>

      <div className="px-4 py-2">NPS Part2</div>
    </div>
  );
}
