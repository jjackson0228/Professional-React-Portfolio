import ReactDom from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/', //root/home route
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true, // index true, When first visited app home is the first page rendered inside
        element: <Home />, //home will be first component rendered
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
