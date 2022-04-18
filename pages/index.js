import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from './Sidebar'
 
export default function Home() {
  return (
    <div className="h-screen bg-slate-600">
      <Sidebar />
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Welcome to the clock game!
        </p>
      </main>
    </div>
  )
}