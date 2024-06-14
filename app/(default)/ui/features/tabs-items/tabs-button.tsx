export interface TabsButtonProps {
  item: {
    title: string;
    content: string;
    icon: React.ReactNode;
  };
  index: number;
  tab: number;
  setTab: (tab: number) => void;
}

export function TabsButton(props: TabsButtonProps) {
  const { item, index, tab, setTab } = props;

  return (
    <a
      title={item.title}
      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
        tab !== index + 1
          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
          : "bg-gray-200 border-transparent"
      }`}
      href="#0"
      onClick={(e) => {
        e.preventDefault();
        setTab(index + 1);
      }}
    >
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1">
          {item.title}
        </div>
        <div className="text-gray-600">{item.content}</div>
      </div>
      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
        {item.icon}
      </div>
    </a>
  );
}
