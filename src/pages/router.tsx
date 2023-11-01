import { createBrowserRouter } from "react-router-dom";
import { Home } from './Home';
import { Jessica } from './Jessica';
import { Gabriel } from './Gabriel';
import { Stephan } from './Stephan';
import { Tanara } from './Tanara';
import { Yuri } from './Yuri';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gabriel",
      element: <Gabriel />,
    },
    {
      path: "/jessica",
      element: <Jessica />,
    },
    {
      path: "/stephan",
      element: <Stephan />,
    },
    {
      path: "/tanara",
      element: <Tanara />,
    },
    {
      path: "/yuri",
      element: <Yuri />,
    },
  ]);
