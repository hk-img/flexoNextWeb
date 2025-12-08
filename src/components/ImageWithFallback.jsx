'use client';

import { memo, useEffect, useState } from 'react';
import Image from 'next/image';

function ImageWithFallback({
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

export default memo(ImageWithFallback);
