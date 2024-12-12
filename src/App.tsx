import { ComponentType, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PageCatalogue = lazy(() => import('@/pages/Catalogue/Catalogue'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><PageCatalogue /></Suspense>,
  },
]);

const App: ComponentType = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
