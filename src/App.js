import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <Container className="baseContainer">
        <SearchInput />
      </Container>
    </Provider>
  );
}

export default App;
