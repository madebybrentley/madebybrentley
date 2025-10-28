import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-8 border-b border-softblue bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-1">
        <h1 className="text-4xl font-light tracking-tight">
          <span className="text-softblue italic" style={{ fontFamily: 'EB Garamond' }}>made by </span>
          <span className="text-butter font-bold" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.03em' }}>Brentley</span>
        </h1>
      </div>

      <nav className="space-x-8 text-lg" style={{ fontFamily: 'EB Garamond' }}>
        <NavLink to="/" className={({isActive}) => isActive ? "text-softblue font-semibold" : "hover:text-softblue"}>Recipes</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-softblue font-semibold" : "hover:text-softblue"}>About</NavLink>
        <NavLink to="/connect" className={({isActive}) => isActive ? "text-softblue font-semibold" : "hover:text-softblue"}>Connect</NavLink>
      </nav>
    </header>
  );
}
