import React from "react";
import AppHeader from "./components/AppHeader";
import AddTopic from "./components/Topics/AddTopic";

import { Provider } from "react-redux";
import store from "./store";

import TopicsViewer from "./components/Topics/TopicsViewer";

import "./styles/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <AddTopic />
        <TopicsViewer />
      </div>
    </Provider>
  );
}

export default App;
