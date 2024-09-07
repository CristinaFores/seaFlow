import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import WeatherHomePage from '../pages/WeatherHomePage'

import ROUTE_PATH from './routerPath'

const routes = [
  {
    path: ROUTE_PATH.ROOT, element: <MainLayout />,
    children: [
      { path: ROUTE_PATH.DASHBOARD, element: <WeatherHomePage /> },
      { path: ROUTE_PATH.ASTRO, element: <h1>Astro Info</h1> },
      { path: ROUTE_PATH.WAVES, element: <h1>Oleaje</h1> },
    ]
  },
]

export const router = createBrowserRouter(routes)