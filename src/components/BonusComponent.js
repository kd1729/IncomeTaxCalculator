import React, { useState } from "react";

export default function BonusComponent({ myBonus, NPSApplicable }) {
  const [Bonus, setBonus] = useState(0);
  const [BonusGPF, setBonusGPF] = useState(0);

  return (
    <div className="flex justify-center mb-20 font-semibold bg-green-300 py-8">
      <div className="text-3xl mr-4">Enter your bonus</div>

      <div>
        <input
          type="number"
          min="0"
          className="w-48 text-4xl text-center outline-none "
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

      <div className="text-3xl ml-4">GPF: {Math.round(BonusGPF)}</div>
    </div>
  );
}
