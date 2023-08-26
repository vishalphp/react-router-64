import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

/*
const elemenRouters = createRoutesFromElements(
   <Route>
      <Route path='/' element={<Home />} />
      <Route path="/products" element={<Product />} />
   </Route>
);
const router = createBrowserRouter(elemenRouters);*/

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/products', element: <Product />}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
