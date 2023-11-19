type ButtonProps = {
  type: string;
  title: string;
  variant: string;
};

export default function Button({ type, title, variant }: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-lg border ${variant} ${type}`}>
      <label className="cursor-pointer font-bold text-base">{title}</label>
    </button>
  );
}
