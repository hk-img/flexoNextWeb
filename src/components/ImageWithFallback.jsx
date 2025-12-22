"use client";

import { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";

const WATERMARK_TEXT = "FLEXO";

function ImageWithFallback({
  src,
  fallback = "/images/default_image.webp",
  alt,
  loading,
  priority,
  watermark = false,   // 👈 BOOLEAN FLAG
  width,
  height,
  quality,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [canvasUrl, setCanvasUrl] = useState(null);
  const [isOriginalLoaded, setIsOriginalLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setImgSrc(src);
    setIsOriginalLoaded(false);
  }, [src]);

  /* ===== CANVAS WATERMARK (ONLY WHEN watermark === true) ===== */
  useEffect(() => {
    if (
      !watermark ||
      !width ||
      !height ||
      !isOriginalLoaded ||
      imgSrc === fallback
    ) {
      setCanvasUrl(null);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;

    image.onload = () => {
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);

      ctx.font = `12px Sans-Serif`;
      ctx.fillStyle = "rgba(253, 244, 244, 0.6)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(WATERMARK_TEXT, width / 2, height / 2);

      setCanvasUrl(canvas.toDataURL("image/png"));
    };
  }, [imgSrc, watermark, width, height, isOriginalLoaded, fallback]);

  const loadingProp = priority ? undefined : loading || "lazy";

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* ===== WATERMARK IMAGE ===== */}
      {watermark && canvasUrl && isOriginalLoaded ? (
        <Image
          {...props}
          src={canvasUrl}
          alt={alt || "Watermarked Image"}
          width={width}
          height={height}
          priority={priority}
          loading={loadingProp}
          quality={quality}
          decoding={priority ? "sync" : "async"}
          unoptimized
        />
      ) : (
        /* ===== NORMAL IMAGE ===== */
        <Image
          {...props}
          src={imgSrc || fallback}
          alt={alt || "Image"}
          width={width}
          height={height}
          fill={!width || !height}
          priority={priority}
          loading={loadingProp}
          quality={quality}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsOriginalLoaded(true)}
          onError={() => {
            setImgSrc(fallback);
            setIsOriginalLoaded(false);
          }}
        />
      )}
    </>
  );
}

export default memo(ImageWithFallback);
