import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TaxCalculator() {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  const [taxSchemeOld, setTaxSchemeOld] = useState(true);

  const [interestHomeOther, setInterestHomeOther] = useState(0);
  const [sakalYogPraptiyan, setSakalYogPraptiyan] = useState(0);
  const [totalHRAPaid, setTotalHRAPaid] = useState(0);
  const [homeInterestPaid, setHomeInterestPaid] = useState(0);

  useEffect(() => {
    setSakalYogPraptiyan(
      parseInt(state.totalPositiveSalary) +
        parseInt(state.totalNPSByEmp) +
        parseInt(interestHomeOther) || 0
    );
  }, [state, interestHomeOther]);

  return (
    <div>
      <div>
        {/* Toggle Button */}
        <div className="flex flex-row gap-4 justify-center my-16">
          <div className="flex flex-row ">
            <label className=" font-bold text-3xl text-white">
              Old Scheme{" "}
            </label>
            <input
              type="checkbox"
              className="ml-2 w-8 hover:cursor-pointer"
              checked={taxSchemeOld}
              onChange={(e) => setTaxSchemeOld((e) => !e)}
            />
          </div>

          <div className="flex flex-row">
            <label className=" font-bold text-3xl text-white">
              New Scheme{" "}
            </label>
            <input
              type="checkbox"
              className="ml-2 w-8 hover:cursor-pointer"
              checked={!taxSchemeOld}
              onChange={(e) => setTaxSchemeOld((e) => !e)}
            />
          </div>
        </div>
      </div>

      {/* Section A  : Praptiyan */}

      <h1 className="text-2xl">(A) प्राप्तियाँ</h1>

      <div className="grid grid-cols-2 text-gray-300">
        <div>वेतन से कुल आय</div>
        <div>{state.totalPositiveSalary}</div>
        <div>NPS में नियोक्ता अंशदान</div>
        <div>{state.totalNPSByEmp}</div>
        <div>ब्याज, मकान किराया से व अन्य प्राप्तियाँ</div>
        <div>
          <input
            type="number"
            className="w-32 outline-none"
            defaultValue={0}
            value={interestHomeOther}
            onChange={(e) => setInterestHomeOther(e.target.value)}
          />
        </div>
        <div>सकल योग प्राप्ति</div>
        <div>{sakalYogPraptiyan}</div>
      </div>


      {/* Section B : Katotiyan avam choot */}

      <h1 className="text-2xl">(B)कटौतियाँ एवं छूट</h1>

      <div className="grid grid-cols-2 text-gray-300">
        <div>
          (1) धारा 80 CCD(2) NPS टियर1 में नियोक्ता अंशदान (लिमिट वेतन और मँहगाई
          के 14% तक)
        </div>
        <div>{state.totalNPSByEmp}</div>
        <div>(2) शेष आय </div>
        <div>{sakalYogPraptiyan - state.totalNPSByEmp}</div>
      </div>

            {/* section 3a */}
      <h1 className="text-2xl">(3)(a) धारा 10(13A) के अन्तर्गत HRA में छूट का आगणन</h1>
      <div className="grid grid-cols-2 text-gray-300">
          <div>(3)(a)(1) प्राप्त HRA</div>
          <div>{state.totalHRA}</div>

          <div>Annual Paid HRA</div>
          <div>
            <input
              type="number"
              className="w-32 outline-none"
              defaultValue={0}
              value={totalHRAPaid}
              onChange={(e) => setTotalHRAPaid(e.target.value)}
            />
          </div>

          <div>(3)(a)(2) वेतन के 10% से अधिक अदा किया गया HRA</div>
          <div>{ Math.max(0, parseInt(totalHRAPaid - state.totalBasePay*0.1))} </div>

          <div>(3)(a)(3) वेतन का 40%</div>
          <div>{ parseInt(state.totalBasePay * 0.4) }</div>

          <div>(3)(a)(4) छूट हेतु उक्त में न्यूनतम राशि</div>
          <div>{Math.max(totalHRAPaid, Math.max(0, parseInt(totalHRAPaid - state.totalBasePay*0.1))) }</div>

          <div>(3)(b) धारा 24 के अन्तर्गत आवास ऋण के ब्याज का भुगतान</div>
          <div>
            <input
              type="number"
              className="w-32 outline-none"
              defaultValue={0}
              value={homeInterestPaid}
              onChange={(e) => setHomeInterestPaid(e.target.value)}
            />
          </div>

          <div>(4) मानक कटौती</div>
          <div>50000</div>
      

      </div>




    </div>
  );
}
