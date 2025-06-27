import  { Link } from 'react-router-dom';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/shop"
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart ({state.items.length} items)</h1>

      <div className="space-y-4 mb-8">
        {state.items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total Amount:</span>
          <span className="text-2xl font-bold text-primary">₹{state.total.toLocaleString()}</span>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600 mb-6">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{state.total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span className="text-secondary font-medium">FREE</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
            <span>Total:</span>
            <span>₹{state.total.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/shop"
            className="flex-1 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
 