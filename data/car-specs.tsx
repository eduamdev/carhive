import { Icons } from '@/components/icons';
import { convertPascalCaseToWords, getEnumKeyByEnumValue } from '@/lib/utils';
import { ECarEngineType, ECarTransmission, ECarType } from '@/types/car-specs';

export const carTypes = [
  {
    id: '0kmdcajKrMM4aXS',
    slug: ECarType.Hatchback,
    value: getEnumKeyByEnumValue(ECarType, ECarType.Hatchback),
    icon: <Icons.hatchback className="h-8 w-8" />,
  },
  {
    id: 'MM9sWmoTWBpHXNF',
    slug: ECarType.Minivan,
    value: getEnumKeyByEnumValue(ECarType, ECarType.Minivan),
    icon: <Icons.minivan className="h-8 w-8" />,
  },
  {
    id: 'p25Na0wAQbXANhl',
    slug: ECarType.PickupTruck,
    value: convertPascalCaseToWords(
      getEnumKeyByEnumValue(ECarType, ECarType.PickupTruck),
    ),
    icon: <Icons.pickupTruck className="h-8 w-8" />,
  },
  {
    id: 'v3_htQJdhGeG3Pb',
    slug: ECarType.SportsCar,
    value: convertPascalCaseToWords(
      getEnumKeyByEnumValue(ECarType, ECarType.SportsCar),
    ),
    icon: <Icons.sportsCar className="h-8 w-8" />,
  },
  {
    id: 'VXvMj2lZqlWZJS3',
    slug: ECarType.SUV,
    value: getEnumKeyByEnumValue(ECarType, ECarType.SUV),
    icon: <Icons.suv className="h-8 w-8" />,
  },
  {
    id: 'bG32yeQrdsgCQIl',
    slug: ECarType.Sedan,
    value: getEnumKeyByEnumValue(ECarType, ECarType.Sedan),
    icon: <Icons.sedan className="h-8 w-8" />,
  },
];

export const transmissions = [
  {
    id: 'niWHkEKrP_Uw269',
    slug: ECarTransmission.Automatic,
    value: getEnumKeyByEnumValue(ECarTransmission, ECarTransmission.Automatic),
    icon: <Icons.automaticTransmission className="h-7 w-7" />,
  },
  {
    id: 'qm_4myAA0aDGwee',
    slug: ECarTransmission.Manual,
    value: getEnumKeyByEnumValue(ECarTransmission, ECarTransmission.Manual),
    icon: <Icons.manualTransmission className="h-7 w-7" />,
  },
];

export const carEngines = [
  {
    id: '23akPY5Utv03CBN',
    slug: ECarEngineType.Gas,
    value: getEnumKeyByEnumValue(ECarEngineType, ECarEngineType.Gas),
    icon: '',
  },
  {
    id: 'JAtOstQ8XDcmzq0',
    slug: ECarEngineType.Hybrid,
    value: getEnumKeyByEnumValue(ECarEngineType, ECarEngineType.Hybrid),
    icon: '',
  },
  {
    id: '_jquqvDA9koeT7Q',
    slug: ECarEngineType.Electric,
    value: getEnumKeyByEnumValue(ECarEngineType, ECarEngineType.Electric),
    icon: '',
  },
];

export const seats = [
  { id: 'Q1OioOpXEKOSPsp', slug: '1', value: '1' },
  { id: 'dfO0SfWrODia_yY', slug: '2', value: '2' },
  { id: 'T_Kba1Bygofz1pQ', slug: '3', value: '3' },
  { id: 'Gmae3j65RGr5x_W', slug: '4', value: '4' },
  { id: '7bQseNhCGc3eSB7', slug: '5', value: '5' },
  { id: '4HyjwAYPWp6pbbP', slug: '6', value: '6' },
  { id: '6iYSrZlZ1of0zkO', slug: '7', value: '7+' },
];
