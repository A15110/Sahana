import { supabase } from './supabase';

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface ForumThread {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface ForumReply {
  id: string;
  thread_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface YogaClass {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  instructor_id: string;
  max_participants: number;
  created_at: string;
  updated_at: string;
}

export const db = {
  posts: {
    async getAll(options = { page: 1, limit: 10, category: null }) {
      let query = supabase
        .from('posts')
        .select(`
          *,
          users (id, full_name, avatar_url)
        `)
        .order('created_at', { ascending: false });
      
      if (options.category) {
        query = query.eq('category', options.category);
      }
      
      const { data, error } = await query
        .range((options.page - 1) * options.limit, options.page * options.limit - 1);
      
      if (error) throw error;
      return data;
    },
    
    async getById(id: string) {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          users (id, full_name, avatar_url),
          comments (
            id,
            content,
            created_at,
            users (id, full_name, avatar_url)
          )
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    }
  },
  
  comments: {
    async create(commentData: Partial<Comment>) {
      const { data, error } = await supabase
        .from('comments')
        .insert([commentData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  },
  
  forum: {
    async getThreads(options = { page: 1, limit: 10, category: null }) {
      let query = supabase
        .from('forum_threads')
        .select(`
          *,
          users (id, full_name, avatar_url),
          forum_replies (count)
        `)
        .order('created_at', { ascending: false });
      
      if (options.category) {
        query = query.eq('category', options.category);
      }
      
      const { data, error } = await query
        .range((options.page - 1) * options.limit, options.page * options.limit - 1);
      
      if (error) throw error;
      return data;
    },
    
    async createThread(threadData: Partial<ForumThread>) {
      const { data, error } = await supabase
        .from('forum_threads')
        .insert([threadData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    
    async createReply(replyData: Partial<ForumReply>) {
      const { data, error } = await supabase
        .from('forum_replies')
        .insert([replyData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  },

  classes: {
    async getAll(options = { page: 1, limit: 10, level: null }) {
      let query = supabase
        .from('yoga_classes')
        .select(`
          *,
          users!instructor_id (id, full_name, avatar_url)
        `)
        .order('created_at', { ascending: false });
      
      if (options.level) {
        query = query.eq('level', options.level);
      }
      
      const { data, error } = await query
        .range((options.page - 1) * options.limit, options.page * options.limit - 1);
      
      if (error) throw error;
      return data;
    }
  }
};