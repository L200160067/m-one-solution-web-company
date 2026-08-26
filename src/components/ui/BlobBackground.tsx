import React from 'react';

interface BlobBackgroundProps {
  colorClass: string;
  positionClass: string;
  sizeClass?: string;
  blurClass?: string;
}

export function BlobBackground({
  colorClass,
  positionClass,
  sizeClass = 'w-[50%] h-[50%]',
  blurClass = 'blur-[120px]',
}: BlobBackgroundProps) {
  return (
    <div className={`absolute ${positionClass} ${sizeClass} rounded-full ${colorClass} ${blurClass}`} />
  );
}
