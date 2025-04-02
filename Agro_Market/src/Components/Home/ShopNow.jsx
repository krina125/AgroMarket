import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tractor, 
  Search, 
  ShoppingCart, 
  Filter, 
  SlidersHorizontal, 
  Star, 
  Heart, 
  Leaf, 
  ChevronDown, 
  MapPin, 
  ShoppingBag,
  ArrowUpRight
} from 'lucide-react';
import { products } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../../cartSlice";
import { useDispatch } from 'react-redux';
const ShopNow = () => {
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]); // Store fetched products
  // const [loading, setLoading] = useState(true); // Loading state
  // const [error, setError] = useState(null); // Error state
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'grains', name: 'Grains & Pulses' },
    { id: 'spices', name: 'Spices' },
    { id: 'organic', name: 'Organic' }
  ];

  // useEffect(() => {
  //   // Fetch products from API
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch('http://localhost:5000/api/products'); // Replace with your actual API URL
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch products');
  //       }
  //       const data = await response.json();
  //       setProducts(data); // Update products state
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const filteredProducts = products.filter(product => {
    if (activeCategory !== 'all' && product.category !== activeCategory && !(activeCategory === 'organic' && product.organic)) {
      return false;
    }
  
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
  
    return true;
  });
  
  // const addToCart = (productId) => {
  //   setCartCount(prevCount => prevCount + 1);
  //   // In a real app, you would add the product to the cart state or context
  // };

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch Redux action to add product to cart
    setCartCount(prevCount => prevCount + 1);
  };
  
  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };


  
return (
    <div className="min-h-screen">
 

    {/* Hero Banner */}
    <div 
      className="relative h-[300px] bg-cover bg-center" 
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=1470")'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Farm Fresh Products
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Browse our selection of fresh, locally-sourced products directly from verified farmers
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, farmers, or categories..."
              className="w-full pl-12 pr-4 py-3 rounded-lg text-lg text-white"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button 
          className="w-full bg-white p-3 rounded-lg shadow-sm flex items-center justify-center text-gray-700"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`w-full md:w-1/4 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    className={`w-full text-left py-2 px-3 rounded-lg ${
                      activeCategory === category.id 
                        ? 'bg-green-100 text-green-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Price Range</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">Organic Only</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">Free Delivery</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">Discounted</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">In Stock</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Farmer Location</h2>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              <option>All Locations</option>
              <option>Maharashtra</option>
              <option>Punjab</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
              <option>Uttar Pradesh</option>
              <option>Himachal Pradesh</option>
            </select>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Rating</h2>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded text-green-600 focus:ring-green-500"
                  />
                  <div className="flex items-center">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                    <span className="ml-1 text-gray-700">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Sort Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Sort by:</span>
              <select className="border-0 text-gray-500 focus:ring-0">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
            <span className="text-gray-500">{filteredProducts.length} products</span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.organic && (
                    <span className="absolute top-4 left-4 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                      <Leaf className="h-3 w-3 mr-1" />
                      Organic
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                  <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {product.farmer} | {product.location}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      {product.discount > 0 ? (
                        <div className="flex items-center">
                          <span className="text-gray-400 line-through text-sm mr-2">₹{product.price}</span>
                          <span className="text-green-600 font-bold text-lg">
                            ₹{Math.round(product.price * (1 - product.discount / 100))}
                          </span>
                        </div>
                      ) : (
                        <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
                      )}
                      <span className="text-gray-500 text-sm">/{product.unit}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.stock === 'In Stock' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
                      onClick={() => handleAddToCart(product)} 
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
                      <ArrowUpRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="text-gray-400 mb-4">
                <ShoppingBag className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search criteria to find what you're looking for.
              </p>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                onClick={() => {
                  setActiveCategory('all');
                  setPriceRange([0, 1000]);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-md bg-green-600 text-white shadow-sm">
                  1
                </button>
                <button className="px-3 py-2 rounded-md bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-md bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <span className="px-3 py-2 text-gray-600">...</span>
                <button className="px-3 py-2 rounded-md bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                  10
                </button>
                <button className="px-3 py-2 rounded-md bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Featured Products Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.organic && (
                  <span className="absolute top-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                    <Leaf className="h-3 w-3 mr-1" />
                    Organic
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-600 font-bold">₹{product.price}/{product.unit}</span>
                  <button 
                    className="bg-green-100 text-green-600 p-1.5 rounded-lg hover:bg-green-200"
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Seasonal Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Seasonal Specials</h2>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Summer Harvest Collection</h3>
              <p className="text-gray-700 mb-6">
                Enjoy the freshest produce of the season with our curated collection of summer fruits and vegetables.
                Directly from farms to your table.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-fit">
                Explore Collection
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {products.slice(1, 5).map(product => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="h-24">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-green-600 text-sm font-bold">₹{product.price}/{product.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mb-4">
        <button
          className="text-center bg-green-600 px-4 py-2 text-white rounded"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      </div>
  
  </div>
  );
};

export default ShopNow;