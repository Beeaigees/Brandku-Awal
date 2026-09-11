import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-6 bg-blue-600">
      <h1 className="text-xl font-bold text-white">
        BrandKu
      </h1>

      <div className="flex gap-3 text-xl text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to ="/pricing">Pricing</Link>
      </div>
    </header>
  );
};

export default Header;