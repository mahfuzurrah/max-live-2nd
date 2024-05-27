export interface FeatureBlockItemProps {
  item: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

export function FeatureBlockItem(props: FeatureBlockItemProps) {
  const { item } = props;

  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
      {item.icon}
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        {item.title}
      </h4>
      <p className="text-gray-600 text-center">{item.description}</p>
    </div>
  );
}
