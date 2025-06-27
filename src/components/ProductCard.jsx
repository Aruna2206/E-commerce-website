import  { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
      </Link>
      
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
          <span className="text-sm text-secondary font-medium ml-2">{discount}% off</span>
        </div>
      </div>

      <button
        onClick={addToCart}
        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
      >
        <ShoppingCart className="h-4 w-4" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
 