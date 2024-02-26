interface TemperatureProps {
  temperature?: number;
  label?: string;
  className?: string;
}

export default function Temperature({
  temperature,
  label,
  className,
}: TemperatureProps) {
  return (
    <div className={`flex grow items-center flex-col ${className}`}>
      <label className="text-xl">{`${temperature}°C`}</label>
      {label && <label className="text-sm opacity-45">{label}</label>}
    </div>
  );
}
