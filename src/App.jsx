import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import Preloader from './components/ui/preloader';
//require('dotenv').config();

const App = () => {
  return (
    <>
    <React.Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </React.Suspense>
    </>
  )
}

export default App