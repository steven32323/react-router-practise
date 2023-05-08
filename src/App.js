import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// https://example.com/products -- anything after .com is a 'path'

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;