import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { AuthModal } from '../auth/auth-modal';
import { useAuth } from '../../lib/auth-context';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-sage-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="logo-container">
                <img
                  src="/SahanaLogo.png"
                  alt="Sahana Collective"
                  className="h-8"
                />
              </div>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {['Classes', 'Community', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-sage-100 border-b-2 border-transparent hover:border-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center text-white hover:text-sage-100 transition-colors duration-200"
                >
                  <User className="h-5 w-5 mr-1" />
                  <span>Profile</span>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => signOut()}
                  className="border-white text-white hover:bg-white hover:text-sage-500"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-white text-sage-500 hover:bg-sage-100 transition-colors duration-200"
              >
                Join Now
              </Button>
            )}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sage-100 hover:bg-sage-600 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-sage-600">
          <div className="pt-2 pb-3 space-y-1">
            {['Classes', 'Community', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-white hover:text-sage-100 hover:bg-sage-700 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-sage-100 hover:bg-sage-700 transition-colors duration-200"
                >
                  Profile
                </Link>
                <div className="px-3 py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white text-white hover:bg-white hover:text-sage-500"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div className="px-3 py-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-white text-sage-500 hover:bg-sage-100"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Join Now
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}