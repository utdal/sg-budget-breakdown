export default function SiteFooter() {
  return (
    <footer className="py-8 px-4 lg:px-8 bg-secondary text-white">
      <div className="max-w-6xl mx-auto space-y-8 lg:grid lg:grid-cols-4 lg:space-y-0">
        <div className="lg:col-span-2">
          <div className="text-xl font-medium">
            A project by the UT Dallas Student Government
          </div>
          <div className="text-2xl font-semibold"></div>
          <div>
            Student Union 2nd Floor,{" "}
            <a
              className="underline"
              href="https://map.concept3d.com/?id=1772#!m/545136?ce/52325?ct/42147?mc/32.986385,-96.74868?z/19?lvl/2"
            >
              SU 2.401
            </a>
            <div>Monday-Friday, 8:30am - 5:00pm</div>
            <div>972-883-2284</div>
            <a
              className="underline"
              href="mailto:sg@utdallas.edu?subject=UT Dallas Budget Breakdown"
            >
              sg@utdallas.edu
            </a>
          </div>
        </div>
        <div>
          <div className="text-xl font-medium">University Links</div>
          <ul>
            <li className="pt-1 text-lg">
              <a className="underline" href="https://bursar.utdallas.edu/">
                Bursar Office
              </a>
            </li>
            <li className="pt-1 text-lg">
              <a className="underline" href="https://finance.utdallas.edu/">
                Office of Budget and Finance
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xl font-medium">Other Useful Links</div>
          <ul>
            <li className="pt-1 text-lg">
              See our website at{" "}
              <a
                className="underline"
                href="https://github.com/utdal/sg-budget-breakdown"
              >
                sg.utdallas.edu
              </a>
            </li>
            <li className="pt-1 text-lg">
              See the project on{" "}
              <a
                className="underline"
                href="https://github.com/utdal/sg-budget-breakdown"
              >
                GitHub
              </a>
            </li>
            <li className="pt-1 text-lg">
              Connect with us on{" "}
              <a
                className="underline"
                href="https://github.com/utdal/sg-budget-breakdown"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
