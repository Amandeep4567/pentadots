type ButtonProps = {
  type: string;
  title: string;
  variant: string;
};

export default function Button({ type, title, variant }: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-lg border ${variant} ${type}`}>
      <label className="cursor-pointer font-bold text-base">{title} </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
}
