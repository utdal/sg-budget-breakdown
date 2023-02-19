import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const activeClasses = navOpen ? "block" : "hidden";
  const inactiveClasses = navOpen ? "hidden" : "block";

  return (
    <nav className="sticky top-0 flex flex-wrap bg-slate-700 text-white">
      <div className="w-full md:flex-1 md:w-auto flex justify-between">
        <a
          href="."
          className="flex-1 p-4 hover:bg-slate-900 focus:bg-slate-900 font-bold text-lg transition"
        >
          UTD Budget Breakdown
        </a>
        <div className="p-2">
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg hover:bg-slate-900 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-200 ${inactiveClasses}`}
            id="navbar-open"
            aria-controls="navbar-open"
            aria-expanded="false"
            onClick={handleNavToggle}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className={`p-2 rounded-lg hover:bg-slate-900 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-200 text-[2rem] ${activeClasses}`}
            id="navbar-close"
            aria-controls="navbar-close"
            aria-expanded="false"
            onClick={handleNavToggle}
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:block p-4 pt-0 md:p-4 ${activeClasses}`}
        id="navbar-nav"
      >
        <ul className="flex flex-col md:flex-row">
          <li>
            <Link
              href="/#findings"
              className="m-2 px-3 py-2 hover:bg-slate-900 focus:bg-slate-900 rounded-md font-bold text-lg transition"
            >
              Findings
            </Link>
          </li>
          <li>
            <Link
              href="/#future"
              className="m-2 px-3 py-2 hover:bg-slate-900 focus:bg-slate-900 rounded-md font-bold text-lg transition"
            >
              Future
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="m-2 px-3 py-2 hover:bg-slate-900 focus:bg-slate-900 rounded-md font-bold text-lg transition"
            >
              People
            </Link>
          </li>
          <li>
            <Link
              href="/details"
              className="m-2 px-3 py-2 hover:bg-slate-900 focus:bg-slate-900 rounded-md font-bold text-lg transition"
            >
              Full Breakdown
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
