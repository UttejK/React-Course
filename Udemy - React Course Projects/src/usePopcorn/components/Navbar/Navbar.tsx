import Logo from "./Logo";
import NumberOfResults from "./NumberOfResults";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults />
    </nav>
  );
}
