import { useState, useContext, createContext, useEffect } from "react";
import Cookies from "js-cookie"; 

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load from localStorage or cookies
  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    const cookieWishlist = Cookies.get("wishlist");

    if (stored) {
      try {
        setWishlistItems(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse wishlist from localStorage:", err);
      }
    } else if (cookieWishlist) {
      try {
        setWishlistItems(JSON.parse(cookieWishlist));
      } catch (err) {
        console.error("Failed to parse wishlist from cookies:", err);
      }
    }
  }, []);

  // Sync to both localStorage and cookies
  useEffect(() => {
    const data = JSON.stringify(wishlistItems);
    localStorage.setItem("wishlist", data);
    Cookies.set("wishlist", data, { expires: 7 }); 
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);
    if (!exists) {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
