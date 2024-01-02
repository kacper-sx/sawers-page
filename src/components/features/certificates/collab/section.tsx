export type SectionProps = {
  icon: JSX.Element;
};

export function Section({ icon }: SectionProps) {
  return (
    <div>
      <div className="lg:p-8">{icon}</div>
    </div>
  );
}
