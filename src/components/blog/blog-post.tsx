import { formatDistanceToNow } from 'date-fns';
import { Post } from '../../lib/database';
import { Button } from '../ui/button';

interface BlogPostProps {
  post: Post & {
    users: {
      full_name: string;
      avatar_url?: string;
    };
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="card">
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      )}
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={post.users.avatar_url || 'https://via.placeholder.com/40'}
            alt={post.users.full_name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sage-900 font-medium">{post.users.full_name}</p>
            <p className="text-sage-500 text-sm">
              {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif text-sage-900 mb-4">{post.title}</h2>
        <p className="text-sage-600 mb-6">
          {post.content.slice(0, 200)}...
        </p>
        
        <div className="flex items-center justify-between">
          <Button variant="outline">Read More</Button>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage-100 text-sage-800">
            {post.category}
          </span>
        </div>
      </div>
    </article>
  );
}