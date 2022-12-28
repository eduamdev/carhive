import "./main.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cars } from "./pages/Cars";

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
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cars" element={<Cars></Cars>}></Route>
        </Routes>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
