import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div data-theme="light" className=''>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
