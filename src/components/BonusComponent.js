export default function BonusComponent({ myBonus, setBonus, NPSApplicable }) {
  const BonusGPFComponent = () => {
    if (!NPSApplicable) {
      return (
        <div className="text-xl">
          GPF on Bonus: {Math.round(myBonus.BonusGPF)}
        </div>
      );
    } else {
      return <div className="text-xl ml-20">NPS on Bonus: N/A</div>;
    }
  };

  return (
    <div className="flex flex-row px-20 font-semibold bg-[#d6f7da] items-center justify-around h-[100%]">
      <div className="flex flex-col">
        <div className="text-xl mb-2">Enter your bonus </div>
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
                });
              } else {
                setBonus({
                  ...myBonus,
                  BonusGPF: 0,
                });
              }
            }}
          />
        </div>
      </div>
      <BonusGPFComponent />
    </div>
  );
}
