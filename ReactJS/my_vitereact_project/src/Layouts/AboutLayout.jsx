import { Link, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div>
      <h2>About Page</h2>
      <div className="nav-link">
        <Link to="vision">Vision</Link>
        <Link to="mision">Mision</Link>
        <Link to="goal">Goal</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
