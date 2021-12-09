import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Hamidreza Ramzani</title>
        <meta name="description" content="Personal Website - Hamidreza Ramzani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  )
}
