import Head from "next/head";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export default function DetailsPage() {
  return (
    <>
      <Head>
        <title>Details - UT Dallas Budget Breakdown</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="UTD Student Government" />
        <meta property="og:title" content="University Budget Breakdown" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Learn how your tuition funds university departments and the services that you use, and see clear, accessible information on the university's finances."
        />
        <meta
          property="og:url"
          content="https://utdal.github.io/sg-budget-breakdown"
        />
        <meta property="og:image" content="../src/img/sg-logo.jpg" />
        <meta
          property="article:published_time"
          content="2023-02-18T19:50-0500"
        />
        <meta
          property="article:modified_time"
          content="2023-02-18T19:50-0500"
        />
        <meta
          property="article:author"
          content="UT Dallas Student Government"
        />
      </Head>
      <section id="overview">
        <div className="mx-auto max-w-4xl p-4 lg:p-8">
          <h1 className="text-3xl font-bold my-4">Overview</h1>
          <h2 className="text-2xl font-semibold my-2">How the budget works</h2>
          <p>
            Prior to the start of each fiscal year, the university sends an{" "}
            <a
              className="text-blue-600 hover:underline transition"
              href="https://finance.utdallas.edu/public-reports/"
            >
              operating budget
            </a>{" "}
            to the{" "}
            <a
              className="text-blue-600 hover:underline transition"
              href="https://www.utsystem.edu/offices/board-regents"
            >
              Board of Regents
            </a>{" "}
            of the University of Texas System for approval, and following
            approval the operating budget is made publicly available on the UT
            Dallas Office of Budget and Finance website as a PDF. We manually
            converted the published budget to the necessary formats to conduct
            the calculations and transformations necessary to produce the
            following visualizations.
          </p>
        </div>
      </section>
      <section id="breakdown" className="">
        <div className="p-4 md:mx-auto md:max-w-6xl">
          <h1 className="mt-8 text-2xl font-bold">
            High-Level University Budget:
          </h1>
          <p>
            For each visualization, hover over the parts to see the raw dollar
            amounts corresponding to a particular category of spending.
          </p>
          <div className="sankey w-full h-[1200px]" id="sankey_top"></div>
          <p className="text-sm">
            <em>
              Note: Adjustments are not a true revenue source, but they have
              been displayed as such to account for expense adjustments.
            </em>
          </p>
          <h1 className="mt-8 text-2xl font-bold">
            Instructional Expenses from Educational and General Funds
          </h1>
          <p className="mt-4 text-lg">
            Below, you can see the proportion of instructional expenses that go
            towards salaries in each school.
          </p>
          <ul className="space-y-2"></ul>
          <div
            className="sankey w-full h-[800px]"
            id="sankey_instruction"
          ></div>
          <h1 className="mt-8 text-2xl font-bold">Mandatory student fees:</h1>
          <div className="treemap w-full h-[450px]" id="treemap_fees"></div>
          <h1 className="mt-8 text-2xl font-bold">
            Operations Expenses from Educational and General Funds:
          </h1>
          <p className="mt-4 text-lg">
            This chart showcases the breakdown of operational funds from
            educational and general funds between Facilities Management, UTD
            Police, and EMS. As a note, the majority of funding for operations
            and maintenance comes from designated funds, but we do not have
            access to this granular data for that fund category.
          </p>
          <div className="sankey w-full h-[300px]" id="sankey_operations"></div>
          <h1 className="mt-8 text-2xl font-bold">
            Institutional Support Salary Breakdowns:
          </h1>
          <p className="mt-4 text-lg">
            The portion of educational and general funds that are directed
            towards institutional support is broken down as shown.
          </p>
          <div
            className="treemap w-full h-[450px]"
            id="treemap_insti_supp"
          ></div>
        </div>
      </section>
    </>
  );
}
