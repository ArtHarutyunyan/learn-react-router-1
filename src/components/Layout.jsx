import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {/* <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "red",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "red",
          })}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "red",
          })}
        >
          About
        </NavLink> */}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2022</footer>
    </>
  );
};

export { Layout };
