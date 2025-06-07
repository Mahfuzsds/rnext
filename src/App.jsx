import { useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

import images from "./assets/img";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      originalPrice: 145,
      image: images.image1,
      rating: 4,
      reviews: 212,
      stock: 212,
      inCart: true,
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      originalPrice: 180,
      image: images.image_10_1,
      rating: 1,
      reviews: 320,
      stock: 320,
      inCart: false,
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 160,
      image: images.image_10_2,
      rating: 3,
      reviews: 420,
      stock: 420,
      inCart: false,
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      image: images.image_7_1,
      rating: 4,
      reviews: 20,
      stock: 20,
      inCart: true,
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      originalPrice: 180,
      image: images.image_8_2,
      rating: 4,
      reviews: 20,
      stock: 20,
      inCart: true,
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      image: images.image_8,
      rating: 4,
      reviews: 20,
      stock: 20,
      inCart: false,
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      originalPrice: 232,
      image: images.image_9_1,
      rating: 4,
      reviews: 20,
      stock: 20,
      inCart: false,
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      originalPrice: 145,
      image: images.image_9_2,
      rating: 4,
      reviews: 20,
      stock: 20,
      inCart: false,
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      originalPrice: 80,
      image: images.image_9,
      rating: 4.5,
      reviews: 10,
      stock: 10,
      inCart: false,
    },
  ]);

  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (
      product &&
      !cartItems.some((item) => item.id === productId) &&
      product.stock > 0
    ) {
      const updatedProducts = products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - 1 } : p
      );
      setProducts(updatedProducts);

      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      const updatedProducts = products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock + item.quantity } : p
      );
      setProducts(updatedProducts);

      setCartItems(cartItems.filter((item) => item.id !== productId));
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const item = cartItems.find((item) => item.id === productId);
    const product = products.find((p) => p.id === productId);

    if (item && product) {
      // Prevent increasing quantity beyond available stock
      if (
        newQuantity > item.quantity &&
        newQuantity > product.stock + item.quantity
      ) {
        return; // Don't allow increasing beyond stock
      }

      const quantityChange = newQuantity - item.quantity;

      // Update product stock
      const updatedProducts = products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - quantityChange } : p
      );
      setProducts(updatedProducts);

      // Update cart
      if (newQuantity < 1) {
        removeFromCart(productId);
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return calculateSubtotal() * 0.2; // 20% discount
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + 15;
  };

  return (
    <div className="bg-white font-satoshi">
      <AnnouncementBar />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductGrid
            products={products}
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <Cart
            cartItems={cartItems}
            products={products}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            subtotal={calculateSubtotal()}
            discount={calculateDiscount()}
            total={calculateTotal()}
          />
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
