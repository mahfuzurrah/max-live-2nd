import { SectionHeader } from "../section-header";
import { FeatureBlockItem } from "./feature-block-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSplit, faFlaskVial, faInfinity, faSparkles, faBrainCircuit, faComment  } from '@fortawesome/pro-duotone-svg-icons'; 

export default function FeaturesBlocks() {
  const items = [
    {
      title: "Decomposes",
      description: "All your processes into elementary steps that you define.",
      icon: (
        <FontAwesomeIcon
          icon={faSplit}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
    {
      title: "Works",
      description: "On a daily basis, by intelligently carrying out your tasks in the background",
      icon: (
        <FontAwesomeIcon
          icon={faFlaskVial}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
    {
      title: "Connects",
      description: "Your different data sources in a single, central location.",
      icon: (
        <FontAwesomeIcon
          icon={faInfinity}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
    {
      title: "Automate",
      description: "All your processes, from the simplest to the most complex.",
      icon: (
        <FontAwesomeIcon
          icon={faSparkles}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
    {
      title: "Learn",
      description: "Thanks to AI that adapts to your needs and processes.",
      icon: (
        <FontAwesomeIcon
          icon={faBrainCircuit}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
    {
      title: "Inform",
      description: "Via intuitive and customizable dashboards.",
      icon: (
        <FontAwesomeIcon
          icon={faComment}
          className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600"
        />
      ),
    },
  ];

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <SectionHeader
            title="Discover Primavera"
            description="Auomatize everything, everywhere."
          />

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {items.map((item, i) => (
              <FeatureBlockItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
