import { CommunityHero } from '../../components/community/community-hero';
import { ForumList } from '../../components/community/forum-list';
import { CommunitySidebar } from '../../components/community/community-sidebar';

export function CommunityPage() {
  return (
    <div className="min-h-screen">
      <CommunityHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <ForumList />
          </div>
          <div className="lg:col-span-4">
            <CommunitySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}