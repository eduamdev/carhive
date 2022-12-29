import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="h-28 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-x-20">
        <div className="font-bold text-3xl">
          {" "}
          <Link to="/">Rides</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-x-10">
            <li>
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <Link to="/cars">Catalog</Link>
            </li>
            <li>
              <HashLink smooth to="/#faqs">
                FAQs
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul className="flex flex-row gap-x-10">
          <li>
            <button>Log In</button>
          </li>
          <li>
            <button>Download</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
