import React from "react";
import { GlobalStyles } from "./styled/globalStyles";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProdutcList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
