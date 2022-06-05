import React, {useState} from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import MusicPlayer from "../components/MusicPlayer";
import {Link} from "gatsby";

function IndexPage (){
    const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
    const onHover = "hover:drop-shadow-sm";

    return (
      <Layout>
        <div className="h-full max-h-screen overflow-hidden relative text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <nav className="w-full flex items-center justify-center py-4">
                    <div className="text-5xl flex space-x-6">
                        <div className="cursor-pointer">
                            <a href="https://twitter.com/lunaticswtf/" target="_blank">
                                <i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} />
                            </a>
                        </div>

                        <a href="https://opensea.io/" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
                        <MusicPlayer />
                    </div>
                </nav>
            </div>
            <div className=" h-full flex justify-center items-center">
                <StaticImage src="../images/cover.png" alt="Kwon Town" className="min-h-screen bg-no-repeat" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl mt-4 whitespace-nowrap">lunatics <span className="underline">wtf</span></h1>
                    <StaticImage src="../images/website-mascot.png" alt="Do Kwon Mascot" className="w-32" />
                </div>
            </div>

            <div className="absolute top-3/4 left-1/2 -translate-x-1/2">
                <div className="flex space-x-4 items-center justify-center">
                    <p className="text-2xl whitespace-nowrap font-semibold">200/9999 in Kwon Town</p>
                    <AnchorLink to="#about"><i className="fa-regular fa-circle-question text-2xl cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-dashed" /></AnchorLink>
                </div>
                <div className="flex justify-center pt-4 pb-6">
                    <Link to="/mint">
                        <div className="px-4 py-2 btn-gradient-border rounded-lg hover:drop-shadow-xl">
                            Mint Now
                        </div>
                    </Link>
                </div>
                <h2 className="text-5xl font-light text-center">#GreedisGood</h2>
            </div>
        </div>
        <footer className="w-full flex items-center justify-center py-12 bg-cream">
          <div className="text-5xl flex space-x-6">
              <a href="https://twitter.com/lunaticswtf/" target="_blank"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
              <a href="https://opensea.io/" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
              {/*<button onClick={start}>Play</button>*/}
              <MusicPlayer />
              {/*<i className={`fa-solid fa-boombox ${terraGradient} ${onHover}`} />*/}
          </div>
        </footer>
      </Layout>
    )
}

export default IndexPage
