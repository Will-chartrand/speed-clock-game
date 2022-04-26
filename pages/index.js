import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from './Sidebar'
import Game from './Game'
 
export default function Home() {
  return (
    <div className="bg-slate-600">
      <main>
        <Game />
      </main>
      <Sidebar />
    </div>
  )
}
