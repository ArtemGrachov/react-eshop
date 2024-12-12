import { ComponentType, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HttpClientProvider } from './providers/http-client';

const PageCatalogue = lazy(() => import('@/pages/Catalogue/Catalogue'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><PageCatalogue /></Suspense>,
  },
]);

const App: ComponentType = () => {
  return (
    <HttpClientProvider>
      <RouterProvider router={router} />
    </HttpClientProvider>
  )
}

export default App;
