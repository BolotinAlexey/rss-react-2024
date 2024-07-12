import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import { loaderDetails, loaderPageSearch } from './service/loaders';
import DetailsCard from './components/DetailsCard';
import { createPortal } from 'react-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      loader: loaderPageSearch,
      children: [
        {
          path: '/details/:namePlanet',
          element: createPortal(<DetailsCard />, document.body),
          loader: loaderDetails,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
