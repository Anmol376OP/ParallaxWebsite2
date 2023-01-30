import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Anmol from '../assets/anmol.png'
export default function Home() {
    return (
        <div>
            <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} style={{ zIndex: "20" }}>
                    <Navbar />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}>
                    <div className="animation_layer parallax" id="artback"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className="animation_layer parallax" id="mountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.1}>
                    <div className="animation_layer parallax" id="Text"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className="animation_layer parallax" id="jungle1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div className="animation_layer parallax" id="jungle2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className="animation_layer parallax" id="jungle3"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.45}>
                    <div className="animation_layer parallax" id="jungle4"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.40}>
                    <div className="animation_layer parallax" id="manonmountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div className="animation_layer parallax" id="jungle5"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.25}>
                    <div className='sec'>
                        <div className='Alpha'>
                            <div className='Beta1'>
                                <p className='hi'>Hi,</p>
                                <div className='SplitText'>
                                    <p className='Im'>I am</p>
                                    <p className='Name'>Anmol Srivastava</p>
                                </div>
                                <p className='Dev'>I'm a Web Developer</p>
                            </div>
                            <div className='Beta2'>
                                <img src={Anmol} />
                            </div>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.25} className="xyzzz">
                    <div className='sec2'>
                        <div className='Alpha2'>
                            <div className='Beta22'>
                                <img src={Anmol} />
                            </div>
                            <div className='Beta12'>
                                <p className='hi2'>Hi,</p>
                                <div className='SplitText2'>
                                    <p className='Im2'>I am</p>
                                    <p className='Name2'>Anmol Srivastava</p>
                                </div>
                                <p className='Dev2'>I'm a Web Developer</p>
                            </div>

                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
