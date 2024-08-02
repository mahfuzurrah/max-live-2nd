import heroBg from "@/public/images/landing-page-2/hero-bg.png"
import Navbar from "./Navbar"

export default function Hero() {
    return (
        <>
            <section
                style={{
                    backgroundImage: `url(${heroBg.src})`
                }}
                className="bg-cover bg-center no-repeat h-[100vh] bg-[#0346AD] text-white">

                <div className="container mx-auto text-center h-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-4xl md:text-[3.8rem] leading-[70px] font-bold mb-10">
                            Primavera AI le travail <br className="hidden md:block" /> juridique, automatisé
                        </h1>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="py-2 px-6 bg-transparent border border-white rounded-full hover:bg-white hover:text-blue-600">Learn more</a>
                            <a href="#" className="py-2 px-6 bg-white text-blue-600 rounded-full hover:bg-transparent hover:text-white hover:border">Request a trial</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
