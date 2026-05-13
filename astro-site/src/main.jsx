import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { MainLayout } from "./layouts/mainlayout.jsx";
import { ProductLayout } from "./layouts/productlayout.jsx";
import ContatoLayout from "./layouts/contatolayout.jsx";

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home.jsx";
import BuyCard from "./pages/BuyCard.jsx";
import Contato from "./pages/Contato.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<ProductLayout />}>
          <Route path="/produto" element={<BuyCard />} />
        </Route>

        <Route element={<ContatoLayout />}>
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);