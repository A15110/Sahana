import { supabase } from './supabase';
import { z } from 'zod';

// Validation schemas
const adminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const classSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  schedule: z.string(),
  capacity: z.number().min(1),
  price: z.number().min(0),
  image_url: z.string().url().optional(),
  status: z.enum(['active', 'inactive']),
});

const blogPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  category: z.string(),
  tags: z.array(z.string()),
  status: z.enum(['draft', 'published']),
  scheduled_for: z.string().datetime().optional(),
  image_url: z.string().url().optional(),
});

// Rate limiting
const loginAttempts = new Map<string, { count: number; timestamp: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

export const adminAuth = {
  async createAdmin(email: string, password: string) {
    try {
      adminSchema.parse({ email, password });
      
      const allowedEmails = ['dixonjd1982@gmail.com', 'SahanaCollective@gmail.com'];
      if (!allowedEmails.includes(email)) {
        throw new Error('Unauthorized email address');
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: 'admin',
          },
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Admin creation error:', error);
      throw error;
    }
  },

  async signIn(email: string, password: string) {
    try {
      adminSchema.parse({ email, password });

      // Check rate limiting
      const attempts = loginAttempts.get(email);
      const now = Date.now();

      if (attempts) {
        if (attempts.count >= MAX_ATTEMPTS && now - attempts.timestamp < LOCKOUT_DURATION) {
          throw new Error('Too many login attempts. Please try again later.');
        }
        if (now - attempts.timestamp >= LOCKOUT_DURATION) {
          loginAttempts.delete(email);
        }
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Update login attempts
        const currentAttempts = loginAttempts.get(email);
        loginAttempts.set(email, {
          count: (currentAttempts?.count || 0) + 1,
          timestamp: now,
        });
        throw error;
      }

      // Clear login attempts on successful login
      loginAttempts.delete(email);
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  },
};

export const classManagement = {
  async createClass(classData: z.infer<typeof classSchema>) {
    try {
      const validatedData = classSchema.parse(classData);
      
      const { data, error } = await supabase
        .from('classes')
        .insert([validatedData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Class creation error:', error);
      throw error;
    }
  },

  async updateClass(id: string, classData: Partial<z.infer<typeof classSchema>>) {
    try {
      const validatedData = classSchema.partial().parse(classData);
      
      const { data, error } = await supabase
        .from('classes')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Class update error:', error);
      throw error;
    }
  },

  async deleteClass(id: string) {
    try {
      const { error } = await supabase
        .from('classes')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Class deletion error:', error);
      throw error;
    }
  },

  async uploadClassImage(file: File) {
    try {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        throw new Error('Invalid file type. Please upload an image.');
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        throw new Error('File size too large. Maximum size is 5MB.');
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `class-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  },
};

export const blogManagement = {
  async createPost(postData: z.infer<typeof blogPostSchema>) {
    try {
      const validatedData = blogPostSchema.parse(postData);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([validatedData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Blog post creation error:', error);
      throw error;
    }
  },

  async updatePost(id: string, postData: Partial<z.infer<typeof blogPostSchema>>) {
    try {
      const validatedData = blogPostSchema.partial().parse(postData);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Blog post update error:', error);
      throw error;
    }
  },

  async deletePost(id: string) {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Blog post deletion error:', error);
      throw error;
    }
  },

  async uploadPostImage(file: File) {
    try {
      if (!file.type.startsWith('image/')) {
        throw new Error('Invalid file type. Please upload an image.');
      }

      if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size too large. Maximum size is 5MB.');
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  },
};