import Hero from "@/components/landing-page-2/Hero";
import Image from "next/image";
import unlockPowerBg from "@/public/images/landing-page-2/unlock-power-bg.svg"
import supportIcon1 from "@/public/images/landing-page-2/support-icon-1.svg"
import supportIcon2 from "@/public/images/landing-page-2/support-icon-2.svg"
import supportIcon3 from "@/public/images/landing-page-2/support-icon-3.svg"
import logo from "@/public/images/landing-page-2/logo-dark.svg"
import Navbar from "@/components/landing-page-2/Navbar";

export const metadata = {
  title: "Primavera AI | Revolutionizing Automation of processes with AI",
  description: "Discover a revolutionary platform using AI to automate each and every processes. Automate, optimize, and innovate with Primavera AI.",
  alternates: {
    canonical: "https://www.primavera-ai.com"
  },
  openGraph: {
    type: 'website',
    title: "Primavera AI | Revolutionizing Automation of processes with AI",
    url: "https://www.primavera-ai.com",
    images: [
      {
        url: "https://www.primavera-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnectors.cc5c5b82.png&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: 'Primavera AI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Primavera AI | Revolutionizing Automation of processes with AI",
    description: "Discover a revolutionary platform using AI to automate each and every processes. Automate, optimize, and innovate with Primavera AI.",
    images: [
      {
        url: "https://www.primavera-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnectors.cc5c5b82.png&w=1200&q=75",
        alt: 'Primavera AI'
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container py-8">
        <div>
          <h4 className="text-[1.3rem] text-center font-medium">
            Couplez la puissance de vos données internes aux données publiques
          </h4>
        </div>
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-8 lg:gap-x-40">
          <div className="text-center flex flex-col items-center relative w-[7.5rem] h-[7.5rem] border p-5 rounded-full">
            <img src="/images/landing-page-2/brand-1.png" alt="Brand 1" className="w-full h-full object-contain" />
            <div className="hidden lg:block lg:absolute bottom-1/2 right-[-115%]">
              <img src="/images/landing-page-2/arrow-right.png" alt="Arrow" />
            </div>
          </div>

          <div className="text-center flex flex-col items-center relative w-[7.5rem] h-[7.5rem] border p-5 rounded-full">
            <img src="/images/landing-page-2/brand-2.png" alt="Brand 2" className="w-full h-full object-contain" />
            <div className="hidden lg:block lg:absolute bottom-1/2 right-[-115%]">
              <img src="/images/landing-page-2/arrow-right.png" alt="Arrow" />
            </div>
          </div>

          <div className="text-center flex flex-col items-center relative w-[7.5rem] h-[7.5rem] border p-5 rounded-full">
            <img src="/images/landing-page-2/brand-3.png" alt="Brand 3" className="w-full h-full object-contain" />
            <div className="hidden lg:block lg:absolute bottom-1/2 right-[-115%]">
              <img src="/images/landing-page-2/arrow-right.png" alt="Arrow" />
            </div>
          </div>

          <div className="text-center flex flex-col items-center relative w-[7.5rem] h-[7.5rem] border p-5 rounded-full">
            <img src="/images/landing-page-2/brand-4.png" alt="Brand 4" className="w-full h-full object-contain" />
            <div className="hidden lg:block lg:absolute bottom-1/2 right-[-105%]">
              <img src="/images/landing-page-2/arrow-right.png" alt="Arrow" />
            </div>
          </div>

          <div className="text-center flex flex-col items-center relative w-[7.5rem] h-[7.5rem] border p-5 rounded-full">
            <img src="/images/landing-page-2/brand-5.png" alt="Brand 5" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-[#f0f6ff] py-20 my-8">
        <h1 className="text-[2.5rem] text-center font-[600] pb-10">L’intelligence artificielle au <br /> service du juridique</h1>

        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[2rem] gap-y-8">
            <div className="bg-[#FFF] p-5 rounded-[1.2rem]">
              <Image width={300} height={180} className="block w-full rounded-xl" src="/images/landing-page-2/img-1.svg" alt="" />
              <h1 className="text-xl font-semibold pt-3 pb-4">Construisez facilement des workflows complexes</h1>
            </div>

            <div className="bg-[#FFF] p-5 rounded-[1.2rem]">
              <Image width={275} height={160} className="block w-full rounded-xl" src="/images/landing-page-2/img-2.svg" alt="" />
              <h1 className="text-xl font-semibold pt-3 pb-4">Intégrez vos données internes</h1>
            </div>

            <div className="bg-[#FFF] p-5 rounded-[1.2rem]">
              <Image width={275} height={160} className="block w-full rounded-xl" src="/images/landing-page-2/img-3.svg" alt="" />
              <h1 className="text-xl font-semibold pt-3 pb-4">Connectez vous aux données juridiques publiques</h1>
            </div>

            <div className="bg-[#FFF] p-5 rounded-[1.2rem]">
              <Image width={275} height={160} className="block w-full rounded-xl" src="/images/landing-page-2/img-4.svg" alt="" />
              <h1 className="text-xl font-semibold pt-3 pb-4">Laissez l’IA juridique Primavera faire votre travail</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="py-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-[2rem] gap-y-8 py-10 items-center">
            <div className="order-2 lg:order-1">
              <div>
                <h2 className="text-[2.2rem] font-bold text-gray-800 mb-4">L’Intelligence Artificielle, pour les professionnels du juridique.</h2>
                <p className="text-gray-600 mb-5 leading-[2rem]">Le domaine juridique necessite une grande expertise et une precision auxquelles les intelligences artificiellesne peuvent répondre.</p>
                <p className="text-gray-600 mb-5 leading-[2rem]">Primavera répond à ce besoin en vous permetttant de décomposer les taches les plus complexes en sous-taches, aussi petites que necessaire pour engager un niveau de précision des plus grands. </p>
                <p className="text-gray-600 mb-8 leading-[2rem]">L’intelligence artificielle primavera se charge ensuite d’effectuer ces taches. </p>
                <a href="#" className="bg-blue-500 text-white font-bold py-3 px-7 rounded-full hover:bg-blue-600">Decouvrir Primavera</a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image width={580} height={388} src="/images/landing-page-2/img-6.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white py-12">
          <div>
            <Image width={545} height={488} src="/images/landing-page-2/img-7.svg" alt="Workflow Image" className="max-w-full" />
          </div>
          <div>
            <h2 className="text-[2.2rem] font-bold text-gray-800 mb-4">Automatisez tout, partout</h2>
            <p className="text-gray-600 mb-5 leading-[2rem]">
              Primavera révolutionne le quotidien des professionnels du juridique en automatisant les tâches répétitives grâce à l'intelligence artificielle.
            </p>
            <p className="text-gray-600 mb-5 leading-[2rem]">
              Libérez-vous des activités les moins enrichissantes et concentrez-vous sur les aspects enrichissants de votre métier.
            </p>
            <p className="text-gray-600 mb-5 leading-[2rem]">
              Avec Primavera, créez des workflows intuitifs et décomposez les tâches complexes en processus simples et automatisés.
            </p>
            <p className="text-gray-600 mb-8 leading-[2rem]">
              Profitez d'une solution qui répond précisément aux exigences de rigueur et de précision du domaine juridique, en vous permettant de vous atteler aux défis les plus exigeants avec efficacité et professionnalisme.
            </p>
            <a href="#" className="bg-blue-500 text-white font-bold py-3 px-7 rounded-full hover:bg-blue-600">Découvrir</a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white py-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-[2.2rem] font-bold text-gray-800 mb-4">Collaborez, connectez vos <br className="hidden md:block" /> équipes</h2>
            <p className="text-gray-600 mb-5 leading-[2rem]">
              Collaborez sur les memes workflows, travaillez en équipe pour ocnstruire les workflows les plus aboutis et complexes, vous finirez par automatiser tout les process de leur naissance, au resultat final.
            </p>
            <p className="text-gray-600 mb-8 leading-[2rem]">
              Votre collègue à construit un workflow et vous avez construit la suite?Pas de soucis. Connectez les workflows entre eux et enchainez les pour construire sans limites.
            </p>
            <a href="#" className="bg-blue-500 text-white font-bold py-3 px-7 rounded-full hover:bg-blue-600">Decouvrir Primavera</a>
          </div>
          <div className="p-4 md:p-8 order-1 lg:order-2">
            <img src="/images/landing-page-2/img-8.svg" alt="Workflow Image" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="container">
        <div
          style={{
            backgroundImage: `url(${unlockPowerBg.src})`
          }}
          className="my-8 py-10 md:h-[450px] bg-cover bg-no-repeat bg-center leading-[50px] rounded-3xl md:rounded-[40px] flex flex-col justify-center items-center">
          <div>
            <h2 className="text-3xl md:text-[2.3rem] font-[600] pb-8 text-white text-center">Unlock the Power of AI for <br className="hidden md:block" /> Legal Precision</h2>
            <div className="text-center">
              <a href="#" className="bg-white text-blue-700 font-bold py-4 px-7 rounded-full">Rejoindre la liste d’attente</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="py-8">
          <hr className="pb-8" />
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-[2.2rem] font-[500]">Built and supported by <br className="hidden md:block" /> people from</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-8 md:mt-0">
              <div className="flex items-center gap-6">
                <Image className="h-16 md:h-auto" height={80} src={supportIcon1} alt="" />
                <Image className="h-16 md:h-auto" height={80} src={supportIcon2} alt="" />
              </div>
              <Image className="w-32 md:w-20" height={200} src={supportIcon3} alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 pt-20 pb-5">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <Image height={80} src={logo} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-2">
              <h3 className="text-lg font-bold text-gray-800 mb-5">COMPANY</h3>
              <ul className="text-gray-600 space-y-5">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-lg font-bold text-gray-800 mb-5">CONTACT US</h3>
              <ul className="text-gray-600 space-y-5">
                <li><a href="mailto:support@golegal.com" className="hover:underline">support@golegal.com</a></li>
                <li><a href="tel:+19254209010" className="hover:underline">(925) 420-9010</a></li>
                <li>
                  Longbow House, 20 Chiswell Street, <br />
                  London, EC1Y 4TW
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3 className="text-lg font-bold text-gray-800 mb-5">NEWSLETTER</h3>
              <p className="text-gray-600 mb-4">Subscribe and stay up-to-date on the latest news.</p>
              <form className="flex items-center space-x-3">
                <input type="email" placeholder="Enter your email" className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-4 text-gray-600 text-sm flex justify-between flex-col md:flex-row">
            <p>© Primavera-ai.com. All rights reserved.</p>
            <div className="space-x-4 mt-5 md:mt-0">
              <a href="#" className="hover:underline">Legal & Regulatory</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy & Cookies</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Business</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
