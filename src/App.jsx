import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
//import Preloader from './components/ui/preloader';

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App