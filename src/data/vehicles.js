export const vehicles = [
  {
    id: "VEH001",
    slug: "tesla-model-3",
    brand: { id: "b-tesla", name: "Tesla" },
    model: "Model 3",
    year: 2021,
    description:
      "The Tesla Model 3 is a compact executive sedan that is battery powered and produced by Tesla. The base Model 3 delivers an EPA-rated all-electric range of 272 miles (438 km) and the Long Range version delivers 358 miles (576 km). According to Tesla, the Model 3 carries full self-driving hardware, with periodic software updates adding functionality.",
    color: { id: "c-white", name: "white" },
    featured: true,
    price: {
      perDay: { retailPrice: 99, discountPrice: 79 },
    },
    details: {
      transmission: "automatic",
      capacity: "5 adults",
      bags: "3 bags",
      autonomy: "272 miles (EPA est.)",
    },
    features: [
      "3.1 s 0-60 mph Aceleration",
      "Autopilot",
      '15" Center Touchscreen',
      '20" wheels',
      "Dual Motor All-Wheel Drive",
      "Air Conditioning",
    ],
    images: [
      {
        type: "cover",
        alt: "White Tesla Model 3 on a road",
        urlPath: "./assets/vehicles/tesla-model-3.jpg",
      },
      {
        type: "display",
        alt: "White Tesla Model 3 on a road",
        urlPath: "./assets/vehicles/tesla-model-3.jpg",
      },
    ],
  },
  {
    id: "VEH002",
    slug: "porsche-911",
    brand: { id: "b-porsche", name: "Porsche" },
    model: "911",
    year: 2018,
    description:
      "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension. The car has been continuously enhanced through the years but the basic concept has remained unchanged.",
    color: { id: "c-white", name: "white" },
    featured: true,
    price: {
      perDay: { retailPrice: 1199, discountPrice: 899 },
    },
    details: {
      transmission: "7-Speed Automatic",
      capacity: "2 adults",
      bags: "1 bag",
      autonomy: "EPA estimates not yet available",
    },
    features: [
      "Porsche Communication Management* (PCM) including online navigation module and Connect Plus",
      "Connect Plus* incl. wireless Apple® CarPlay and wireless Android Auto, LTE communication module, wireless internet access and numerous Porsche Connect services",
      "Integration of Apple Music®, Apple Podcasts® and Spotify®",
      "Voice Pilot with natural language understanding and activation via “Hey Porsche“",
      "Navigation Plus incl. Real time Traffic Information and Online Map Update",
      "Sound Package Plus, analog sound system, 8 loudspeakers, 150-watt total output with integral amplifier and digital signal processing",
      "Air Conditioning",
      "Track Precision App",
    ],
    images: [
      {
        type: "cover",
        alt: "White Porsche 911",
        urlPath: "./assets/vehicles/porsche-911.jpg",
      },
      {
        type: "display",
        alt: "White Porsche 911",
        urlPath: "./assets/vehicles/porsche-911.jpg",
      },
    ],
  },
  {
    id: "VEH003",
    slug: "toyota-highlander-hybrid-le",
    brand: { id: "b-toyota", name: "Toyota" },
    model: "Highlander Hybrid LE",
    year: 2023,
    description:
      "The Toyota Highlander, also known as the Toyota Kluger (Japanese: トヨタ・クルーガー, Hepburn: Toyota Kurūgā), is a mid-size crossover SUV with three-row seating produced by Toyota since 2000. Announced in April 2000 at the New York International Auto Show and arriving in late 2000 in Japan and January 2001 in North America, the Highlander became one of the first car-based mid-size SUV or mid-size crossovers.",
    color: { id: "c-black", name: "black" },
    featured: true,
    price: {
      perDay: { retailPrice: 149, discountPrice: 109 },
    },
    details: {
      transmission: "FWD, 2.5-Liter 4-cylinder Hybrid Engine, ECVT",
      capacity: "6 adults",
      bags: "5 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "Black Toyota Highlander",
        urlPath: "./assets/vehicles/toyota-highlander-hybrid-le.jpg",
      },
      {
        type: "display",
        alt: "Black Toyota Highlander",
        urlPath: "./assets/vehicles/toyota-highlander-hybrid-le.jpg",
      },
    ],
  },
  {
    id: "VEH004",
    slug: "bmw-3-series",
    brand: { id: "b-bmw", name: "BMW" },
    model: "3 Series",
    year: 2016,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    color: { id: "c-black", name: "black" },
    featured: false,
    price: {
      perDay: { retailPrice: 300 },
    },
    details: {
      transmission: "6 speed automatic transmission",
      capacity: "2 adults",
      bags: "3 bags",
      autonomy: "",
    },
    features: [
      "AUX input",
      "GPS",
      "Keyless entry",
      "Sunroof",
      "Heated Seats",
      "Air Conditioning",
      "USB input",
      "Backup camera",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "Black BMW Series 3",
        urlPath: "./assets/vehicles/bmw-3-series.jpg",
      },
      {
        type: "display",
        alt: "Black BMW Series 3",
        urlPath: "./assets/vehicles/bmw-3-series.jpg",
      },
    ],
  },
  {
    id: "VEH005",
    slug: "volkswagen-clementine-t2",
    brand: { id: "b-volkswagen", name: "Volkswagen" },
    model: "Clementine T2 Camper Van",
    year: 2011,
    description:
      "The Volkswagen Type 2, known officially (depending on body type) as the Transporter, Kombi or Microbus, or, informally, as the Bus (US), Camper (UK) or Bulli (Germany), is a forward control light commercial vehicle introduced in 1950 by the German automaker Volkswagen as its second car model.",
    color: { id: "c-yellow", name: "yellow" },
    featured: true,
    price: {
      perDay: { retailPrice: 109, discountPrice: 89 },
    },
    details: {
      transmission: "manual",
      capacity: "4 adults",
      bags: "3 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Kid Friendly",
      "Pets Allowed",
    ],
    images: [
      {
        type: "cover",
        alt: "Yellow Volkswagen Clementine T2 Camper Van",
        urlPath: "./assets/vehicles/volkswagen-clementine-t2.jpg",
      },
      {
        type: "display",
        alt: "Yellow Volkswagen Clementine T2 Camper Van",
        urlPath: "./assets/vehicles/volkswagen-clementine-t2.jpg",
      },
    ],
  },
  {
    id: "VEH006",
    slug: "hyundai-i30n",
    brand: { id: "b-hyundai", name: "Hyundai" },
    model: "I30N",
    year: -2018,
    description:
      "The Hyundai i30 is a small family car manufactured by the South Korean manufacturer Hyundai Motor Company since 2007.",
    color: { id: "c-cyan", name: "cyan" },
    featured: false,
    price: {
      perDay: { retailPrice: 56 },
    },
    details: {
      transmission: "6MT or N DCT",
      capacity: "4 adults",
      bags: "3 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "Cyan Hyundai I30N",
        urlPath: "./assets/vehicles/hyundai-i30n.jpg",
      },
      {
        type: "display",
        alt: "Cyan Hyundai I30N",
        urlPath: "./assets/vehicles/hyundai-i30n.jpg",
      },
    ],
  },
  {
    id: "VEH007",
    slug: "jeep-wrangler-rubicon",
    brand: { id: "b-jeep", name: "Jeep" },
    model: "Wrangler Rubicon",
    year: 2020,
    description:
      "The Jeep Wrangler is a series of compact and mid-size four-wheel drive off-road SUVs manufactured by Jeep since 1986, and currently in its fourth generation. The Wrangler JL, the most recent generation, was unveiled in late-2017 and is produced at Jeep's Toledo Complex.",
    color: { id: "c-black", name: "black" },
    featured: false,
    price: {
      perDay: { retailPrice: 119 },
    },
    details: {
      transmission: "",
      capacity: "2 adults",
      bags: "2 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      '17" wheels',
    ],
    images: [
      {
        type: "cover",
        alt: "Black Jeep Wrangler Rubicon",
        urlPath: "./assets/vehicles/jeep-wrangler-rubicon.jpg",
      },
      {
        type: "display",
        alt: "Black Jeep Wrangler Rubicon",
        urlPath: "./assets/vehicles/jeep-wrangler-rubicon.jpg",
      },
    ],
  },
  {
    id: "VEH008",
    slug: "bmw-m4-gts",
    brand: { id: "b-bmw", name: "BMW" },
    model: "M4 GTS",
    year: 2018,
    description:
      "The BMW M4 GTS is currently the fastest representative of a whole series of extreme BMW M special models such as the BMW M3 GT (1994), the BMW M3 CSL (2003) and its direct predecessor, the BMW M3 GTS (2009). Once again, it takes the BMW M philosophy to the top: marrying exceptional performance with maximum race track performance, combined in a vehicle that can be driven on public roads.",
    color: { id: "c-white", name: "white" },
    featured: false,
    price: {
      perDay: { retailPrice: 450 },
    },
    details: {
      transmission: "8-speed M Steptronic sport transmission",
      capacity: "4 adults",
      bags: "3 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "White BMW M4 GTS",
        urlPath: "./assets/vehicles/bmw-m4-gts.jpg",
      },
      {
        type: "display",
        alt: "White BMW M4 GTS",
        urlPath: "./assets/vehicles/bmw-m4-gts.jpg",
      },
    ],
  },
  {
    id: "VEH009",
    slug: "ford-mustang-shelby-gt350r",
    brand: { id: "b-ford", name: "Ford" },
    model: "Mustang Shelby GT350R",
    year: 2020,
    description:
      "For 2015, the GT350 debuted featuring a 5.2 L Flat Plane Crank V8 engine with 526 hp (392 kW) and 429 lb⋅ft (582 N⋅m) of torque. Notable features are track-focused chassis tuning, significant aero-dynamic changes to include lowering the hood around the engine, 2-piece, cross-drilled brake rotors paired with Brembo calipers, MagneRide damping option, lightweight Tremec TR-3160 six speed manual transmission, Recaro seats, and various lightweight components.",
    color: { id: "c-black", name: "black" },
    featured: false,
    price: {
      perDay: { retailPrice: 199 },
    },
    details: {
      transmission: "automatic",
      capacity: "2 adults",
      bags: "3 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "Black Ford Mustang Shelby GT350R",
        urlPath: "./assets/vehicles/ford-mustang-shelby-gt350r.jpg",
      },
      {
        type: "display",
        alt: "Black Ford Mustang Shelby GT350R",
        urlPath: "./assets/vehicles/ford-mustang-shelby-gt350r.jpg",
      },
    ],
  },
  {
    id: "VEH010",
    slug: "turboant-x7-max-folding",
    brand: { id: "b-turboant", name: "TurboAnt" },
    model: "X7 Max Folding",
    year: 2021,
    description:
      "A electric scooter is a stand-up scooter powered by either a small utility internal combustion engine or a small electric hub motor in its front and/or rear wheel. Classified as a form of micro-mobility, they are generally designed with a large center deck on which the rider stands. The first motorized scooter was manufactured by Autoped in 1915.",
    color: { id: "c-black", name: "black" },
    featured: false,
    price: {
      perDay: { retailPrice: 47 },
    },
    details: {
      transmission: "",
      capacity: "1 adult",
      bags: "",
      autonomy: "35 miles (56 km)",
    },
    features: [
      "Electric",
      "10 Ah Detachable Battery",
      "3-Step Folding",
      "20 mph Maximum Speed",
      "Cruise Control",
      "15° Climb Capability",
    ],
    images: [
      {
        type: "cover",
        alt: "Black TurboAnt X7 Max Folding Scooter",
        urlPath: "./assets/vehicles/turboant-x7-max-folding.jpg",
      },
      {
        type: "display",
        alt: "Black TurboAnt X7 Max Folding Scooter",
        urlPath: "./assets/vehicles/turboant-x7-max-folding.jpg",
      },
    ],
  },
  {
    id: "VEH011",
    slug: "bianchi-specialissima",
    brand: { id: "b-bianchi", name: "Bianchi" },
    model: "Specialissima",
    year: 2020,
    description:
      "The Bianchi Specialissima helps you fly up the climbs and dominate on the flat. The carbon disc frame is light, just 750g, so none of your climbing power is wasted when the road turns upward, but it’s also superbly-stiff providing excellent transfer of that power to the road.",
    color: { id: "c-white", name: "white" },
    featured: false,
    price: {
      perDay: { retailPrice: 29 },
    },
    details: {
      transmission: "",
      capacity: "1 adult",
      bags: "",
      autonomy: "",
    },
    features: [
      "Campagnolo Hydraulic Disc Brakes",
      "Flat Mount calipers",
      "Fulcrum Wind 400 DB Rims",
    ],
    images: [
      {
        type: "cover",
        alt: "White Bianchi Specialissima Bike",
        urlPath: "./assets/vehicles/bianchi-specialissima.jpg",
      },
      {
        type: "display",
        alt: "White Bianchi Specialissima Bike",
        urlPath: "./assets/vehicles/bianchi-specialissima.jpg",
      },
    ],
  },
  {
    id: "VEH012",
    slug: "vz-flybridge",
    brand: { id: "b-vz", name: "VZ" },
    model: "Flybridge",
    year: 2007,
    description:
      "Board a classic! Aboard our 57' VZ you will enjoy an experience unlike any other. Discover the beautiful Miami coastlines aboard this magnificent vessel. This fully equipped yacht has an onboard capacity of 12 people making it excellent for any type of upscale festivities.",
    color: { id: "c-white", name: "white" },
    featured: false,
    price: {
      perDay: { retailPrice: 2899 },
    },
    details: {
      transmission: "",
      capacity: "12 adults",
      bags: "",
      autonomy: "",
    },
    features: [
      "Deck shower",
      "Bow & Stern sundecks",
      "Hot water",
      "TV",
      "GPS",
      "Fridge",
      "Oven/stovetop",
      "Freezer",
      "Automatic pilot",
      "USB socket",
      "220V power outlet",
    ],
    images: [
      {
        type: "cover",
        alt: "White VZ Flybridge Yacht",
        urlPath: "./assets/vehicles/vz-flybridge.jpg",
      },
      {
        type: "display",
        alt: "White VZ Flybridge Yacht",
        urlPath: "./assets/vehicles/vz-flybridge.jpg",
      },
    ],
  },
];
