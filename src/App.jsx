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
import YetkazibBerishVaKafolat from "./pages/YetkazibBerishVaKafolat"
import Mainlayout from './layout/Mainlayout'
import Detail from "./pages/Detail"
import Bag from "./pages/Bag"
import OnlaynKuzAksessuarlari from "./pages/OnlaynKuzAksessuarlari"
import Telefon from "./pages/Telefon"
import OnlaynKuzSoatlari from "./pages/OnlaynKuzSoatlari"
import ZargarlikBuyumlari from "./pages/ZargarlikBuyumlari"
import ShveytsariyaSoatlari from './pages/ShveytsariyaSoatlari'
import Index from './Home'


const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Index/>} />
        <Route path='/sotish' element={<Sotish />} />
        <Route path='/onlaynBaholash' element={<OnlaynBaholash />} />
        <Route path='/katalog' element={<Katalog />} />
        <Route path='/kompaniya_haqida/yetkazib_berish_va_kafolat' element={<YetkazibBerishVaKafolat/>} />
        <Route path='/kompaniya_haqida' element={<KompaniyaHaqida />} />
        <Route path='/xizmatlar' element={<Xizmatlar />} />
        <Route path='/kontakt' element={<Kontaktlar />} />
        <Route path='/onlayn_baholash/onlayn_kuz_aksessuarlari' element={<OnlaynKuzAksessuarlari />} />
        <Route path='/katalog/:id/' element={<Detail/>} />
        <Route path='/sotish/sumkalar' element={<Bag/>} />
        <Route path='/sotish/telefon' element={<Telefon/>} />
        <Route path='/onlayn_baholash/onlayn_kuz_soatlari' element={<OnlaynKuzSoatlari/>} />
        <Route path='/sotish/zargarlik_buyumlari' element={<ZargarlikBuyumlari/>} />
        <Route path='/sotish/shveytsariya_soatlari/Brendni_sotib_olish' element={<ShveytsariyaSoatlari/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App
