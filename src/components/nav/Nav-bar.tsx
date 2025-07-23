import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
