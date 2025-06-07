import { useState } from "react";

export default function ProductGrid({
  products,
  cartItems,
  addToCart,
  removeFromCart,
}) {
  const [sortBy, setSortBy] = useState("Most Popular");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return b.id - a.id;
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      default:
        return b.rating - a.rating; // Most Popular
    }
  });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-xs text-gray-500 ml-1">
                    {product.rating}/5
                  </span>
                </div>
                <span className="text-xs text-gray-700">
                  {product.stock > 0
                    ? `(${product.stock} pcs left)`
                    : "(Out of stock)"}
                </span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">${product.price}</p>
                {product.price < product.originalPrice && (
                  <p className="text-gray-400 line-through ml-2">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product.id)}
                  disabled={product.stock <= 0}
                  className={`w-full mt-2 py-1 rounded flex items-center justify-center active:translate-y-1 transition-all ${
                    product.stock <= 0
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gray-800 text-gray-100 hover:bg-gray-900"
                  }`}
                >
                  {product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
