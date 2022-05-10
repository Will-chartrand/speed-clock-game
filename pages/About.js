import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from './Sidebar'

export default function About() {
    return (
        <div>
            <main className='h-screen w-full bg-slate-600'>
                <Sidebar />
                <div className='bg-black bg-opacity-40 text-white rounded-xl w-4/5 h-3/4 p-4 px-2'>
                    <center>
                    <div className='text-lg font-bold'>
                        <Header className='text-lg font-bold' title="Welcome to the clock game!" />
                    </div>

                    <p className="description w-10/12 p-2 text-center">
                        <br></br>
                        This project was created for the purpose of practicing the telling of time with an analog watchface.
                        <br></br>
                        <br></br>
                        I had received a watch for Christmas, but the watchface did not have any numbers - so naturally, I created this program in order to test my time-telling skills. Originally I had it as a python program, but decided it would be nice if it could be used by anyone, so I did some research on various ways to create it using a web framework.
                        <br></br>
                        <br></br>
                        I eventually found NextJS, and decided to recreate the same functionality I had on the python program and then add some aditional features such as various watch faces and saving the game state using cookies.
                        <br></br>
                        <br></br>
                    </p>
                    </center>

                </div>
                <div className='h-2'></div>
                <div className='bg-black bg-opacity-40 text-white rounded-xl w-4/5 h-3/4 p-4 px-2'>
                    <center>
                        <div className='text-lg font-bold'>
                            <Header title="How To Play" />
                        </div>
                    <p className="description w-10/12 p-2 text-center">
                        <br></br>
                        The clock presents you with a time, and the goal is to input the correct number into the text box. After the number is typed, it will be evaluated as incorrect or correct (&plusmn;1 minute of the correct time).
                        <br></br>
                            Example times would include - 902, 1201 and 600 (to represent 9:02, 12:01 and 6:00 respectively)
                        <br></br>
                        <br></br>
                        A score of how many times correctly inputted in a row will be kept below the input text box, along with the highest number of correctly inputted times.
                        <br></br>

                        <br></br>
                        <br></br>
                    </p>
                    </center>

                </div>
            </main>
        </div>
    )
}
