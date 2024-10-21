import ReactDom from 'react-dom/client';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/', //root/home route
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true, // index true, When first visited app home is the first page rendered inside
        loader: async () => redirect('/About'), //home will be first component rendered
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
