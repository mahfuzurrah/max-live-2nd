import { Transition } from "@headlessui/react";

export interface TabsItemProps {
  tab: number;
  index: number;
  heightFix: () => void;
  children: React.ReactNode;
}

export function TabsItem(props: TabsItemProps) {
  const { tab, index, heightFix, children } = props;

  return (
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
      {children}
    </Transition>
  );
}
