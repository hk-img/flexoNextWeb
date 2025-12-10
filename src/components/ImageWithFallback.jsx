'use client';

import { memo, useEffect, useState } from 'react';
import Image from 'next/image';

function ImageWithFallback({
  src,
  fallback = '/images/default_image.webp',
  alt,
  loading,
  priority,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // If priority is set, don't use loading prop (they conflict)
  // Otherwise, default to lazy loading for better performance
  const loadingProp = priority ? undefined : (loading || 'lazy');

  return (
    <Image
      {...props}
      src={imgSrc || fallback}
      alt={alt || 'Image'}
      loading={loadingProp}
      priority={priority}
      onError={() => setImgSrc(fallback)}
      quality={props.quality} // Use caller-provided quality; default falls back to Next.js
      decoding={priority ? "sync" : "async"} // Sync decoding for priority images to reduce render delay
    />
  );
}

export default memo(ImageWithFallback);
