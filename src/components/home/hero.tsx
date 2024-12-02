import { useState } from 'react';
import { Button } from '../ui/button';
import { AuthModal } from '../auth/auth-modal';

export function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
          alt="Woman practicing yoga in a peaceful setting"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Inner Peace
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Join our collective of mindful practitioners and discover the transformative power of yoga. 
          Whether you're a beginner or an experienced yogi, we're here to guide you on your journey.
        </p>
        <div className="mt-10 flex gap-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => setIsAuthModalOpen(true)}
          >
            Start Your Journey
          </Button>
          <Button variant="secondary" size="lg">
            View Classes
          </Button>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}