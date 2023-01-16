export default function NameComponent({name}) {
  return (
    <div>
      <span className="text-2xl font-semibold pr-4">{name} : </span>
      <input className="pl-2 h-10 text-xl" type="text" />
    </div>
  );
}
