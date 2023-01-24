const features = [
  {
    key: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
    title: "Security, from start to finish",
    text: "Our fleet is regularly updated with the latest models from top manufacturers, ensuring that you're driving a safe and reliable vehicle.",
  },
  {
    key: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
    title: "We are supporting initiatives that promote energy efficiency",
    text: "We are committed to reducing our carbon footprint through investment in clean technologies and contributing to environmental projects.",
  },
  {
    key: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <circle
          cx="256"
          cy="160"
          r="128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M143.65 227.82 48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M366.54 224 464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="160"
          r="64"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
    title: "Awarded for America's Best Customer Service 2022",
    text: "We are committed to providing you with a unique and satisfactory rental experience. We offer a wide variety of rental options and a large selection of vehicles, as well as competitive rates.",
  },
  {
    key: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M256 48v416m208-208H48"
        />
      </svg>
    ),
    title: "20,000 Pickup Locations Worldwide",
    text: "With our easy-to-use online booking system, you can reserve your car in minutes and have it delivered to your doorstep or at the airport.",
  },
  {
    key: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect
          x="128"
          y="16"
          width="256"
          height="480"
          rx="48"
          ry="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
    title: "iOS App",
    text: "Compare prices, make vehicle reservations and more wherever you are.",
  },
  {
    key: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <circle
          cx="256"
          cy="256"
          r="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="m208 54 8 132m80 0 8-132m-96 404 8-132m80 0 8 132m154-250-132 8m0 80 132 8M54 208l132 8m0 80-132 8"
        />
      </svg>
    ),
    title: "24/7 Road Assistence",
    text: "Our friendly customer service team is always available to assist you with any questions or concerns.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-10">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Features</h2>
        <p className="big">
          Book your car rental today and experience the ultimate in convenience
          and comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-20">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start gap-y-7 border border-slate-900 px-7 py-8 rounded-2xl">
      <span className="text-neutral-400 stroke-current h-8 w-8">{icon}</span>
      <div>
        <h3 className="font-bold mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
