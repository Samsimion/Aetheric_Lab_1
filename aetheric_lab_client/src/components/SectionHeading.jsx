const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = false,
}) => {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-bold uppercase tracking-[0.25em] ${
          dark ? "text-[#62A9FF]" : "text-[#1677FF]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-[#0B1B34]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl leading-7 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;