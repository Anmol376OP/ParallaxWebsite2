import React from 'react'
import Mountain1 from '../assets/mountain_01.png'
import Mountain2 from '../assets/mountain_02.png'
import Tree1 from '../assets/trees_01.png'
import Tree2 from '../assets/trees_02.png'
import Tree3 from '../assets/trees_03.png'
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
                <div className='ContainerBox'>
                    <p className='uptxt'>Hi</p>
                    <div className='splitText'>
                        <p className='Im'>I am</p>
                        <p className='myname'>Anmol Srivastava</p>
                    </div>

                    <p className='dev'>I am a Web Developer</p>
                </div>
                <div className='BottomDesign'>
                    <img className='treeImg' src={Tree3}></img>
                </div>
            </section>
        </div >
    )
}
