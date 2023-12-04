'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

export function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
