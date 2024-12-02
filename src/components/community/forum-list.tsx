import { useEffect, useState } from 'react';
import { ForumThread, db } from '../../lib/database';
import { ForumThreadCard } from './forum-thread-card';

export function ForumList() {
  const [threads, setThreads] = useState<ForumThread[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const data = await db.forum.getThreads({ page });
        setThreads(data);
      } catch (err) {
        setError('Failed to load discussions. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchThreads();
  }, [page]);

  if (loading) {
    return <div className="text-center text-sage-600">Loading discussions...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {threads.map((thread) => (
        <ForumThreadCard key={thread.id} thread={thread} />
      ))}
    </div>
  );
}