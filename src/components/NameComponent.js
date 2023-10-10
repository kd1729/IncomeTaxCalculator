export default function NameComponent({ heading, profile, setProfile, value }) {
  return (
    <div className="teacher--class">
      <span className="text-xl font-semibold pr-4 text-[#eeeeee] teacher-name--class">
        {heading} :{" "}
      </span>
      <input
        className="pl-2 h-8 text-xl outline-none label--class"
        type="text"
        value={profile[value]}
        onChange={(e) => setProfile({ ...profile, [value]: e.target.value })}
      />
    </div>
  );
}
