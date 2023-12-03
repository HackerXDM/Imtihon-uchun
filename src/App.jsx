import React from 'react'

//router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

//pages
import Katalog from "./pages/Katalog"
import KompaniyaHaqida from "./pages/KompaniyaHaqida"
import Kontaktlar from "./pages/Kontaktlar"
import OnlaynBaholash from "./pages/OnlaynBaholash"
import Sotish from "./pages/Sotish"
import Xizmatlar from "./pages/Xizmatlar"
import Mainlayout from './layout/Mainlayout'


const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Sotish />} />
        <Route path='/onlaynBaholash' element={<OnlaynBaholash />} />
        <Route path='/katalog' element={<Katalog />} />
        <Route path='/kompaniyaHaqida' element={<KompaniyaHaqida />} />
        <Route path='/xizmatlar' element={<Xizmatlar />} />
        <Route path='/kontakt' element={<Kontaktlar />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App