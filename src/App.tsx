import { ComponentType, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HttpClientProvider } from '@/providers/http-client';
import { CartProvider } from '@/providers/cart';
import { ModalProvider } from '@/providers/modals';

import Header from '@/components/layout/Header/Header';
import ModalRoot from '@/modals/ModalRoot/ModalRoot';

const PageCatalogue = lazy(() => import('@/pages/Catalogue/Catalogue'));
const PageProduct = lazy(() => import('@/pages/Product/Product'));
const PageSubmit = lazy(() => import('@/pages/Checkout/Checkout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><PageCatalogue /></Suspense>,
  },
  {
    path: '/product/:id',
    element: <Suspense><PageProduct /></Suspense>,
  },
  {
    path: '/checkout',
    element: <Suspense><PageSubmit /></Suspense>
  }
]);

const App: ComponentType = () => {
  return (
    <HttpClientProvider>
      <CartProvider>
        <ModalProvider>
          <Header />
          <RouterProvider router={router} />
          <ModalRoot />
        </ModalProvider>
      </CartProvider>
    </HttpClientProvider>
  )
}

export default App;
