import { RouterProvider } from 'react-router';
import { router } from './utils/routes';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './utils/CartContext';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartProvider>
  );
}
