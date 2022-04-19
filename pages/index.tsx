import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aloha | A Library of Helpful Articles!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/" />
      </Head>

      <main>
        <h1>
         A Library of Helpful Articles!
        </h1>

        <p>
          Discover helpful articles that can help you develop your craft
        </p>

      </main>

      <footer>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </footer>
    </div>
  )
}

export default Home
