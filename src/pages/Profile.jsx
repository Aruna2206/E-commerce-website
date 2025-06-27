import  { useNavigate } from 'react-router-dom';
import { User, ShoppingBag, LogOut, Edit } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { state, logout } = useAuth();
  const navigate = useNavigate();

  if (!state.isAuthenticated) {
    navigate('/auth');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const orders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      items: 3,
      total: 2499,
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      items: 1,
      total: 799,
      status: 'Shipped'
    },
    {
      id: 'ORD003',
      date: '2024-01-05',
      items: 2,
      total: 1599,
      status: 'Processing'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">{state.user?.name}</h2>
              <p className="text-gray-600">{state.user?.email}</p>
            </div>

            <div className="space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-600">Phone: {state.user?.phone}</p>
                <p className="text-gray-600">Email: {state.user?.email}</p>
              </div>

              <div className="border-t pt-4">
                <button className="flex items-center text-primary hover:text-orange-600 mb-2">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ShoppingBag className="h-6 w-6 mr-2" />
            Order History
          </h2>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                    <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString('en-IN')}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                    <p className="font-semibold text-lg">₹{order.total.toLocaleString()}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                      View Details
                    </button>
                    {order.status === 'Delivered' && (
                      <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                        Reorder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-4">Start shopping to see your orders here!</p>
              <button
                onClick={() => navigate('/shop')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
 