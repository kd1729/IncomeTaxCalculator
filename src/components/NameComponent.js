
export default function NameComponent({ heading, profile, setProfile, value }) {
  return (
    <div className="">
      <div className=" w-60 text-lg  font-semibold pr-4 text-black">{heading} : </div>
      <input
        className="pl-2 h-8 text-xl text-blue-800 outline-none border-2 border-slate-600"
        type="text"
        value={profile[value]}
        onChange={(e) => setProfile({ ...profile, [value]: e.target.value })}
      />
    </div>
  );
}
