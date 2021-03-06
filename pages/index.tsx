import Head from 'next/head'

import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome!
        </h1>
      </main>
    </div>
  )
}
