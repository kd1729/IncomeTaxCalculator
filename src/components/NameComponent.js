
export default function NameComponent({ heading, profile, setProfile, value }) {
  return (
    <div>
      <span className="text-2xl font-semibold pr-4">{heading} : </span>
      <input
        className="pl-2 h-10 text-xl"
        type="text"
        value={profile[value]}
        onChange={(e) => setProfile({ ...profile, [value]: e.target.value })}
      />
    </div>
  );
}
