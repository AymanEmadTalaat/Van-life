import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import { Loader as vansLoader } from "../Vans/Vans.jsx";
import { Loader as vansDetailLoader } from "../Vans/VanDetail.jsx";
import { Loader as dashboardLoader } from "../Host/Dashboard.jsx";
import { Loader as vansHostLoader } from "../Host/VansHost.jsx";
import Income from "../Host/Income.jsx";
import Reviews from "../Host/Reviews.jsx";
import { Loader as vansHostDetailLoader } from "../Host/VanHostDetail.jsx";
import Layout from "../Layout.jsx";
import HostLayout from "../hostLayout.jsx";
import Details from "../Host/Details.jsx";
import Pricing from "../Host/Pricing.jsx";
import Photos from "../Host/Photos.jsx";
import NotFound from "../NotFound.jsx";
import Login from "../Login/Login.jsx";
import AuthRequired from "../AuthRequired.jsx";
import Error from "../Error.jsx";
import { lazy, Suspense } from "react";

import "/server";

const Vans = lazy(() => {
  return import("../Vans/Vans.jsx");
});

const VanDetail = lazy(() => {
  return import("../Vans/VanDetail.jsx");
});

const Dashboard = lazy(() => {
  return import("../Host/Dashboard.jsx");
});

const VansHost = lazy(() => {
  return import("../Host/VansHost.jsx");
});

const VanHostDetail = lazy(() => {
  return import("../Host/VanHostDetail.jsx");
});

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Vans />
          </Suspense>
        }
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <VanDetail />
          </Suspense>
        }
        loader={vansDetailLoader}
        errorElement={<Error />}
      />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Dashboard />
              </Suspense>
            }
            loader={dashboardLoader}
            errorElement={<Error />}
          />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="vans"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <VansHost />
              </Suspense>
            }
            loader={vansHostLoader}
            errorElement={<Error />}
          />

          <Route
            path="vans/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <VanHostDetail />
              </Suspense>
            }
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
