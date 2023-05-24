import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './routes/Home.tsx';
import { Pokedex } from './routes/Pokedex.tsx';
import { NotFound } from './components/NotFound/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
      },
      {
        path: "/Pokedex",
        element: <Pokedex />,
        errorElement: <NotFound />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)