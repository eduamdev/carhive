import "./main.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicles } from "./pages/Vehicles";
import { Vehicle } from "./pages/Vehicle";
import { NotFound } from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-col px-6 2xl:px-0 gap-y-16">
        <Header></Header>
        <main className="flex flex-col gap-y-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:slug" element={<Vehicle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
