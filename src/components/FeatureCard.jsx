export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start gap-y-7 border border-slate-900 p-9 rounded-2xl">
      <span className="text-neutral-400 stroke-current h-8 w-8">{icon}</span>
      <div>
        <h3 className="font-bold mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
