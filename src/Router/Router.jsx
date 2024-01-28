import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LayOut from '../Pages/LayOut/LayOut'
import RoomDetails from '../Pages/Home/RoomDetails/RoomDetails'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'


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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '//signup',
        element: <SignUp></SignUp>
      }
    ],
  },
])