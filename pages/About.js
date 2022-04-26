import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from './Sidebar'
import react, { useState } from "react";

export default function About() {
    return (
        <div className="h-screen bg-slate-600">
            <main>
                <Sidebar />
                <Header title="Welcome to the clock game!" />
                <p className="description">
                    This is the description of the clock game
                </p>
            </main>
        </div>
    )
}