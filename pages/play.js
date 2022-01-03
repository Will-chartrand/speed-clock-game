import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
 
export default function Play() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="/play">Play</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul> 

      </Head>

      <main>
        <Header title="PLAYYYY!" />
        <p className="description">
          P L A Y !
        </p>

        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span> 

      </main>

      <Footer />
    </div>
  )
}