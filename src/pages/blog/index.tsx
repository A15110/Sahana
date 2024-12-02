import { BlogHero } from '../../components/blog/blog-hero';
import { BlogList } from '../../components/blog/blog-list';
import { BlogSidebar } from '../../components/blog/blog-sidebar';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <BlogList />
          </div>
          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}