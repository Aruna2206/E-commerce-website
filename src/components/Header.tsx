import  { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Header = () => {
  const { state: cartState } = useCart();
  const { state: authState, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">DesiCart</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-lg hover:bg-orange-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            {authState.isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden md:block">{authState.user?.name}</span>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth" className="text-gray-700 hover:text-primary flex items-center space-x-1">
                <User className="h-5 w-5" />
                <span className="hidden md:block">Login</span>
              </Link>
            )}

            <Link to="/cart" className="relative text-gray-700 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              {cartState.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <nav className="border-t py-2">
          <div className="flex space-x-6 overflow-x-auto">
            <Link to="/shop" className="text-sm text-gray-600 hover:text-primary whitespace-nowrap">All Products</Link>
            <Link to="/shop?category=clothing" className="text-sm text-gray-600 hover:text-primary whitespace-nowrap">Clothing</Link>
            <Link to="/shop?category=electronics" className="text-sm text-gray-600 hover:text-primary whitespace-nowrap">Electronics</Link>
            <Link to="/shop?category=grocery" className="text-sm text-gray-600 hover:text-primary whitespace-nowrap">Grocery</Link>
            <Link to="/shop?category=footwear" className="text-sm text-gray-600 hover:text-primary whitespace-nowrap">Footwear</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
 