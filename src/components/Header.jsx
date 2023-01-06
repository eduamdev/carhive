import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="h-28 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-x-20">
        <div className="font-bold text-3xl">
          <Link to="/">Rides</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-x-10">
            <li>
              <HashLink smooth to="/#features">
                Features
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
      <div className="md:hidden">
        <svg
          className="h-7 w-7 stroke-current text-neutral-200 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 160h352M80 256h352M80 352h352"
          />
        </svg>
      </div>
    </header>
  );
}
