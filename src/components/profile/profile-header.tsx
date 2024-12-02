import { useAuth } from '../../lib/auth-context';

export function ProfileHeader() {
  const { user } = useAuth();
  const userData = user?.user_metadata;

  return (
    <div className="bg-white border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full bg-sage-100 flex items-center justify-center">
            {userData?.avatar_url ? (
              <img
                src={userData.avatar_url}
                alt={userData.full_name}
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <span className="text-3xl font-serif text-sage-600">
                {userData?.full_name?.[0] || user?.email?.[0]?.toUpperCase()}
              </span>
            )}
          </div>
          
          <div>
            <h1 className="text-2xl font-serif text-sage-900">
              {userData?.full_name || 'Yoga Practitioner'}
            </h1>
            <p className="text-sage-600">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}