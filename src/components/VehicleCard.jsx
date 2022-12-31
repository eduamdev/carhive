export default function VehicleCard({ vehicle }) {
  const { details, brand, model, image, year } = vehicle;

  return (
    <div className="h-full flex flex-col border border-slate-900 rounded-2xl">
      <div
        className="h-52 w-full bg-cover bg-center bg-no-repeat border border-neutral-900 rounded-xl"
        style={{
          backgroundImage: `url(/images/${image})`,
        }}
      ></div>
      <div className="w-full flex flex-col items-stretch p-5">
        <div className="w-full flex flex-row items-baseline justify-between gap-x-3 mb-9">
          <div>
            <p className="big font-bold uppercase">{brand}</p>
            <p>
              {model} {year}
            </p>
          </div>
          <div>
            <p>${details.price}</p>
            <p className="font-light">/ day</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-3">
          <button>See details</button>
          <button>Rent now</button>
        </div>
      </div>
    </div>
  );
}
