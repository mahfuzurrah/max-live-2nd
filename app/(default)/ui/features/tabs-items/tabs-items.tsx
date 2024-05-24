import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";
import { TabContent } from "./tab-content";

export interface TabsItemsProps {
  items: {
    title: string;
    content: string;
    icon: React.ReactNode;
  }[];
  tab: number;
}

export function TabsItems(props: TabsItemsProps) {
  const { items, tab } = props;

  const tabs = React.createRef<HTMLDivElement>();

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
      <div className="transition-all">
        <div
          className="relative flex flex-col text-center lg:text-right"
          data-aos="zoom-y-out"
          ref={tabs}
        >
          {items.map((item, index) => (
            <Transition
              show={tab === index + 1}
              appear={true}
              key={index}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterFrom="opacity-0 translate-y-16"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-16"
              beforeEnter={() => heightFix()}
              unmount={false}
            >
              <TabContent />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
}
