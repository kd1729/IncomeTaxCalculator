export default function SalaryHeader() {
  return (
    <div className="flex flex-row gap-6 text-lg font-semibold bg-gray-300 py-4">
      <div className="text-center bg-pink-100 px-4 py-2 w-24">Month</div>
      <div className="text-center bg-pink-100 px-4 py-2 w-24">Grade Pay</div>

      {/*  positives */}
      <div className="text-center bg-green-200 px-4 py-2 w-24">Basic Pay</div>
      <div className="text-center bg-green-200 px-4 py-2 w-24">DA %</div>
      <div className="text-center bg-green-200 px-4 py-2 w-24">DA Amount</div>
      <div className="text-center bg-green-200 px-4 py-2 w-24">HRA</div>
      <div className="text-center bg-green-200 px-4 py-2 w-24">Bonus</div>
      <div className="text-center bg-green-200 px-4 py-2 w-24">Others</div>
      <div className="text-center bg-green-400 px-4 py-2 w-24">Total +</div>

      {/*  negatives */}
      <div className="text-center bg-red-200 px-4 py-2 w-24">NPS</div>
      <div className="text-center bg-red-200 px-4 py-2 w-24">PF</div>
      <div className="text-center bg-red-200 px-4 py-2 w-24">GIS</div>
      <div className="text-center bg-red-200 px-4 py-2 w-24">TDS</div>
      <div className="text-center bg-red-400 px-4 py-2 w-24">Total -</div>

      {/*  total */}
      <div className="text-center bg-pink-100 px-4 py-2 w-24">Total</div>

      <div className="text-center bg-pink-100 px-4 py-2 w-24">NPS Part2</div>
    </div>
  );
}
