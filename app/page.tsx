import App from "next/app";

import Navbar from "./components/Navbar";
import TypedText from "./components/TypedText";





export default function Home() {
  return (
    <main className="glow-text">
        <div className="relative w-full overflow-hidden h-screen flex items-end justify-center">
            <video className="z-0 absolute top-0 left-0 w-full h-full object-cover" src="/assets/gallery/LandingVid.mp4" autoPlay loop muted playsInline />
            <div className="z-10 relative flex items-center select-none">
                <h1 className="glow-text header flex gap-3">

                    [ <TypedText /> ]
                </h1>
            </div>
        </div>
        <p>Content below</p>
        
        
    
    </main>
  );
}
