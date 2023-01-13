import { Link, Outlet, Route, Routes } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li>
          <Link to="contacts">Our contact</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>

      {/* <Routes>
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}
      <Outlet />
    </div>
  );
};

export { AboutPage };
