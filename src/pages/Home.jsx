import  { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative bg-gradient-to-r from-primary to-orange-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200"
            alt="Diwali Sale Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🎊 Diwali Mega Sale! 🎊
          </h1>
          <p className="text-xl mb-8">Up to 70% OFF on all categories + Free Delivery</p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-red-800 mb-2">🔥 Buy 1 Get 1 FREE</h3>
              <p className="text-red-600">On all clothing items</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-green-800 mb-2">💰 Flat ₹500 OFF</h3>
              <p className="text-green-600">On orders above ₹2000</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">🚚 FREE Delivery</h3>
              <p className="text-blue-600">No minimum order value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Clothing', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300', link: '/shop?category=clothing' },
              { name: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300', link: '/shop?category=electronics' },
              { name: 'Grocery', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300', link: '/shop?category=grocery' },
              { name: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', link: '/shop?category=footwear' }
            ].map((category) => (
              <Link key={category.name} to={category.link} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform" />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop" className="text-primary hover:text-orange-600 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose DesiCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">100% authentic products from trusted brands</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Guaranteed lowest prices with exciting offers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across India with COD option</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
 