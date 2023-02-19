import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>UT Dallas Budget Breakdown - Overview</title>
        <meta property="og:site_name" content="UTD Student Government" />
        <meta property="og:title" content="University Budget Breakdown" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Learn how your tuition funds university departments and the services that you use, and see clear, accessible information on the university's finances."
        />
        <meta
          property="og:url"
          content="https://utdal.github.io/sg-budget-breakdown"
        />
      </Head>
      <section id="jumbotron" className="bg-[#e87500] text-white">
        <div className="max-w-4xl mx-auto p-8 lg:py-16">
          <div className="text-center text-4xl lg:text-left lg:text-6xl font-bold">
            UT Dallas Budget Breakdown
          </div>
          <div className="mt-4 text-center text-2xl lg:text-left lg:text-4xl">
            A{" "}
            <Link
              href="https://sg.utdallas.edu"
              className="underline hover:text-blue-500 focus:text-blue-500 transition"
            >
              Student Government
            </Link>{" "}
            project
          </div>
          <div className="pt-8">
            <Link
              href="/join"
              className="inline-block p-3 text-xl font-bold bg-[#00000033] hover:bg-[#00000044] transition rounded-md"
            >
              Join the task force!
            </Link>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto max-w-4xl p-4 lg:p-8">
          <h1 className="mt-4 text-4xl font-bold">About</h1>
          <p className="mt-4 text-lg">
            This site is a product of a Student-Led University Budget Breakdown
            Task Force formed by the UT Dallas Student Government. This group
            was formed to provide accessible and digestible information about
            the University&apos;s Budget and usage of student fees. You will
            find several visualizations that were generated using the
            University&apos;s Budget for the fiscal year ending August 30, 2023.
          </p>
          <h1 className="mt-4 text-4xl font-bold">Motivation</h1>
          <p className="mt-4 text-lg">
            The{" "}
            <Link
              className="text-blue-600 hover:underline transition"
              href="https://www.reddit.com/r/utdallas/collection/d83a1f8c-fd7c-45f4-a7b4-32bbd2a4bc0e"
            >
              student discourse
            </Link>{" "}
            occurring during the Fall 2022 Student Union Building Fee and
            Intercollegiate Athletics Fee Referendums revealed that students are
            both unaware and misinformed about the nature of university
            finances. The UT Dallas Student Government felt an obligation to
            inform itself and the broader student body. This task force seeks to
            create greater transparency for students and set a precedent for the
            Student Government as a source of information that better informs
            students. The process of reviewing, summarizing, and visualizing
            university financial data has allowed us to answer many questions
            and explore new topics that we wish to explore in the future.
          </p>
        </div>
      </section>
      <section id="findings">
        <div className="mx-auto max-w-4xl p-4 lg:p-8">
          <h1 className="mt-4 text-4xl font-bold">Findings</h1>
          <p className="mt-4 text-lg">
            The University Budget report published by the university&apos;s{" "}
            <Link
              className="text-blue-600 hover:underline transition"
              href="https://finance.utdallas.edu/public-reports"
            >
              Office of Budget and Finance
            </Link>{" "}
            is delivered in a PDF format that is difficult to export into clean
            data files. Thus, the visuals available in the{" "}
            <Link
              className="text-blue-600 hover:underline transition"
              href="/details"
            >
              full breakdown
            </Link>{" "}
            were composed manually and focus on big-picture aspects of the
            budget. In the future, we hope to have access more analysis-friendly
            data and answer questions at a more detailed level.
          </p>
          <h3 className="mt-8 text-3xl font-semibold">
            Policy Findings &amp; Comments
          </h3>
          <p className="mt-2 text-lg">
            The{" "}
            <Link
              className="text-blue-600 hover:underline transition"
              href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm"
            >
              Texas Education Code
            </Link>{" "}
            establishes several named student fees are for the University of
            Texas at Dallas including the:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <Link
                className="text-blue-600 hover:underline transition"
                target="_blank"
                href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm#:~:text=Aug.%2030%2C%201999.-,Sec.%2054.531.,-STUDENT%20UNION%20BUILDING"
              >
                Student Union Building Fee
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline transition"
                target="_blank"
                href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm#:~:text=Aug.%2030%2C%201993.-,Sec.%2054.5311.,-TRANSPORTATION%20FEE%3B%20THE"
              >
                Transportation Fee
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline transition"
                target="_blank"
                href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm#:~:text=June%2015%2C%202007.-,Sec.%2054.5312.,-STUDENT%20SERVICES%20BUILDING"
              >
                Student Services Building Fee
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline transition"
                target="_blank"
                href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm#:~:text=June%2015%2C%202007.-,Sec.%2054.5313.,-INTRAMURAL%20AND%20INTERCOLLEGIATE"
              >
                Intramural and Intercollegiate Athletics Fee
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 hover:underline transition"
                target="_blank"
                href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.54.htm#:~:text=910%2C%20Sec.%204.-,Sec.%2054.5341.,-STUDENT%20RECREATIONAL%20FACILITY"
              >
                Recreational Facility Fee
              </Link>
            </li>
          </ul>
          <p className="mt-2 text-lg">
            These fees have multiple restrictions. There are limitations on how
            the fees may change over time. There are strict guidelines on how
            the university spends the funds generated by these fees. There are
            limitations on how other sources of funding may be spent on expenses
            related to these fees.
          </p>
          <p className="mt-2 text-lg">
            Outside of student fees, there is a notable restriction on the usage
            of state-appropriated funds. Under Article 7, Sec. 18 of the
            <Link
              className="text-blue-600 hover:underline transition"
              href="https://statutes.capitol.texas.gov/Docs/CN/htm/CN.7.htm#:~:text=Nov.%203%2C%202009.)-,Sec.%2018.,-FUNDING%20TO%20SUPPORT"
            >
              Texas Constitution
            </Link>
            , bonds issued by the Board of Regents of the University of Texas
            System, funded by the Available University Fund, may not be used for
            buildings or other permanent improvements to be used for student
            housing, intercollegiate athletics, or auxiliary enterprises.
          </p>
        </div>
      </section>
      <section id="future">
        <div className="mx-auto max-w-4xl p-4 lg:p-8">
          <h1 className="mt-4 text-4xl font-bold">Going Forward</h1>
          <p className="mt-4 text-lg">
            We still have a variety of questions we hope to answer in the
            future:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              Where can information on student-worker wage standards be found?
            </li>
            <li>
              What are the specific delineations between admin, staff, and
              classified salaries?
            </li>
            <li>How are adjustments calculated?</li>
            <li>
              To what extent are certain funds prohibited from particular uses
              and who determines those policies?
            </li>
            <li>
              How much do the actual revenues and expenses of the university
              differ from those estimated in the operating budget?
            </li>
            <li>
              What purpose is served by the large reserve quantities in certain
              student fee funds?
            </li>
          </ul>
          <h3 className="mt-6 text-2xl">
            For more details, please read our full report{" "}
            <Link
              className="text-blue-600 hover:underline transition"
              href="./SUBB_Task_Force_Report_Fall_2022.pdf"
            >
              here
            </Link>
            .
          </h3>
        </div>
      </section>
    </>
  );
}
