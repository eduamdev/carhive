import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-y-20 pt-20 pb-8">
      <div className="h-px">
        <div className="absolute left-0 border-neutral-800 w-full h-px border-t"></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-y-20">
          <div>
            <div className="font-semibold text-3xl">
              <Link to="/">Rides</Link>
            </div>
            <ul className="mt-12 flex flex-row items-center gap-x-8">
              <li className="text-neutral-300 hover:text-neutral-50 hover:transition-colors">
                <HashLink smooth to="/#features">
                  Features
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 hover:transition-colors">
                <Link to="/vehicles">Fleet</Link>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 hover:transition-colors">
                <HashLink smooth to="/#faqs">
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-x-10 max-w-xs">
            <div className="border border-neutral-900 rounded-lg">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <svg
                  viewBox="0 0 96 96"
                  fill="none"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"
                >
                  <path
                    d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold">Download the app</p>
              <p>Scan the QR code to download the app from the App Store.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 border-t border-neutral-900 py-8">
        <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
        <p>Designed and developed by Eduardo Ambriz</p>
      </div>
    </footer>
  );
}
