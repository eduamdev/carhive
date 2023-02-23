import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Icons } from "./Icons";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-y-20 pt-20 pb-8">
      <div className="h-px">
        <div className="absolute left-0 border-neutral-800 w-full h-px border-t"></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-20">
          <div>
            <div className="font-semibold text-3xl tracking-wide text-center md:text-left">
              <Link to="/">Rides</Link>
            </div>
            <ul className="mt-10 flex flex-row items-center gap-x-8">
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#features">
                  Features
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <Link to="/vehicles">Fleet</Link>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#faqs">
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-x-10 max-w-xs">
            <div className="border border-neutral-900 rounded-lg">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center ">
                <Icons.RoundedCorners className="absolute inset-0 h-full w-full stroke-gray-400" />
                <Icons.QRCode className="bg-slate-200" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Download the app</p>
              <p>Scan the QR code to download the app from the App Store.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-neutral-900 pt-8 pb-12 text-[15px] tracking-wide">
        <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Built by{" "}
          <a
            href="https://github.com/edroamz"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-200"
          >
            Eduardo Ambriz
          </a>
        </p>
      </div>
    </footer>
  );
}
