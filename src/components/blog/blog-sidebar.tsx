import { Search } from 'lucide-react';

export function BlogSidebar() {
  const categories = [
    'Yoga Practice',
    'Meditation',
    'Mindfulness',
    'Wellness',
    'Community',
  ];

  return (
    <div className="space-y-8">
      <div className="card">
        <h3 className="text-lg font-medium text-sage-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-md border-sage-300 focus:border-sage-500 focus:ring-sage-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-sage-400" />
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-medium text-sage-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              className="block w-full text-left px-4 py-2 rounded-md hover:bg-sage-50 text-sage-700 hover:text-sage-900"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}