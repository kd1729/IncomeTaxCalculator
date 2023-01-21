
export default function NameComponent({ heading, profile, setProfile, value }) {
  return (
    <div>
      <span className="text-xl font-semibold pr-4 text-[#eeeeee]">{heading} : </span>
      <input
        className="pl-2 h-8 text-xl outline-none"
        type="text"
        value={profile[value]}
        onChange={(e) => setProfile({ ...profile, [value]: e.target.value })}
      />
    </div>
  );
}
