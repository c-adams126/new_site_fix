import { NavLink } from "react-router";

function SiteNav() {
    return(
        <header className="p-4 shadow-md bg-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-600 tracking-tight drop-shadow-sm">
              Gigi's Oasis
            </h1>
            <nav className="space-x-4">
                    <NavLink to="/" className="text-gray-600 hover:text-blue-600">Home</NavLink>
                    <NavLink to="/about" className="text-gray-600 hover:text-blue-600">About</NavLink>
                    <NavLink to="/contact" className="text-gray-600 hover:text-blue-600">Contact</NavLink>
            </nav>
            </div>
        </header>
    );
}
export default SiteNav;