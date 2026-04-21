import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainLayout } from './layouts/mainlayout.jsx'
import { ProductLayout } from './layouts/ProductLayout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import BuyCard from './pages/BuyCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<ProductLayout />}>
          <Route path="/produto" element={<BuyCard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)