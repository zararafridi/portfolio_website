import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;