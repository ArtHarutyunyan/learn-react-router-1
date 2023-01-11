import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  // console.log({ match });
  return (
    <Link
      to={to}
      style={{ color: match ? "var(--color-active)" : "red" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
