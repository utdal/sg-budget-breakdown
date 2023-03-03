import Head from "next/head";
import Image from "next/image";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Join the Team - UT Dallas Budget Breakdown</title>
        <meta property="og:site_name" content="UTD Student Government" />
        <meta property="og:title" content="Join the task force" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Learn how to join the SG task force investigating the University's budget."
        />
        <meta
          property="og:url"
          content="https://utdal.github.io/sg-budget-breakdown/join"
        />
      </Head>
      <section
        id="intro"
        className="bg-[#ff6900] text-white md:grid md:grid-cols-12"
      >
        <div className="py-6 lg:py-16 md:col-start-2 lg:col-start-3 md:col-span-6">
          <div className="space-y-4 px-4">
            <div className="text-2xl lg:text-3xl hidden md:block">
              Help make UTD&apos;s budget more transparent.
            </div>
            <div className="text-5xl lg:text-6xl text-center md:text-left font-bold">
              Join the task force.
            </div>
          </div>
          <div className="pt-8 px-4">
            <a
              href="https://utdallas.qualtrics.com/jfe/form/SV_6EVjLleavr4RCzI"
              className="block md:inline-block px-8 py-3 text-xl text-center md:text-left font-bold bg-[#00000033] hover:bg-[#00000044] focus:bg-[#00000044] transition rounded-md"
            >
              Apply now
            </a>
          </div>
        </div>
        <div className="pt-4 md:pt-16 md:pl-8 xl:p-0 md:col-span-4 flex justify-center md:block">
          <Image
            className="aspect-square max-h-[240px] md:max-h-max"
            src="/img/sg-logo.jpg"
            width={240}
            height={240}
            alt=""
          />
        </div>
      </section>
      <div className="py-2 lg:pt-8 md:flex max-w-5xl mx-auto md:space-x-4">
        <section id="overview" className="md:flex-1 px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold">
              Who we&apos;re looking for
            </h1>
            <p className="mt-4 text-lg">
              Student Government is looking for motivated undergraduate and
              graduate students to look through the University&apos;s budget to
              provide greater tuition transparency and provide overight to
              university expenses.
            </p>
            <p className="mt-4 text-lg">
              This is the first tuition transparency initiative of its kind
              within any student government within the UT System.
            </p>
            <p className="mt-4 text-lg font-semibold">
              If any of these interest you, we encourage you to apply:
            </p>
            <ul className="mt-2 text-lg list-disc list-inside">
              <li>Policy research</li>
              <li>Accounting</li>
              <li>Data visualization</li>
              <li>Web development</li>
            </ul>
            <p className="mt-4 text-lg">
              You do not have to be a member of Student Government to join the
              task force. Students considering running for office are
              recommended to apply.
            </p>
            <div className="mt-4 text-xl">
              See some of our team{" "}
              <a
                className="text-blue-500 font-semibold hover:underline focus:underline transition ease-in-out"
                href="../team/index.html"
              >
                here
              </a>
              !
            </div>
          </div>
        </section>
        <section className="md:flex-1 px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold">
              What&apos;s Expected
            </h1>
            <h2 className="mt-2 text-2xl font-semibold">Time commitment</h2>
            <p className="mt-2 text-lg">
              Depending on how you want to contribute, expect to spent 1-2 hours
              each week working on Budget Breakdown tasks.
            </p>
            <p className="mt-2 text-lg">
              The task force currently has brief (30-minute) check-in meetings
              on Sundays at 3:00 PM. Members are expected to attend these
              meetings and keep in touch with the group on Microsoft Teams.
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Work</h2>
            <p className="mt-2 text-lg">
              Most of the work involves getting questions answered and talking
              to others on the team about what you learn. We don&apos;t expect
              you to be an expert in university finances since we are students,
              after all! We do expect that you&apos;re willing to ask questions
              and able to collaborate with others on the team.
            </p>
          </div>
        </section>
      </div>
      <section className="px-4 py-4 md:py-8 bg-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="py-2 text-2xl">
            Read the SG legislation that created this task force here:
          </div>
          <div className="mt-4 space-y-2 md:space-y-0 md:space-x-2 md:flex justify-center">
            <a
              href="https://utdallas.box.com/s/itot04zaol17yiba9rzhlm0k30i9avgq"
              className="block md:inline-block px-8 py-3 text-xl text-center md:text-left font-bold text-white bg-secondary hover:bg-[#154734aa] focus:bg-[#154734aa] transition rounded-md"
            >
              Original charge
            </a>

            <a
              href="https://utdallas.box.com/s/vvl9w6buotdxtfa609yg5drpnbp2alzx"
              className="block md:inline-block px-8 py-3 text-xl text-center md:text-left font-bold text-white bg-secondary hover:bg-[#154734aa] focus:bg-[#154734aa] transition rounded-md"
            >
              Renewed charge
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">How to Join</h1>
          <div className="lg:grid lg:grid-cols-3 lg:space-x-4">
            <div>
              <h2 className="mt-2 text-2xl">Fill out the application</h2>
              <p className="mt-2 text-lg">
                Simply fill out the{" "}
                <a
                  className="text-blue-500 font-semibold hover:underline focus:underline transition ease-in-out"
                  href="https://utdallas.qualtrics.com/jfe/form/SV_6EVjLleavr4RCzI"
                >
                  form
                </a>{" "}
                by <b>Tuesday, Feburary 28th, 2023 at 11:59 PM</b>. Provide as
                much information as you can when describing your interest in the
                task force.
              </p>
            </div>
            <div>
              <h2 className="mt-2 text-2xl">Wait a bit</h2>
              <p className="mt-2 text-lg">
                The SG President, Kruthi Kanduri, will let you know if you are
                invited to join the task force.
              </p>
            </div>
            <div>
              <h2 className="mt-2 text-2xl">Attend meetings</h2>
              <p className="mt-2 text-lg">
                If you&apos;re appointed to the task force, you&apos;ll be added
                to our group on Microsoft Teams and receive more information
                from the task force chair.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
