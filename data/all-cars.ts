import { EEngineTypes, ETransmissions, ECarTypes } from '@/types/car-specs';

export const allCars = [
  {
    id: 'uVKDGRbIxLWY8x7',
    slug: 'eco-hatchback',
    title: 'Eco Hatchback',
    price: {
      perDay: {
        retail: { amount: 1000, currency: 'MXN' },
        discount: { amount: 750, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/43/697aa338-040e-41de-9546-b30e682e2515.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.HATCHBACK,
      engineType: EEngineTypes.HYBRID,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'Meet the Eco Hatch – a blend of eco-conscious driving and urban sophistication. Designed for the environmentally aware, this compact marvel combines fuel efficiency with agile performance, perfect for city life. Inside, it offers a spacious, tech-savvy interior with smart storage solutions and seamless connectivity.',
      "Safety is a priority, featuring advanced driver-assist systems. The Eco Hatch isn't just a car; it's a sustainable lifestyle choice, making eco-friendly driving effortlessly stylish and secure.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '3.8',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'bDKqmjNVQXXRFJT',
    slug: 'city-minivan',
    title: 'City Minivan',
    price: {
      perDay: {
        retail: { amount: 1500, currency: 'MXN' },
        discount: { amount: 1000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/6/25ddba2e-8a4b-4464-9906-6326a59ba455.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.MINIVAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '7',
      },
    },
    description: [
      'Redefining family travel with sophistication. Designed for urban adventures, this minivan blends versatility and style seamlessly. With its spacious interior and advanced safety features, it ensures a smooth, secure, and stylish ride for you and your loved ones.',
      'Perfect for city life, the City Minivan offers unparalleled comfort and convenience, making every journey a delightful experience.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.2',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'QP38QRI2wPw2mOJ',
    slug: 'mid-size-suv',
    title: 'Mid-Size SUV',
    price: {
      perDay: {
        retail: { amount: 1700, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/40/acd4c247-0074-45c3-9542-bbac04fff9c2.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SUV,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'A blend of power and elegance. Its striking design makes a statement, while the spacious interior offers both comfort and flexibility.',
      'Whether navigating city streets or off-road adventures, this SUV delivers superior performance and modern convenience, ensuring an exceptional driving experience for every journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.2',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'yhEfA8F85SDjLhw',
    slug: 'electric-luxury-sedan',
    title: 'Electric Luxury Sedan',
    price: {
      perDay: {
        retail: { amount: 1600, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/40/178ec0a9-cc9b-4597-a360-f062f3dc0458.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SEDAN,
      engineType: EEngineTypes.ELECTRIC,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'This sedan combines the elegance of a luxury car with the eco-friendly essence of electric mobility. Its sleek design and advanced engineering promise a smooth, silent ride, embodying the future of driving.',
      'Inside, experience a blend of cutting-edge technology and plush comfort, creating an oasis of serenity on the road. The Electric Luxury Sedan sets new standards, offering a luxurious and sustainable driving experience for the discerning modern driver.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.8',
    unlimitedMileage: false,
  },
  {
    id: 'H6yYPQUNG2G03a6',
    slug: 'full-size-sedan',
    title: 'Full-Size Sedan',
    price: {
      perDay: {
        retail: { amount: 1300, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/6/26375bb6-dc88-4d0a-bf94-a9b843583c31.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SEDAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      "Where spaciousness meets sophistication. This sedan offers an abundance of room, making every journey comfortable and indulgent. With its elegant design and powerful performance, it's a perfect blend of style and substance. ",
      "Inside, you'll find a refined interior equipped with advanced technology, ensuring a seamless driving experience.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.5',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'w2TJKbcSUuA9UZT',
    slug: 'luxury-sedan',
    title: 'Luxury Sedan',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/9068594d-74f4-4e98-bc19-b9ab90f7463a.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SEDAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'Crafted for those who demand the utmost in sophistication, this sedan exudes timeless luxury from every angle. Its sleek silhouette and premium finishes create an aura of opulence, while the powerful engine ensures a dynamic and smooth ride.',
      "Step inside, and you'll find a sumptuous interior adorned with the finest materials and cutting-edge technology.",
      'The Luxury Sedan elevates the driving experience, offering unparalleled comfort and style for the discerning driver who appreciates the finer things in life.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.7',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'foG5naH8wDCiSBD',
    slug: 'premium-sedan',
    title: 'Premium Sedan',
    price: {
      perDay: {
        retail: { amount: 1500, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/45/cc21c28b-8a84-4275-93f9-a89f95a40d9c.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SEDAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'A pinnacle of sophistication and performance. Its refined exterior hints at the power within, offering a smooth and exhilarating driving experience.',
      'With its advanced features and elegant aesthetics, this sedan delivers a driving experience that goes beyond the ordinary, setting new standards in the realm of premium automobiles.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.6',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'bBlHEjoQYax8q_u',
    slug: 'premium-suv',
    title: 'Premium SUV',
    price: {
      perDay: {
        retail: { amount: 1500, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SUV,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A fusion of elegance and adventure. From city streets to rugged terrains, it exudes confidence and capability, promising an exhilarating driving experience.',
      "Step inside, and you're greeted with opulent interiors, expertly crafted for comfort and convenience.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.7',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'eQj308NnpIYTLLC',
    slug: 'standard-sedan',
    title: 'Standard Sedan',
    price: {
      perDay: {
        retail: { amount: 1100, currency: 'MXN' },
        discount: { amount: 1000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/6/5fe87057-d96a-4052-97bd-85c7f91342ba.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SEDAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.MANUAL,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'Where practicality meets comfort. Designed for everyday adventures, this sedan offers a reliable and efficient driving experience.',
      'Its classic design is complemented by a spacious interior, providing ample room for both passengers and luggage.',
      'With a focus on reliability and affordability, the Standard Sedan is the ideal choice for those seeking a dependable and straightforward vehicle for their daily commute or family outings.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.3',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'cY8CP7Sa04R43V8',
    slug: 'standard-hatchback',
    title: 'Standard Hatchback',
    price: {
      perDay: {
        retail: { amount: 1000, currency: 'MXN' },
        discount: { amount: 700, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/b91b0e78-817a-4074-9a59-ecd9a0a6c681.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.HATCHBACK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.MANUAL,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'Simplicity meets versatility. This hatchback is crafted for practicality and efficiency, making it an ideal choice for urban living.',
      'Its compact yet functional design ensures easy maneuverability, while the spacious interior provides ample room for passengers and cargo.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.1',
    unlimitedMileage: true,
  },
  {
    id: 'Al4Eqc5xPYkF8Uf',
    slug: 'city-hatchback',
    title: 'City Hatchback',
    price: {
      perDay: {
        retail: { amount: 1200, currency: 'MXN' },
        discount: { amount: 1000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/43/e0ee2218-882a-4327-846a-ca5f9cea11b8.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.HATCHBACK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'Engineered for city living, this hatchback seamlessly combines style with practicality.',
      'With fuel efficiency and modern features tailored for urban exploration, the City Hatch is your ideal companion for navigating the cityscape with ease and flair.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.3',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'poBKNmKUwHkchHR',
    slug: 'standard-suv',
    title: 'Standard SUV',
    price: {
      perDay: {
        retail: { amount: 1600, currency: 'MXN' },
        discount: { amount: 1300, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/8b9f5ffb-d4f5-4355-99f4-39546e322d7f.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SUV,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.MANUAL,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'With a focus on practicality and affordability, the Standard SUV ensures a straightforward driving experience, catering to those who seek reliability and functionality in their everyday journeys.',
      'Designed for everyday adventures, offering ample space and comfort for both city driving and off-road excursions.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.4',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'Hj8sneo2Xi2LyMY',
    slug: 'full-size-suv',
    title: 'Full-Size SUV',
    price: {
      perDay: {
        retail: { amount: 1900, currency: 'MXN' },
        discount: { amount: 1700, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/891e5afb-04b0-4f8f-93fe-18da0c8fc0b1.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SUV,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '7',
      },
    },
    description: [
      'This SUV redefines spaciousness and elegance, offering a commanding presence on the road. Its robust build and advanced engineering make it a versatile choice for both city commutes and off-road adventures.',
      'With ample room for passengers and cargo, the Full-Size SUV ensures a comfortable and sophisticated journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.6',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'L3NUGqdLtY2PSOH',
    slug: 'community-minivan',
    title: 'Community Minivan',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/14/0152afe2-3103-4a24-a4e4-38d774bd3cb8.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.MINIVAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '7',
      },
    },
    description: [
      'Designed for shared experiences and effortless mobility. This minivan embodies versatility and connectivity, making it an ideal choice for community outings and family travels.',
      'Packed with safety features and modern conveniences, the Community Minivan ensures a secure and enjoyable ride, promoting unity and social engagement in every journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.5',
    unlimitedMileage: false,
  },
  {
    id: 'voa4qKnq_b6MA3O',
    slug: 'standard-minivan',
    title: 'Standard Minivan',
    price: {
      perDay: {
        retail: { amount: 1500, currency: 'MXN' },
        discount: { amount: 1100, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/19/172ba8dc-9487-4b11-b089-fcc25dcdc460.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.MINIVAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.MANUAL,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'The Standard Minivan: where practicality meets family-friendly features. Engineered with the needs of busy families in mind, this minivan offers reliable performance and ample space for both passengers and cargo.',
      'Its straightforward design ensures ease of use, making it an accessible choice for various lifestyles.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.3',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: '2TsdBrYu_077nE2',
    slug: 'premium-pickup',
    title: 'Premium Pickup',
    price: {
      perDay: {
        retail: { amount: 3500, currency: 'MXN' },
        discount: { amount: 3150, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/e826183c-1bc8-49d1-a6d3-3c893d38f142.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.PICKUP_TRUCK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A blend of power and luxury, redefining the standards of utility vehicles. With its striking design and robust build, this pickup truck exudes confidence and sophistication.',
      'Whether tackling rugged terrains or city roads, it offers exceptional performance and towing capabilities, making it the ultimate choice for adventurers and workers alike.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.9',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: '0jNirWcP4SMwQeC',
    slug: 'standard-pickup',
    title: 'Standard Pickup',
    price: {
      perDay: {
        retail: { amount: 3000, currency: 'MXN' },
        discount: { amount: 2850, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/e18e77e1-1c37-42e7-81cd-281151e51a68.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.PICKUP_TRUCK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.MANUAL,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A dependable workhorse designed for versatility and reliability. This pickup truck embodies practicality, offering a robust performance for everyday tasks and adventures.',
      'Its sturdy build and functional features make it an ideal choice for hauling cargo or navigating challenging terrains.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.5',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'HQBYKM7kmGee564',
    slug: 'off-road-suv',
    title: 'Off-Road SUV',
    price: {
      perDay: {
        retail: { amount: 2100, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/6/bdb29162-f6a1-47de-b6af-4b361d664e2d.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SUV,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description: [
      'Built for rugged exploration and unmatched adventures. This SUV is engineered to conquer challenging terrains, making it the ultimate choice for off-road enthusiasts.',
      'With its robust suspension, advanced four-wheel-drive system, and high ground clearance, it can navigate rocky trails and uneven landscapes with ease.',
      'The Off-Road SUV offers a thrilling driving experience, combining power, agility, and durability, making it the perfect companion for those who crave off-road excitement and outdoor escapades.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.6',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'WDUnh5jUCiSJKab',
    slug: 'turbo-sports-car',
    title: 'Turbo Sports Car',
    price: {
      perDay: {
        retail: { amount: 5000, currency: 'MXN' },
        discount: { amount: 4750, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/69/3e68b2c9-1fc4-4e0e-bb0e-2eda8831835a.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SPORTS_CAR,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'An epitome of speed and exhilaration. This sports car is engineered for the thrill-seeker, boasting a powerful turbocharged engine that propels it from 0 to 60 in mere seconds.',
      'With its aerodynamic design and precision handling, it hugs the curves of the road with finesse, offering an adrenaline-pumping driving experience.',
      'Inside, the Turbo Sports Car is fitted with cutting-edge technology and luxurious finishes, ensuring both performance and comfort are at their peak.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '5.0',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'cMPjrvGyH3K4Yzr',
    slug: 'premium-minivan',
    title: 'Premium Minivan',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/45/b4440551-f6d5-4b8e-a1fb-a1487676533e.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.MINIVAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '7',
      },
    },
    description: [
      'Where elegance meets versatility. This minivan sets new standards in family travel, offering a spacious interior adorned with premium materials and modern comforts.',
      "Whether you're on a road trip or running daily errands, the Premium Minivan delivers superior performance and opulence, ensuring every ride is a delightful adventure for the whole family.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.6',
    reviews: '42',
    unlimitedMileage: true,
  },
  {
    id: 'F5oUI5Um4m2RMG3',
    slug: 'velocity-sports-car',
    title: 'Velocity Sports Car',
    price: {
      perDay: {
        retail: { amount: 2800, currency: 'MXN' },
        discount: { amount: 2500, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/1101/79e2ecab-0c65-4bab-b951-7da0274bad79.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SPORTS_CAR,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A true embodiment of speed and style. This sports car is engineered for high-performance enthusiasts, boasting a powerful engine that delivers jaw-dropping acceleration and unmatched agility.',
      'Its sleek and aerodynamic design not only turns heads but also enhances its aerodynamic efficiency, ensuring a thrilling and dynamic ride. ',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.5',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'skiEmmie99DRt4o',
    slug: 'racer-sports-car',
    title: 'Racer Sports Car',
    price: {
      perDay: {
        retail: { amount: 2100, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/1060/164ef37e-75bd-47c7-86fe-6b7b3d6571c7.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.SPORTS_CAR,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A symphony of speed and elegance. Crafted for racing enthusiasts, this sports car boasts a lightweight yet powerful engine, propelling it to remarkable speeds with precision.',
      'Its aggressive aerodynamics and responsive handling ensure it hugs corners and accelerates with unparalleled zeal.',
      'Designed for those who crave the thrill of the track, this car blends performance and style, making it the ultimate choice for speed aficionados.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.6',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'tEm0ZtlZAA4rRTo',
    slug: 'urban-pickup',
    title: 'Urban Pickup',
    price: {
      perDay: {
        retail: { amount: 2100, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/27/9228bca6-ff68-4623-92ae-d4e8a88f0542.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.PICKUP_TRUCK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'A fusion of rugged capability and city sophistication. This pickup truck is tailored for urban dwellers, offering a perfect balance of functionality and style.',
      "Whether you're hauling equipment or heading out for a weekend adventure, this truck combines practicality and urban flair, making it the perfect companion for modern city living.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.7',
    reviews: '42',
    unlimitedMileage: false,
  },
  {
    id: 'lCy89XZfjCR3gK7',
    slug: 'sporty-hatchback',
    title: 'Sporty Hatchback',
    price: {
      perDay: {
        retail: { amount: 1400, currency: 'MXN' },
        discount: { amount: 1000, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/69/c2b95c05-deb0-4234-824f-22ddd3aefe03.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.HATCHBACK,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '4',
      },
    },
    description: [
      'Designed for dynamic driving, this hatchback combines agile handling with a sleek exterior, making a bold statement on the road.',
      'Its compact size ensures nimble maneuverability, ideal for urban adventures, while the sporty design elements add a touch of excitement to your daily drive.',
      'The Sporty Hatch is the embodiment of lively driving dynamics and practical versatility, making it the perfect choice for those who seek excitement without sacrificing everyday usability.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: '4.4',
    reviews: '42',
    unlimitedMileage: true,
  },
];
