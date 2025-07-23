import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
