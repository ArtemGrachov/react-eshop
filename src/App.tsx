import { ComponentType, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HttpClientProvider } from '@/providers/http-client';

import Header from '@/components/layout/Header/Header';

const PageCatalogue = lazy(() => import('@/pages/Catalogue/Catalogue'));
const PageProduct = lazy(() => import('@/pages/Product/Product'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><PageCatalogue /></Suspense>,
  },
  {
    path: '/product/:id',
    element: <Suspense><PageProduct /></Suspense>,
  },
]);

const App: ComponentType = () => {
  return (
    <HttpClientProvider>
      <Header />
      <RouterProvider router={router} />
    </HttpClientProvider>
  )
}

export default App;
