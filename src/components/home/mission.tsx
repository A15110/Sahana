import { Leaf, Heart, Users } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-sage-800 mb-4">Welcome to Sahana Collective</h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            We are a community dedicated to exploring the art of mindfulness, movement, and meaningful living.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
              <Leaf className="h-8 w-8 text-sage-600" />
            </div>
            <h3 className="text-xl font-serif text-sage-800 mb-4">Mindful Practice</h3>
            <p className="text-sage-600">
              Through yoga, meditation, and holistic practices, our channel is a space to cultivate balance, embrace transformation, and find unity within yourself and the world around you.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
              <Heart className="h-8 w-8 text-sage-600" />
            </div>
            <h3 className="text-xl font-serif text-sage-800 mb-4">Shared Values</h3>
            <p className="text-sage-600">
              At Sahana Collective, we believe in the power of patience, resilience, and shared growth. Whether you're stepping onto your mat for the first time or deepening an existing practice, we're here to inspire your journey.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
              <Users className="h-8 w-8 text-sage-600" />
            </div>
            <h3 className="text-xl font-serif text-sage-800 mb-4">Growing Together</h3>
            <p className="text-sage-600">
              Join us as we flow, breathe, and grow together. This is more than a practice—it's a way of life.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-4 bg-white rounded-lg shadow-md">
            <p className="text-lg text-sage-700 italic">
              "Guided flows, wellness tips, and conversations about living intentionally."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}