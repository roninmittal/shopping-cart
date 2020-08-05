import React, { useState } from "react";
import commerceData from "./dummyData";
import ProductItem from "./Components/ProductItem";
import Search from "./Components/Search";
import Sort from "./Components/Sort";
import Counter from "./Components/Counter";
import PriceDetail from "./Components/PriceDetail";
import CartNotification from "./Components/CartNotification";
import { sortByText, sortByNumber } from "./utils/common";

function App() {
  const [productItems, setProductItems] = useState(commerceData);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState(false);

  const totalPrice = cartProducts.reduce(
    (sum, cartProduct) => sum + cartProduct.totalProductPrice,
    0
  );

  const itemSelected = cartProducts.reduce(
    (sum, cartProduct) => sum + cartProduct.quantity,
    0
  );

  const searchProducts = (value) => {
    setCartDisplay(false);
    // need to change with filterData
    const filteredProducts = commerceData.filter((productInfo) =>
      productInfo.name.includes(value)
    );
    setProductItems(filteredProducts);
  };

  const sortingProducts = (sortType) => {
    let sortedProductsInfo = [...productItems];
    switch (sortType) {
      case "asc":
      case "desc":
        sortByText(sortedProductsInfo, sortType);
        break;
      case "htl":
      case "lth":
      default:
        sortByNumber(sortedProductsInfo, sortType);
        break;
    }
    setProductItems(sortedProductsInfo);
  };

  const addProductOnCart = (product) => {
    const existedProduct = cartProducts.some((item) => item.id === product.id);
    if (existedProduct) {
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
            totalProductPrice: cartProduct.price * (cartProduct.quantity + 1),
          };
        return cartProduct;
      });
      setCartProducts(newCartProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        { ...product, quantity: 1, totalProductPrice: product.price },
      ]);
    }
  };

  const updateProductOnCart = (id, step) => {
    const newCart = cartProducts
      .map((cartProduct) => {
        if (cartProduct.id === id && cartProduct.quantity > 0) {
          const order = step === "dec" ? -1 : 1;
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + order,
            totalProductPrice:
              cartProduct.price * (cartProduct.quantity + order),
          };
        }
        return cartProduct;
      })
      .filter((cartProduct) => cartProduct.quantity > 0);
    setCartProducts(newCart);
  };

  const cartToggle = (type) => setCartDisplay(type);

  const cartFalseToggle = () => cartToggle(false)

  return (
    <div className="container">
      <header className="row justify-content-sm-end py-3">
        <div className="col-sm-6 col">
          <Search searchProducts={searchProducts} />
        </div>
        {cartDisplay ? (
          <div className="col-sm-auto col-3">
            <button
              className="btn btn-primary"
              onClick={cartFalseToggle}
            >
              Home
            </button>
          </div>
        ) : (
          <div className="col-sm-auto col-3">
            <CartNotification count={itemSelected} cartToggle={cartToggle} />
          </div>
        )}
      </header>
      {!cartDisplay && (
        <section className="row">
          <div className="col-sm-3">Filter</div>
          <div className="col-sm-9">
            <Sort sortingProducts={sortingProducts} />
            <div className="row">
              {productItems.map((productItem) => (
                <ProductItem
                  key={productItem.id}
                  {...productItem}
                  addProductOnCart={addProductOnCart}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      {cartDisplay && (
        <section className="row justify-content-sm-end">
          <div className="col-sm-6">
            {cartProducts.map((cartProduct) => {
              return (
                <Counter
                  key={cartProduct.id}
                  {...cartProduct}
                  updateProductOnCart={updateProductOnCart}
                />
              );
            })}
          </div>
          <div className="col-sm-6">
            {cartProducts.map((cartProduct, i) => {
              return (
                <PriceDetail key={`${cartProduct.id}${i}`} {...cartProduct} />
              );
            })}
            <div className="total row row py-2 mx-0 my-2 border-top font-weight-bold">
              <div className="col-6">Total</div>
              <div className="col-6 text-right">{totalPrice}</div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
