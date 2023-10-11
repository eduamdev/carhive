import { EEngineTypes, ETransmissions, ECarTypes } from '@/types/car-specs';

export const allCars = [
  {
    id: 'uVKDGRbIxLWY8x7',
    slug: 'small-hatchback',
    title: 'Small Hatchback',
    price: {
      perDay: {
        retail: { amount: 999, currency: 'MXN' },
        discount: { amount: 750, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/43/697aa338-040e-41de-9546-b30e682e2515.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '3.8',
    reviews: '42',
  },
  {
    id: 'bDKqmjNVQXXRFJT',
    slug: 'mini-van',
    title: 'Mini Van',
    price: {
      perDay: {
        retail: { amount: 1499, currency: 'MXN' },
        discount: { amount: 999, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.2',
    reviews: '42',
  },
  {
    id: 'QP38QRI2wPw2mOJ',
    slug: 'midsize-suv',
    title: 'Midsize SUV',
    price: {
      perDay: {
        retail: { amount: 1699, currency: 'MXN' },
        discount: { amount: 1499, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.2',
    reviews: '42',
  },
  {
    id: 'yhEfA8F85SDjLhw',
    slug: 'electric-luxury-sedan',
    title: 'Electric Luxury Sedan',
    price: {
      perDay: {
        retail: { amount: 1599, currency: 'MXN' },
        discount: { amount: 1399, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.6',
    reviews: '42',
  },
  {
    id: 'H6yYPQUNG2G03a6',
    slug: 'fullsize-sedan',
    title: 'Fullsize Sedan',
    price: {
      perDay: {
        retail: { amount: 1299, currency: 'MXN' },
        discount: { amount: 1199, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.5',
    reviews: '42',
  },
  {
    id: 'w2TJKbcSUuA9UZT',
    slug: 'luxury-sedan',
    title: 'Luxury Sedan',
    price: {
      perDay: {
        retail: { amount: 1999, currency: 'MXN' },
        discount: { amount: 1799, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.2',
    reviews: '42',
  },
  {
    id: 'foG5naH8wDCiSBD',
    slug: 'premium-sedan',
    title: 'Premium Sedan',
    price: {
      perDay: {
        retail: { amount: 1499, currency: 'MXN' },
        discount: { amount: 1399, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.2',
    reviews: '42',
  },
  {
    id: 'bBlHEjoQYax8q_u',
    slug: 'premium-suv',
    title: 'Premium SUV',
    price: {
      perDay: {
        retail: { amount: 1499, currency: 'MXN' },
        discount: { amount: 999, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.2',
    reviews: '42',
  },
  {
    id: 'eQj308NnpIYTLLC',
    slug: 'standard-sedan',
    title: 'Standard Sedan',
    price: {
      perDay: {
        retail: { amount: 1099, currency: 'MXN' },
        discount: { amount: 999, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/6/5fe87057-d96a-4052-97bd-85c7f91342ba.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'cY8CP7Sa04R43V8',
    slug: 'standard-hatchback',
    title: 'Standard Hatchback',
    price: {
      perDay: {
        retail: { amount: 999, currency: 'MXN' },
        discount: { amount: 699, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/b91b0e78-817a-4074-9a59-ecd9a0a6c681.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'Al4Eqc5xPYkF8Uf',
    slug: 'compact-hatchback',
    title: 'Compact Hatchback',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'poBKNmKUwHkchHR',
    slug: 'standard-suv',
    title: 'Standard SUV',
    price: {
      perDay: {
        retail: { amount: 1600, currency: 'MXN' },
        discount: { amount: 1600, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/8b9f5ffb-d4f5-4355-99f4-39546e322d7f.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'Hj8sneo2Xi2LyMY',
    slug: 'fullsize-suv',
    title: 'Fullsize SUV',
    price: {
      perDay: {
        retail: { amount: 1100, currency: 'MXN' },
        discount: { amount: 1000, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'L3NUGqdLtY2PSOH',
    slug: 'fullsize-van',
    title: 'Fullsize Van',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
        discount: { amount: 1900, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'voa4qKnq_b6MA3O',
    slug: 'standard-mini-van',
    title: 'Standard Mini Van',
    price: {
      perDay: {
        retail: { amount: 1100, currency: 'MXN' },
        discount: { amount: 900, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/19/172ba8dc-9487-4b11-b089-fcc25dcdc460.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
      alt: '',
    },
    specs: {
      carType: ECarTypes.MINIVAN,
      engineType: EEngineTypes.GAS,
      transmission: ETransmissions.AUTOMATIC,
      capacity: {
        seats: '5',
      },
    },
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: '0jNirWcP4SMwQeC',
    slug: 'standard-pickup',
    title: 'Standard Pickup',
    price: {
      perDay: {
        retail: { amount: 3500, currency: 'MXN' },
        discount: { amount: 3150, currency: 'MXN' },
      },
    },
    image: {
      src: 'https://mediaim.expedia.com/cars/15/e18e77e1-1c37-42e7-81cd-281151e51a68.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'HQBYKM7kmGee564',
    slug: 'off-road-suv',
    title: 'Off-Road SUV',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
        discount: { amount: 1800, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'WDUnh5jUCiSJKab',
    slug: 'special-sports-car',
    title: 'Special SportsCar',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'cMPjrvGyH3K4Yzr',
    slug: 'premium-mini-van',
    title: 'Premium Mini Van',
    price: {
      perDay: {
        retail: { amount: 2000, currency: 'MXN' },
        discount: { amount: 1900, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'F5oUI5Um4m2RMG3',
    slug: 'standard-convertible',
    title: 'Standard Convertible',
    price: {
      perDay: {
        retail: { amount: 2800, currency: 'MXN' },
        discount: { amount: 2700, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'skiEmmie99DRt4o',
    slug: 'standard-sports-car',
    title: 'Standard SportsCar',
    price: {
      perDay: {
        retail: { amount: 2100, currency: 'MXN' },
        discount: { amount: 1900, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'tEm0ZtlZAA4rRTo',
    slug: 'pickup',
    title: 'Pickup',
    price: {
      perDay: {
        retail: { amount: 2100, currency: 'MXN' },
        discount: { amount: 1999, currency: 'MXN' },
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
  {
    id: 'lCy89XZfjCR3gK7',
    slug: 'compact',
    title: 'Compact',
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
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero iste nihil, minus laboriosam at numquam quis odit repellat? Dignissimos, harum.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo provident ducimus sint explicabo magnam maiores quam rerum. Obcaecati.</p>',
    features: [
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
      'Some cool stuff',
    ],
    rating: '4.3',
    reviews: '42',
  },
];
