import { formatDistanceToNow } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import { ForumThread } from '../../lib/database';

interface ForumThreadCardProps {
  thread: ForumThread & {
    users: {
      full_name: string;
      avatar_url?: string;
    };
    forum_replies: {
      count: number;
    }[];
  };
}

export function ForumThreadCard({ thread }: ForumThreadCardProps) {
  const replyCount = thread.forum_replies[0]?.count || 0;

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        <img
          src={thread.users.avatar_url || 'https://via.placeholder.com/40'}
          alt={thread.users.full_name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-sage-900">{thread.title}</h3>
          <p className="text-sage-600 mt-1">{thread.content.slice(0, 150)}...</p>
          <div className="flex items-center space-x-4 mt-4 text-sm text-sage-500">
            <span>{thread.users.full_name}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(thread.created_at), { addSuffix: true })}</span>
            <span>•</span>
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}