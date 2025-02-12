import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import Login from '../pages/Authentication/Login';
import SignUp from './../pages/Authentication/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/forgot',
    element: <ForgotPassword/>
  },
  {
    path: '/register',
    element: <SignUp/>
  },
]);

export default routes;
