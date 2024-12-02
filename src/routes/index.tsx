import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from '../pages/home';
import { AuthPage } from '../pages/auth';
import { ClassesPage } from '../pages/classes';
import { ContactPage } from '../pages/contact';
import { BlogPage } from '../pages/blog';
import { CommunityPage } from '../pages/community';
import { ProfilePage } from '../pages/profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'classes',
        element: <ClassesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);