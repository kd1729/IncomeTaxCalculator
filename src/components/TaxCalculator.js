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
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);

  const [PPFNSCFD, setPPFNSCFD] = useState(0);
  const [LICPLI, setLICPLI] = useState(0);
  const [sukanyaSamriddhi, setSukanyaSamriddhi] = useState(0);
  const [tutionFee, setTutionFee] = useState(0);
  const [homeLoanPrincipal, setHomeLoanPrincipal] = useState(0);
  const [Others, setOthers] = useState(0);
  const [total5A, setTotal5A] = useState(0);

  useEffect(() => {
    setSakalYogPraptiyan(
      parseInt(state.totalPositiveSalary) +
        parseInt(state.totalNPSByEmp) +
        parseInt(interestHomeOther) || 0
    );
  }, [state, interestHomeOther]);

  useEffect(() => {
    setTotal5A(
      parseInt(PPFNSCFD) +
        parseInt(LICPLI) +
        parseInt(sukanyaSamriddhi) +
        parseInt(tutionFee) +
        parseInt(homeLoanPrincipal) +
        parseInt(Others) || 0
    );
  }, [
    PPFNSCFD,
    LICPLI,
    sukanyaSamriddhi,
    tutionFee,
    homeLoanPrincipal,
    Others,
  ]);

  const [_3a1, set_3a1] = useState(0);
  const [_3a2, set_3a2] = useState(0);
  const [_3a3, set_3a3] = useState(0);
  const [_3a4, set_3a4] = useState(0);

  useEffect(() => {
    set_3a1(state.totalHRA);
  }, [state.totalHRA]);
  useEffect(() => {
    set_3a2(Math.max(0, parseInt(totalHRAPaid - state.totalBasePay * 0.1)));
  }, [totalHRAPaid, state.totalBasePay]);
  useEffect(() => {
    set_3a3(parseInt(state.totalBasePay * 0.4));
  }, [state.totalBasePay]);
  useEffect(() => {
    set_3a4(Math.min(_3a1, _3a2, _3a3));
  }, [_3a1, _3a2, _3a3]);

  const [_5a1, set_5a1] = useState(0);
  const [_5a2, set_5a2] = useState(0);
  const [_5a3, set_5a3] = useState(0);
  const [_5a4, set_5a4] = useState(0);
  const [_5a5, set_5a5] = useState(0);

  useEffect(() => {
    set_5a1(Math.min(150000, total5A));
  }, [total5A]);
  useEffect(() => {
    set_5a2( (state.totalNPS >= 50000 ? state.totalNPS - 50000 : 0) || 0);
  }, [state.totalNPS]);
  useEffect(() => {
    set_5a3( (Math.min(150000, _5a1 + _5a2)) || 0);
  }, [_5a1, _5a2]);
  useEffect(() => {
    set_5a4( (state.totalNPS >= 50000 ? 50000 : state.totalNPS) || 0);
  }, [state.totalNPS]);
  useEffect(() => {
    set_5a5(Math.min(200000, _5a3 + _5a4) || 0);
  }, [_5a3, _5a4]);

  const [_5b, set_5b] = useState(0);
  const [_5c, set_5c] = useState(0);
  const [_5d, set_5d] = useState(0);
  const [_5e, set_5e] = useState(0);
  const [_5f, set_5f] = useState(0);
  const [_5g, set_5g] = useState(0);
  const [_5h, set_5h] = useState(0);

  const [totalKautati, setTotalKautati] = useState(0);
  useEffect(() => {
    setTotalKautati(
      parseInt(_3a4) +
        parseInt(homeLoanInterest) +
        50000 +
        parseInt(_5a5) +
        parseInt(_5b) +
        parseInt(_5c) +
        parseInt(_5d) +
        parseInt(_5e) +
        parseInt(_5f) +
        parseInt(_5g) +
        parseInt(_5h) || 0
    );
  }, [_3a4, homeLoanInterest, _5a5, _5b, _5c, _5d, _5e, _5f, _5g, _5h]);

  return (
    <div className="text-black">
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

      <div className="my-4">
        {/* Section A  : Praptiyan */}

        <h1 className="text-2xl">(A) प्राप्तियाँ</h1>

        <div className="grid grid-cols-2 ">
          <div>वेतन से कुल आय</div>
          <div>{state.totalPositiveSalary || 0}</div>
          <div>NPS में नियोक्ता अंशदान</div>
          <div>{state.totalNPSByEmp || 0}</div>
          <div>ब्याज, मकान किराया से व अन्य प्राप्तियाँ</div>
          <div>
            <input
              type="number"
              className="w-32 outline-none border-2 border-slate-600"
              defaultValue={0}
              value={interestHomeOther}
              onChange={(e) => setInterestHomeOther(e.target.value)}
            />
          </div>
          <div>सकल योग प्राप्ति</div>
          <div>{sakalYogPraptiyan}</div>
        </div>
      </div>

      <div className="my-4">
        {/* Section B : Katotiyan avam choot */}

        <h1 className="text-2xl">(B)कटौतियाँ एवं छूट</h1>

        <div className="grid grid-cols-2 ">
          <div>
            (1) धारा 80 CCD(2) NPS टियर1 में नियोक्ता अंशदान (लिमिट वेतन और
            मँहगाई के 14% तक)
          </div>
          <div>{state.totalNPSByEmp || 0}</div>
          <div>(2) शेष आय </div>
          <div>{sakalYogPraptiyan - state.totalNPSByEmp || 0}</div>
        </div>

        <div className="my-4">
          {/* section 3a */}
          <h1 className="text-2xl">
            (3)(a) धारा 10(13A) के अन्तर्गत HRA में छूट का आगणन
          </h1>
          <div className="grid grid-cols-2 ">
            <div>(3)(a)(1) प्राप्त HRA</div>
            <div>{_3a1}</div>

            <div>Annual Paid HRA</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={totalHRAPaid}
                onChange={(e) => setTotalHRAPaid(e.target.value)}
              />
            </div>

            <div>(3)(a)(2) वेतन के 10% से अधिक अदा किया गया HRA</div>
            <div>{_3a2}</div>

            <div>(3)(a)(3) वेतन का 40%</div>
            <div>{_3a3}</div>

            <div>(3)(a)(4) छूट हेतु उक्त में न्यूनतम राशि</div>
            <div>{_3a4}</div>

            <div>(3)(b) धारा 24 के अन्तर्गत आवास ऋण के ब्याज का भुगतान</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={homeLoanInterest}
                onChange={(e) => setHomeLoanInterest(e.target.value)}
              />
            </div>

            <div>(4) मानक कटौती</div>
            <div>50000</div>
          </div>
        </div>

        {/* B(5)(a)(1) हेतु धारा 80 C में निवेश का विवरण */}

        <div className="my-4">
          <h1 className="text-2xl">
            (5)(a)(1) हेतु धारा 80 C में निवेश का विवरण
          </h1>
          <div className="grid grid-cols-2">
            <div>GPF </div>
            <div>{state.totalGPF}</div>
            <div>GIS</div>
            <div>{state.totalGIS}</div>
            <div>PPF/NSC/ टैक्स सेविंग FD/ म्यूचुअल फण्ड</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={PPFNSCFD}
                onChange={(e) => setPPFNSCFD(e.target.value)}
              />
            </div>
            <div>LIC / PLI व अन्य जीवन बीमा प्रीमियम </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={LICPLI}
                onChange={(e) => setLICPLI(e.target.value)}
              />
            </div>
            <div>ट्यूशन फीस </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={tutionFee}
                onChange={(e) => setTutionFee(e.target.value)}
              />
            </div>

            <div>सुकन्या समृद्धि योजना में निवेश </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={sukanyaSamriddhi}
                onChange={(e) => setSukanyaSamriddhi(e.target.value)}
              />
            </div>
            <div>
              आवास ऋण में जमा मूलधन/ गृह सम्पत्ति की खरीद में स्टाम्प ड्यूटी
            </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={homeLoanPrincipal}
                onChange={(e) => setHomeLoanPrincipal(e.target.value)}
              />
            </div>

            <div>अन्य कोई निवेश </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={Others}
                onChange={(e) => setOthers(e.target.value)}
              />
            </div>
            <div>B(5)(a)(1) हेतु कुल योग 80 C (लिमिट 1.5 लाख) </div>
            <div>{total5A}</div>
          </div>
        </div>

        {/* Section (5) अन्य कर छूट विवरण:- */}
        <div className="my-4">
          <h1 className="text-2xl">(5) अन्य कर छूट विवरण:-</h1>
          <div className="grid grid-cols-2">
            <div>(5)(a)(1) धारा 80 C के अन्तर्गत कुल निवेश(लिमिट1.5लाख)</div>
            <div>{_5a1}</div>
            <div>(5)(a)(2) धारा 80 CCD(1) NPS टियर1 में अंशदान</div>
            <div>{_5a2}</div>
            <div>(5)(a)(3) योग धारा 80 C + 80 CCD(1) (लिमिट 1.5 लाख)</div>
            <div>{_5a3}</div>
            <div>
              (5)(a)(4) धारा 80 CCD(1B) NPS टियर1 में 50 हजार तक अतिरिक्त निवेश
            </div>
            <div>{_5a4}</div>
            <div>
              (5)(a)(5) योग धारा 80 C + 80 CCD(1) + 80 CCD(1B) (लिमिट 2 लाख)
            </div>
            <div>{_5a5}</div>

            <div>(5)(b) धारा 80 D स्वास्थ्य बीमा</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5b}
                onChange={(e) => set_5b(e.target.value)}
              />
            </div>

            <div>(5)(c) धारा 80 DD (आश्रित विकलांग)</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5c}
                onChange={(e) => set_5c(e.target.value)}
              />
            </div>

            <div>(5)(d) धारा 80 DDB (विशिष्ट रोगों की चिकित्सा पर व्यय)</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5d}
                onChange={(e) => set_5d(e.target.value)}
              />
            </div>

            <div>(5)(e) धारा 80 DDU (स्वयं विकलांग)</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5e}
                onChange={(e) => set_5e(e.target.value)}
              />
            </div>

            <div>(5)(f) धारा 80 G दान</div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5f}
                onChange={(e) => set_5f(e.target.value)}
              />
            </div>

            <div>
              (5)(g) धारा 80 TTA बचत खाता का ब्याज (वरिष्ठ नागरिक छोड़कर)
            </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5g}
                onChange={(e) => set_5g(e.target.value)}
              />
            </div>

            <div>
              (5)(h) धारा 80 TTB सावधि एवं बचत खाता का ब्याज (केवल वरिष्ठ
              नागरिक)
            </div>
            <div>
              <input
                type="number"
                className="w-32 outline-none border-2 border-slate-600"
                defaultValue={0}
                value={_5h}
                onChange={(e) => set_5h(e.target.value)}
              />
            </div>

            <div>
              {/* [(1)+(3(a)(4)+3(b)+(4)+(5)(a)(5)+(5)(b)से(5)(h) */}
              (6) सकल कटौती योग
            </div>
            <div>{totalKautati}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
