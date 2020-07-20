import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { Container } from "reactstrap";
import RaceCard from "./components/RaceCard";
import RaceInfoContainer from "./components/RaceInfoContainer";

function App() {
  return (
    <Provider store={store}>
      <Container className="baseContainer">
        <SearchInput />
        <RaceInfoContainer />
      </Container>
    </Provider>
  );
}

export default App;
