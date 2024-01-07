import { Button } from "@nextui-org/react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Timeline from "../components/Timeline"
import Aurora from '../images/AURORA-24’.svg'
import sponsorstitle from '../images/sponsorstitle.svg'

export default function MainPage() {
    return (
        <div className="main-page-container">
            <Parallax pages={5} style={{ top: '0', left: '0' }} class="animation">

                <ParallaxLayer offset={0} speed={0.01}>
                    <div className="animation_layer parallax text-white flex-col text-center" id="artback">
                        <img src={Aurora} alt="" className="m-auto translate-y-72 h-auto lg:w-[50rem] w-[15rem]" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.1}>
                    <div className="animation_layer parallax" id="text"><Navbar /></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.40}>
                    <div className="animation_layer parallax lg:mt-72 mt-16" id="mountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}>
                    <div className="animation_layer parallax">
                        <p className="lg:translate-y-[35rem] translate-y-[25rem] text-white text-center lg:text-lg text-xs lg:px-[25rem] px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laborum accusamus repellat est repudiandae ad. Reprehenderit vel soluta, illum hic dolorum nihil corrupti sit animi nesciunt minima, distinctio ad necessitatibus inventore molestias esse fugiat.</p>
                        <Button color="primary" size="lg" variant="shadow" className="lg:translate-y-[50rem] translate-y-[45rem] lg:ml-[45%] ml-[35%] lg:w-[15rem]">Register Now!</Button>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.20}>
                    <div className='h-[100%] bg-[hsl(204,56%,2%)]'>
                        <About />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.2}>
                    <div className="h-[130rem] bg-[hsl(204,56%,2%)] lg:mt-[-12rem] mt-[-10rem] border-blue-700 border-solid border-3">
                        <Timeline/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2}>
                    <div className="h-[70rem] bg-[hsl(204,56%,2%)] lg:mt-[-12rem] mt-[-10rem] border-blue-700 border-solid border-3">
                        <img src={sponsorstitle} alt="" />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
