
export default function BonusComponent({ myBonus, setBonus, NPSApplicable }) {

  const BonusGPFComponent = () => {
    if (!NPSApplicable) {
      return (
        <div className="flex flex-row">
          <div className="text-xl ml-20">
            GPF on Bonus: {Math.round(myBonus.BonusGPF)}
          </div>
          <div className="text-xl ml-20">
            Remaining Bonus: {myBonus.Bonus - Math.round(myBonus.BonusGPF)}
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
          value={myBonus.Bonus}
          onChange={(e) => {
            setBonus(e.target.value);
            myBonus.Bonus = e.target.value;
            if (!NPSApplicable) {
              setBonus({
                ...myBonus,
                BonusGPF: e.target.value * myBonus.GPFPerc,
              })
            } else {
              setBonus({
                ...myBonus,
                BonusGPF: 0,
            })
                 
          }
          }}
        />

      </div>
      <BonusGPFComponent />
    </div>
  );
}
