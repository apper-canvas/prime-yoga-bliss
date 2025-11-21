import { createBrowserRouter, Suspense } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '@/components/organisms/Layout';

// Lazy load all page components
const Home = lazy(() => import('@/components/pages/Home'));
const Book = lazy(() => import('@/components/pages/Book'));
const MySessions = lazy(() => import('@/components/pages/MySessions'));
const Profile = lazy(() => import('@/components/pages/Profile'));
const Payment = lazy(() => import('@/components/pages/Payment'));
const Confirmation = lazy(() => import('@/components/pages/Confirmation'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
    <div className="text-center space-y-4">
      <svg className="animate-spin h-12 w-12 text-primary-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  </div>
);

// Main routes configuration
const mainRoutes = [
  {
    path: "",
    index: true,
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "book",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Book />
      </Suspense>
    )
  },
  {
    path: "my-sessions",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <MySessions />
      </Suspense>
    )
  },
  {
    path: "profile",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Profile />
      </Suspense>
    )
  },
  {
    path: "payment",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Payment />
      </Suspense>
    )
  },
  {
    path: "confirmation",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Confirmation />
      </Suspense>
    )
  }
];

// Router configuration
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: mainRoutes
  }
];

export const router = createBrowserRouter(routes);