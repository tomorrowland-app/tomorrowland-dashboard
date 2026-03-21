import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <main className="mx-auto max-w-4xl px-6 py-16">
          <div className="text-sm text-white/60">Tomorrowland Thailand</div>
          <h1 className="mt-4 text-4xl font-semibold">About page</h1>
          <p className="mt-4 text-white/70">
            This page is under construction.
          </p>
        </main>
      </div>
    </>
  );
}