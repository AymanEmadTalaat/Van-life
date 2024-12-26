import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Vans from "../Vans/Vans.jsx";
import VanDetail from "../Vans/VanDetail.jsx";
import Dashboard from "../Host/Dashboard.jsx";
import VansHost from "../Host/VansHost.jsx";
import Income from "../Host/Income.jsx";
import Reviews from "../Host/Reviews.jsx";
import VanHostDetail from "../Host/VanHostDetail.jsx";
import Layout from "../Layout.jsx";
import HostLayout from "../hostLayout.jsx";
import Details from "../Host/Details.jsx";
import Pricing from "../Host/Pricing.jsx";
import Photos from "../Host/Photos.jsx";

import "/server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<VansHost />} />

            <Route path="vans/:id" element={<VanHostDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
