"use client";

import { useState } from "react";

import { TabsButton } from "./tabs-items/tabs-button";
import { TabsItems } from "./tabs-items/tabs-items";
import { SectionHeader } from "../section-header";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const items = [
    {
      title: "Rassembler",
      content:
        "CRM, Sharepoint, Mails... Tout ce que pouvez imaginer, Primera le fait.",
      icon: (
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
        </svg>
      ),
    },
    {
      title: "Analyser",
      content:
        "Construisez et accèdez à des dashboards intuitifs pour la gestion de chacun de vos clients.",
      icon: (
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
        </svg>
      ),
    },
    {
      title: "Anticiper",
      content:
        "Comptez sur l'intégration de l'intelligence artificielle Primera pour ne passer à coté d'aucune donnée et détécter chaque moment clé.",
      icon: (
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
            fill="#191919"
            fillRule="nonzero"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <SectionHeader
            title="Centralisez"
            description="L'Intelligence artificielle Primera analyse de la donnée client
            provenant de toutes vos sources de données. Soyez prévenu lorsque
            qu'un client présente des risques ou lorsqu'une opportunité se
            dessine."
          />

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">+100 intégrations</h3>
                <p className="text-xl text-gray-600">
                  Grâce à plus de 100 intégrations, rassemblez toutes les
                  informations realtives a vos clients au même endroit.
                </p>
              </div>
              <div className="mb-8 md:mb-0">
                {/* Tabs buttons */}
                {items.map((item, index) => (
                  <TabsButton
                    key={index}
                    index={index}
                    setTab={setTab}
                    tab={tab}
                    item={item}
                  />
                ))}
              </div>
            </div>

            <TabsItems items={items} tab={tab} />
          </div>
        </div>
      </div>
    </section>
  );
}
