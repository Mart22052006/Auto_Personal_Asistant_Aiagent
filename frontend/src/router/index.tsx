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
const Email = lazy(() => import('@/pages/Email')); // 引入 Email 页面
const Report = lazy(() => import('@/pages/Report')); 

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
        path: '/email', // 新增 Email 路由
        element: <Email />,
        handle: {
          title: 'Email', // 页面标题
        },
      },
      {
        path: '/report', // 新增 Email 路由
        element: <Report />,
        handle: {
          title: 'Report', // 页面标题
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
