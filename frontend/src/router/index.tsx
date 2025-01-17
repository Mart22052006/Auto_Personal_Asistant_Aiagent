import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout/layout';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Tasks = lazy(() => import('@/pages/Tasks'));
const Meeting = lazy(() => import('@/pages/Meeting'));
const NotFound = lazy(() => import('@/pages/Error/404'));
const Login = lazy(() => import('@/pages/Login'));
const Registration = lazy(() => import('@/pages/Login/register'));
const Profile = lazy(() => import('@/pages/Profile'));
const Email = lazy(() => import('@/pages/Email')); // Email 页面
const Report = lazy(() => import('@/pages/Report'));
const Calendar = lazy(() => import('@/pages/Calendar')); // Google Calendar 页面

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
        handle: {
          title: 'Homepage',
        },
      },
      {
        path: '/tasks',
        element: <Tasks />,
        handle: {
          title: 'Tasks',
        },
      },
      {
        path: '/meeting',
        element: <Meeting />,
        handle: {
          title: 'Meeting',
        },
      },
      {
        path: '/profile',
        element: <Profile />,
        handle: {
          title: 'User Center',
        },
      },
      {
        path: '/email', // Email 页面
        element: <Email />,
        handle: {
          title: 'Email',
        },
      },
      {
        path: '/report', // Report 页面
        element: <Report />,
        handle: {
          title: 'Report',
        },
      },
      {
        path: '/calendar', // Google Calendar 页面
        element: <Calendar />,
        handle: {
          title: 'Google Calendar',
        },
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
