import React from 'react'
import Mountain1 from '../assets/mountain_01.png'
import Mountain2 from '../assets/mountain_02.png'
import Tree1 from '../assets/trees_01.png'
import Tree2 from '../assets/trees_02.png'
import Man from '../assets/man.png'
import Plants from '../assets/plants.png'
import '../styles/Home.css'


export default function Home() {
    return (
        <div>
            <section className='parallax'>
                <h2 id="text">Hey There !!!</h2>
                <img src={Mountain1} id="m1" alt=''></img>
                <img src={Mountain2} id="m2" alt=''></img>
                <img src={Tree1} id="t1" alt=''></img>
                <img src={Tree2} id="t2" alt=''></img>
                <img src={Man} id="man" alt=''></img>
                <img src={Plants} id="plant" alt=''></img>
            </section>
            <section className='sec'>
                <h2>Anmol Srivastava</h2>
                <p>I am a Web Developer</p>
            </section>
        </div >
    )
}
