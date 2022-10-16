import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "signup",
          element: <Signup></Signup>
        },
        {
          path: "login",
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
