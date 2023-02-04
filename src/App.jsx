import { useEffect, useState } from "react";
import { Cart } from "./Cart";
import { Header } from "./Header";
import { ProductList } from "./ProductList";
import { api } from "./services/api";

function App() {
  const localStorageProduct = localStorage.getItem("@PRODUCT");
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState(
    localStorageProduct ? JSON.parse(localStorageProduct) : []
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProduct = products.filter((product) => {
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase());
  });

  useEffect(() => {
    async function loadApi() {
      try {
        const response = await api.get("products");

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("@PRODUCT", JSON.stringify(productCart));
  }, [productCart]);

  const addCart = (currentProduct) => {
    console.log("addcart", currentProduct);
    if (!productCart.some((product) => product.id === currentProduct.id)) {
      setProductCart([...productCart, currentProduct]);
    } else {
      alert("Item ja está no carrinho");
    }
  };

  const removeCart = (currentId) => {
    const newCart = productCart.filter((product) => product.id !== currentId);
    setProductCart(newCart);
  };

  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} />
      <Cart productCart={productCart} removeCart={removeCart} />
      <ProductList products={products} addCart={addCart} />
    </div>
  );
}

export default App;
