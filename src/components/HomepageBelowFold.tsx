"use client";

import dynamic from 'next/dynamic';
import type { Project, Partner, Testimonial, Post } from '@/types/api';

// Dynamic import dengan ssr:false hanya bisa di Client Component
const DynamicProjects = dynamic(
  () => import('@/components/Projects').then((mod) => mod.Projects),
  { ssr: false }
);
const DynamicPartners = dynamic(
  () => import('@/components/Partners').then((mod) => mod.Partners),
  { ssr: false }
);
const DynamicTestimonials = dynamic(
  () => import('@/components/Testimonials').then((mod) => mod.Testimonials),
  { ssr: false }
);
const DynamicLatestBlogs = dynamic(
  () => import('@/components/LatestBlogs').then((mod) => mod.LatestBlogs),
  { ssr: false }
);

interface HomepageBelowFoldProps {
  projects: Project[];
  partners: Partner[];
  testimonials: Testimonial[];
  posts: Post[];
}

export default function HomepageBelowFold({
  projects,
  partners,
  testimonials,
  posts,
}: HomepageBelowFoldProps) {
  return (
    <>
      <DynamicProjects projects={projects} />
      <DynamicPartners partners={partners} />
      <DynamicTestimonials testimonials={testimonials} />
      <DynamicLatestBlogs posts={posts} />
    </>
  );
}
