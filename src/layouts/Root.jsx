import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function () {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
