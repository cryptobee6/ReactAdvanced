import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { EventPage, loader as postLoader } from './pages/EventPage';
import { DeleteEvent, loader as postLoader1 } from './pages/DeleteEvent';
import { EventsList, loader as postListLoader } from './pages/EventsList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <EventsList />,
        loader: postListLoader,
      },
      {
        path: "/events/:id",
        element: <EventPage />,
        loader: postLoader,
        // action: addComment,
      },
      {
        path: "/events/:id",
        element: <DeleteEvent />,
        loader: postLoader1,
        // action: addComment,
      }

    ],
  },
  
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      
    </ChakraProvider>
  </React.StrictMode>,
);


// {
//   path: "/events/:id",
//   element: <DeleteEvent />,
//   loader: postLoader1,
//   // action: addComment,
// // 