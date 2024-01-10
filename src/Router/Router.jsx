import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LayOut from '../Pages/LayOut/LayOut'
import RoomDetails from '../Pages/Home/RoomDetails/RoomDetails'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut></LayOut>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/room/:id',
        element: <RoomDetails></RoomDetails>
      }
    ],
  },
])