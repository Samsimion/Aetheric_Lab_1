import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Button = ({
  children,
  to = "/contact",
  variant = "primary",
  className = "",
}) => {
  const styles =
    variant === "secondary"
      ? "border border-white/20 text-white hover:border-[#1677FF] hover:bg-white/5"
      : "bg-[#1677FF] text-white shadow-lg shadow-blue-500/20 hover:bg-[#0F63D4]";

  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}

      <ArrowRight
        size={17}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default Button;

// const Button = ({ children, onClick, type = "button" }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className="
//         inline-flex
//         items-center
//         justify-center
//         rounded-full
//         bg-gradient-to-r
//         from-cyan-500
//         to-purple-500
//         px-7
//         py-3
//         text-sm
//         font-semibold
//         text-white
//         shadow-lg
//         shadow-cyan-500/10
//         transition
//         duration-300
//         hover:-translate-y-0.5
//         hover:shadow-cyan-500/30
//       "
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;