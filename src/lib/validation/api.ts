import { z } from 'zod';

// WordPress API response shape
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema,
  });

// Post
export const PostCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  category: PostCategorySchema,
  author: z.string().optional(),
  cover_url: z.string(),
  cover_thumb: z.string(),
  published_at: z.string(),
});

// Service
export const ServiceSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  short_description: z.string(),
  full_description: z.string(),
  features: z.array(z.string()),
  benefits: z.array(z.string()),
  keywords: z.array(z.string()),
  image_url: z.string(),
  image_thumb: z.string(),
  icon_name: z.string().optional(),
});

// Project
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  description: z.string(),
  client_name: z.string(),
  project_url: z.string().optional(),
  is_featured: z.boolean(),
  image_url: z.string(),
  image_thumb: z.string(),
});

// Team
export const TeamMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  social_linkedin: z.string().optional(),
  social_github: z.string().optional(),
  social_instagram: z.string().optional(),
  avatar_url: z.string(),
});

// Testimonial
export const TestimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  rating: z.number(),
  avatar_url: z.string(),
});

// Partner
export const PartnerSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo_url: z.string(),
});

// Alumni
export const AlumniMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  school: z.string(),
  batch_period: z.string(),
  photo_url: z.string(),
});

export const AlumniGroupSchema = z.object({
  batch_period: z.string(),
  members: z.array(AlumniMemberSchema),
});

// Settings
export const SettingsSchema = z.object({
  company_name: z.string(),
  company_address: z.string(),
  contact_email: z.string(),
  contact_phone: z.string(),
  whatsapp_number: z.string(),
  facebook_url: z.string(),
  instagram_url: z.string(),
  tiktok_url: z.string(),
  youtube_url: z.string(),
  linkedin_url: z.string(),
});

export type ValidatedPost = z.infer<typeof PostSchema>;
export type ValidatedService = z.infer<typeof ServiceSchema>;
export type ValidatedProject = z.infer<typeof ProjectSchema>;
export type ValidatedTeamMember = z.infer<typeof TeamMemberSchema>;
export type ValidatedTestimonial = z.infer<typeof TestimonialSchema>;
export type ValidatedPartner = z.infer<typeof PartnerSchema>;
export type ValidatedAlumniMember = z.infer<typeof AlumniMemberSchema>;
export type ValidatedAlumniGroup = z.infer<typeof AlumniGroupSchema>;
export type ValidatedSettings = z.infer<typeof SettingsSchema>;
