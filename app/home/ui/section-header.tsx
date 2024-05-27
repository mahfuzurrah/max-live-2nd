export interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  const { title, description } = props;

  return (
    <>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">{title}</h2>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </>
  );
}
