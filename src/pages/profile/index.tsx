import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth-context';
import { ProfileHeader } from '../../components/profile/profile-header';
import { ProfileSettings } from '../../components/profile/profile-settings';
import { ProfileActivity } from '../../components/profile/profile-activity';

export function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'settings' | 'activity'>('settings');

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-sage-50">
      <ProfileHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex border-b border-sage-200 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'text-sage-900 border-b-2 border-sage-500'
                : 'text-sage-500 hover:text-sage-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'activity'
                ? 'text-sage-900 border-b-2 border-sage-500'
                : 'text-sage-500 hover:text-sage-700'
            }`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>

        {activeTab === 'settings' ? <ProfileSettings /> : <ProfileActivity />}
      </div>
    </div>
  );
}