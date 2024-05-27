import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import HecImage from "@/public/images/hec.svg";
import PolytechniqueImage from "@/public/images/polytechnique.svg";
import BerkeleyImage from "@/public/images/berkeley.svg";
import { Testimonial } from "./testimonial";
import { SectionHeader } from "../section-header";

export default function Testimonials() {
  const companyImages = [
    { image: PolytechniqueImage, alt: "Ecole Polytechnique" },
    { image: HecImage, alt: "HEC Paris" },
    { image: BerkeleyImage, alt: "UC Berkeley" },
  ];

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}

          <SectionHeader title="Construit et supporté par des personnes de" />

          {/* Items */}
          <div className="max-w-sm md:max-w-2xl mx-auto grid gap-2 grid-cols-3 md:grid-cols-3">
            {companyImages.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              >
                <Image
                  className="max-w-full fill-current text-gray-400"
                  src={company.image}
                  alt={company.alt}
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <Testimonial
                handle="ParisSupply"
                image={TestimonialImage}
                name="Darya Ferrane"
                position="CSM Manager"
                text={`
                  "J'adore ce produit, si nous avions pu l'avoir plus tôt nous aurions pu éviter la perte de multiples clients et je le recommanderais à tout le monde. Il n'y a rien de plus facile à utiliser, leurs multiples intégrations sont merveilleuses. Nous recevons constamment des commentaires positifs."
                  `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
