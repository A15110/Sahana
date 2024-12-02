import { Button } from '../ui/button';

export function CommunityHero() {
  return (
    <div className="relative py-16 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif tracking-tight text-sage-900 sm:text-5xl">
            Sahana Community
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-sage-600">
            Connect with fellow practitioners, share experiences, and grow together in your yoga journey.
          </p>
          <div className="mt-8">
            <Button size="lg">Start a Discussion</Button>
          </div>
        </div>
      </div>
    </div>
  );
}