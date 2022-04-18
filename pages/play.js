import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from './Sidebar'
import react, { useState } from "react";
import GetUserInput from './GetUserInput';
 
export default function Play() {
  return (
    <div className="h-screen bg-slate-600">

      <main>
        <Sidebar />

        <center>
          <div id='clock'>
            <img src='clock.png' alt='clock'></img>
          </div>
        </center>

        <GetUserInput />
      </main>


    </div>
  )
}