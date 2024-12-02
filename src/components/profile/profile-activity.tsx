import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Calendar, MessageSquare } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth-context';

interface Activity {
  id: string;
  type: 'class_booking' | 'forum_post' | 'blog_comment';
  title: string;
  created_at: string;
}

export function ProfileActivity() {
  const { user } = useAuth();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        // Fetch user's recent activity from Supabase
        const { data, error } = await supabase
          .from('user_activity')
          .select('*')
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) throw error;
        setActivities(data || []);
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      fetchActivity();
    }
  }, [user]);

  if (loading) {
    return <div className="text-center text-sage-600">Loading activity...</div>;
  }

  if (!activities.length) {
    return (
      <div className="text-center text-sage-600 py-8">
        No activity yet. Start participating in classes and discussions!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          {activity.type === 'class_booking' ? (
            <Calendar className="w-5 h-5 text-sage-500" />
          ) : (
            <MessageSquare className="w-5 h-5 text-sage-500" />
          )}
          <div>
            <p className="text-sage-900">{activity.title}</p>
            <p className="text-sm text-sage-500">
              {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}