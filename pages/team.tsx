import Head from "next/head";
import Image from "next/image";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team - UT Dallas Budget Breakdown</title>
        <meta property="og:site_name" content="UTD Student Government" />
        <meta
          property="og:title"
          content="Team - University Budget Breakdown"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="See who helped work on the budget breakdown."
        />
        <meta
          property="og:url"
          content="https://utdal.github.io/sg-budget-breakdown/team"
        />
      </Head>
      <section id="jumbotron" className="bg-[#e87500] text-white">
        <div className="max-w-4xl mx-auto p-8 lg:py-16">
          <div className="text-center text-4xl lg:text-left lg:text-6xl font-bold">
            Team
          </div>
          <div className="mt-4 text-center text-2xl lg:text-left lg:text-4xl">
            Meet the students who made this happen.
          </div>
        </div>
      </section>
      <section id="members">
        <div className="max-w-7xl mx-auto p-8 lg:py-16">
          <div className="text-xl">
            The Task Force currently consists of the following members:
          </div>
          <div className="py-4 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-4">
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-griffin.jpg"
                  alt="Head shot of Griffin Davis"
                />
                <div className="text-2xl font-bold text-center">
                  <a href="https://gcd.dev">Griffin Davis</a>
                </div>
                <div className="text-xl text-center">At-Large Senator</div>
                <div className="italics text-center">
                  Task Force Chair, Visualizations Lead
                </div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-andres.jpg"
                  alt="Head shot of Andres Andujar"
                />
                <div className="text-2xl font-bold text-center">
                  Andres Andujar
                </div>
                <div className="text-xl text-center">Graduate Senator</div>
                <div className="italics text-center">Budget Researcher</div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-willie.jpg"
                  alt="Student Government logo placeholder"
                />
                <div className="text-2xl font-bold text-center">
                  Willie Chalmers III
                </div>
                <div className="text-xl text-center">ECS Senator</div>
                <div className="italics text-center">Web Lead</div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-margaret.jpg"
                  alt="Student Government logo placeholder"
                />
                <div className="text-2xl font-bold text-center">
                  Margaret Moore
                </div>
                <div className="text-xl text-center">
                  Vice President,
                  <br />
                  Student Government
                </div>
                <div className="italics text-center">University Relations</div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-koti.jpg"
                  alt="Head shot of Koti Gangasani"
                />
                <div className="text-2xl font-bold text-center">
                  Koti Reddy Gangasani
                </div>
                <div className="text-xl text-center">Graduate Senator</div>
                <div className="italics text-center">Budget Researcher</div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/team/about-leah.jpg"
                  alt="Head shot of Leah Sullivan"
                />
                <div className="text-2xl font-bold text-center">
                  Leah Sullivan
                </div>
                <div className="text-xl text-center">At-Large Senator</div>
                <div className="italics text-center">Budget Researcher</div>
              </div>
            </article>
            <article className="py-2">
              <div className="space-y-2">
                <Image
                  className="object-cover aspect-square"
                  src="/img/sg-logo.jpg"
                  alt="Placeholder headshot"
                />
                <div className="text-2xl font-bold text-center">
                  Hamza Zulquernain
                </div>
                <div className="text-xl text-center">
                  Computer Engineering Sophomore
                </div>
                <div className="italics text-center">Budget Researcher</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
