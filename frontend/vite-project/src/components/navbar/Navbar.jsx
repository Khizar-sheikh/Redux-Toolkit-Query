import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white font-semibold text-xl">My Store</Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="/cart" className="text-white hover:text-gray-300">Cart</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
