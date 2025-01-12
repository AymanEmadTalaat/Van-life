import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Vans, { Loader as vansLoader } from "../Vans/Vans.jsx";
import VanDetail, { Loader as vansDetailLoader } from "../Vans/VanDetail.jsx";
import Dashboard, { Loader as dashboardLoader } from "../Host/Dashboard.jsx";
import VansHost, { Loader as vansHostLoader } from "../Host/VansHost.jsx";
import Income from "../Host/Income.jsx";
import Reviews from "../Host/Reviews.jsx";
import VanHostDetail, {
  Loader as vansHostDetailLoader,
} from "../Host/VanHostDetail.jsx";
import Layout from "../Layout.jsx";
import HostLayout from "../hostLayout.jsx";
import Details from "../Host/Details.jsx";
import Pricing from "../Host/Pricing.jsx";
import Photos from "../Host/Photos.jsx";
import NotFound from "../NotFound.jsx";
import Login from "../Login/Login.jsx";
import AuthRequired from "../AuthRequired.jsx";
import Error from "../Error.jsx";

import "/server";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vansDetailLoader}
        errorElement={<Error />}
      />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={dashboardLoader}
            errorElement={<Error />}
          />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="vans"
            element={<VansHost />}
            loader={vansHostLoader}
            errorElement={<Error />}
          />

          <Route
            path="vans/:id"
            element={<VanHostDetail />}
            loader={vansHostDetailLoader}
            errorElement={<Error />}
          >
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
