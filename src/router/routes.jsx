import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import ROUTE_PATH from './routerPath'

const routes = [
  {
    path: ROUTE_PATH.ROOT, element: <MainLayout />,
    children: [
      { path: ROUTE_PATH.DASHBOARD, element: <h1>Dashboard</h1> },
      { path: ROUTE_PATH.ASTRO, element: <h1>Astro Info</h1> },
      { path: ROUTE_PATH.FORECAST, element: <h1>Forecast Info</h1> },
      { path: ROUTE_PATH.WAVES, element: <h1>Waves Info</h1> },
    ]
  },
]

export const router = createBrowserRouter(routes)