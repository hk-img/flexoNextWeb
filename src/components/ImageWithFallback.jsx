// components/ImageWithFallback.jsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({
  src,
  fallback = '/images/default_image.webp',
  alt = '',
  width,
  height,
  ...props
}) {
  const [finalSrc, setFinalSrc] = useState(src || fallback);

  useEffect(() => {
    let mounted = true;
    if (!src) {
      setFinalSrc(fallback);
      return;
    }
    const img = new window.Image();
    img.src = src;
    img.onload = () => mounted && setFinalSrc(src);
    img.onerror = () => mounted && setFinalSrc(fallback);
    return () => (mounted = false);
  }, [src, fallback]);

  return (
    <Image
      {...props}
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
