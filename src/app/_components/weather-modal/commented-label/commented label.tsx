interface CommentedValueProps {
  value: number;
  label?: string;
  className?: string;
}

export default function CommentedValue({
  value,
  label,
  className = "",
}: CommentedValueProps) {
  return (
    <div className={`flex items-center flex-col ${className}`}>
      <label className="text-xl">{value}</label>
      {label && <label className="text-sm opacity-45">{label}</label>}
    </div>
  );
}
