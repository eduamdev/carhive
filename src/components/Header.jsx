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
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-x-10">
            <li>
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <HashLink smooth to="/#faqs">
                FAQs
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="hidden md:flex flex-row gap-x-10">
        <li>
          <button>Log In</button>
        </li>
        <li>
          <button>Sign Up</button>
        </li>
      </ul>
      <div className="md:hidden">menu icon</div>
    </header>
  );
}
