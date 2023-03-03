import dynamic from 'next/dynamic';
import Head from "next/head";

import TopSankey from '@/components/charts/TopSankey'
import SchoolPieChart from '@/components/charts/SchoolPieChart'
import FeeTreemap from '@/components/charts/FeeTreemap';

// const TopSankey = dynamic(() => import('../components/charts/TopSankey'), { ssr: false });
// const SchoolPieChart = dynamic(() => import('../components/charts/SchoolPieChart'), { ssr: false });
// const FeeTreemap = dynamic(() => import('../components/charts/FeeTreemap'), { ssr: false });

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
          <h1 className="mt-8 text-2xl font-bold">High-Level University Budget:</h1>
          <p>
            For each visualization, hover over the parts to see the raw dollar
            amounts corresponding to a particular category of spending.
          </p>
          <TopSankey />
          <h1 className="mt-8 text-2xl font-bold">
            Expenses by School
          </h1>
          <SchoolPieChart />
          <p className="text-sm">
            <em>
              Note: Each school varies greatly in terms of size and the amount of 
              resources needed to conduct research and provide instruction.
            </em>
          </p>
          <h1 className="mt-8 text-2xl font-bold">Mandatory student fees:</h1>
          <FeeTreemap />
        </div>
      </section>
    </>
  );
}
