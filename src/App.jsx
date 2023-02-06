import { useEffect, useState } from "react";
import { Cart } from "./Cart";
import { Header } from "./Header";
import { ProductList } from "./ProductList";
import { api } from "./services/api";
import { DivProductCart } from "./styles/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageProduct = localStorage.getItem("@PRODUCT");
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState(
    localStorageProduct ? JSON.parse(localStorageProduct) : []
  );
  const [filteredProducts, setFilteredProducts] = useState("");
  const filterProduct = products.filter((product) => {
    return filteredProducts.trim() === ""
      ? true
      : product.category
          .toLowerCase()
          .includes(filteredProducts.toLowerCase()) ||
          product.name
            .toLowerCase()
            .trim()
            .includes(filteredProducts.toLowerCase().trim());
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
    if (!productCart.some((product) => product.id === currentProduct.id)) {
      setProductCart([...productCart, currentProduct]);
      toast.success("Item adicionado ao carrinho!");
    } else {
      toast.error("Item já está no carrinho!");
    }
  };

  const removeCart = (currentId) => {
    const newCart = productCart.filter((product) => product.id !== currentId);
    setProductCart(newCart);
    toast.error("Item removido!");
  };

  const totalDelete = () => {
    setProductCart([]);
    toast.warning("Itens removidos, Sacola vazia!");
  };

  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} />
      <DivProductCart>
        <ProductList filterProduct={filterProduct} addCart={addCart} />
        <Cart
          productCart={productCart}
          removeCart={removeCart}
          totalDelete={totalDelete}
        />
      </DivProductCart>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
