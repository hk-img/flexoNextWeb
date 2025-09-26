'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({
  src,
  fallback = '/images/default_image.webp',
  alt,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc || fallback}
      alt={alt}
      onError={() => setImgSrc(fallback)}
    />
  );
}
