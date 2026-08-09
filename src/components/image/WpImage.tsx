"use client";

import Image from 'next/image';
import { useState } from 'react';

type ImageSource = string | { src: string; width?: number; height?: number };

type WpImageProps = {
  src?: ImageSource;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: React.ReactNode;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
};

function resolveSrc(src?: ImageSource): string | undefined {
  if (!src) return undefined;
  if (typeof src === 'string') return src;
  return src.src;
}

export function WpImage({
  src,
  alt,
  width,
  height,
  className,
  fallback,
  priority,
  quality,
  fill,
}: WpImageProps) {
  const resolvedSrc = resolveSrc(src);
  const [errored, setErrored] = useState(false);

  if (!resolvedSrc || errored) {
    return (
      <div className={`bg-slate-100 text-slate-400 flex items-center justify-center ${className || ''}`}>
        {fallback ?? <span className="text-xs">No Image</span>}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        onError={() => setErrored(true)}
      />
    );
  }

  if (width && height) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
