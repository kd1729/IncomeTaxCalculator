import React, { useState } from "react";

export default function BonusComponent({ myBonus, NPSApplicable }) {
  const [Bonus, setBonus] = useState(0);
  const [BonusGPF, setBonusGPF] = useState(0);

  const BonusGPFComponent = () => {
    if (!NPSApplicable) {
      return (
        <div className="flex flex-row">
          <div className="text-xl ml-20">
            GPF on Bonus: {Math.round(BonusGPF)}
          </div>
          <div className="text-xl ml-20">
            Remaining Bonus: {Bonus - Math.round(BonusGPF)}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="mt-2 flex flex-col items-center mb-20 font-semibold gap-4">
      <div className="text-2xl mr-4">Enter your bonus : </div>

      <div>
        <input
          type="number"
          min="0"
          className="w-28 text-xl text-center outline-none "
          value={Bonus}
          onChange={(e) => {
            setBonus(e.target.value);
            myBonus.current.Bonus = e.target.value;
            if (!NPSApplicable) {
              setBonusGPF(e.target.value * myBonus.current.GPFPerc);
              myBonus.current.BonusGPF =
                e.target.value * myBonus.current.GPFPerc;
            } else {
              setBonusGPF(0);
              myBonus.current.BonusGPF = 0;
            }
          }}
        />
      </div>
      <BonusGPFComponent />
    </div>
  );
}
