import { Outlet } from "react-router";
import "../components/App/App.css";
import Nav from "./Nav/Nav.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Layout() {
  return (
    <div className="container">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
