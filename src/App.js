import "./main.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cars } from "./pages/Cars";
import { Car } from "./pages/Car";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:slug" element={<Car />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
