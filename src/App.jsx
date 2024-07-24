import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/app-layout';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landing';
import Link from './pages/link';
import RedirectLink from './pages/redirect-link';
import UrlProvider from './context';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/link/:id",
        element: <Link />
      },
      {
        path: "/:id",
        element: <RedirectLink />
      },
    ],
  },
]);
function App() {
  return (
    <>
      <UrlProvider>
        <RouterProvider router={router} />
      </UrlProvider>
    </>
  )
}

export default App
