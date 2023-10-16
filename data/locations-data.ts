import { ILocation } from '@/types/location';

export const locationsData: ReadonlyArray<ILocation> = [
  {
    id: 'l8pSUvBU3dYE2SR',
    name: 'Paris, France',
    value: 'paris',
    image: {
      src: '/locations/paris.avif',
      alt: 'Effiel Tower at Sunset',
    },
    latitude: 48.8589,
    longitude: 2.3469,
    zoomLevel: 12,
    featured: true,
  },
  {
    id: 'RY5NJeedLAiDTgn',
    name: 'Dubai, United Arab Emirates',
    value: 'dubai',
    image: {
      src: '/locations/dubai.avif',
      alt: 'an aerial view of the burj al arab in the middle of the ocean',
    },
    latitude: 25.2655,
    longitude: 55.2925,
    zoomLevel: 11,
    featured: true,
  },
  {
    id: 'i7C6QuEyHPwDosK',
    name: 'Cancún, México',
    value: 'cancun',
    image: {
      src: '/locations/cancun.avif',
      alt: 'green palm trees near body of water during daytime in Cancun, Mexico',
    },
    latitude: 21.1214,
    longitude: -86.8559,
    zoomLevel: 12,
    featured: true,
  },
  {
    id: 'taJlg97ubXQSYER',
    name: 'Rome, Italy',
    value: 'rome',
    image: {
      src: '/locations/rome.avif',
      alt: 'an aerial view from the top of the Vatican in Rome',
    },
    latitude: 41.8988,
    longitude: 12.5451,
    zoomLevel: 10,
    featured: true,
  },
];
