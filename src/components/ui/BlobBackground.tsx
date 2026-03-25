"use client";

import { motion } from 'motion/react';
import React from 'react';

interface BlobBackgroundProps {
  colorClass: string;    // e.g., 'bg-blue-600/20'
  positionClass: string; // e.g., '-top-[20%] -right-[10%]'
  sizeClass?: string;    // e.g., 'w-[70%] h-[70%]', defaults to 'w-[50%] h-[50%]'
  blurClass?: string;    // e.g., 'blur-[120px]', defaults to 'blur-[120px]'
  motionY?: import('motion/react').MotionValue<number>;
}

export function BlobBackground({ 
  colorClass, 
  positionClass, 
  sizeClass = 'w-[50%] h-[50%]', 
  blurClass = 'blur-[120px]',
  motionY 
}: BlobBackgroundProps) {
  const className = `absolute ${positionClass} ${sizeClass} rounded-full ${colorClass} ${blurClass}`;

  if (motionY) {
    return <motion.div style={{ y: motionY }} className={className} />;
  }

  return <div className={className} />;
}
