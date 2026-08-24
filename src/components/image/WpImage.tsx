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
  sizes?: string;
  loading?: 'eager' | 'lazy';
  placeholder?: 'blur' | 'empty';
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
  sizes,
  loading,
  placeholder,
}: WpImageProps) {
  const resolvedSrc = resolveSrc(src);
  const [errored, setErrored] = useState(false);

  if (!resolvedSrc || errored) {
    return (
      <div
        className={`bg-slate-100 text-slate-400 flex items-center justify-center ${className || ''}`}
        aria-label={alt}
        role="img"
      >
        {fallback ?? <span className="text-xs">No Image</span>}
      </div>
    );
  }

  // fill mode requires explicit sizes and an ancestor with relative layout
  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={loading}
        placeholder={placeholder}
        decoding="async"
        onError={() => setErrored(true)}
      />
    );
  }

  // fixed dimensions mode
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
        sizes={sizes}
        loading={loading}
        placeholder={placeholder}
        decoding="async"
        onError={() => setErrored(true)}
      />
    );
  }

  // If neither fill nor fixed dimensions are provided, render a constrained
  // responsive image with a default 16/9 aspect ratio so we never fall back to
  // a raw <img> element (which causes CLS and no optimization).
  const fallbackWidth = 800;
  const fallbackHeight = 450;

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width ?? fallbackWidth}
      height={height ?? fallbackHeight}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes ?? "(max-width: 768px) 100vw, 800px"}
      loading={loading}
      placeholder={placeholder}
      decoding="async"
      onError={() => setErrored(true)}
    />
  );
}
