type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
