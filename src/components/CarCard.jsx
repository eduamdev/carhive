export default function CarCard() {
  return (
    <div className="flex flex-col items-start gap-y-5 border border-slate-900 p-8 rounded-2xl">
      <span className="h-52 w-full border border-neutral-900 rounded-xl"></span>
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-between mb-9">
          <div>
            <p className="big font-bold">Car Brand</p>
            <p>Car model</p>
          </div>
          <div>
            <p>$300</p>
            <p>/ day</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button>See details</button>
          <button>Rent now</button>
        </div>
      </div>
    </div>
  );
}
