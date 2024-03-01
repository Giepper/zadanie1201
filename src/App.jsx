import { useState } from "react";
import "./App.css";
import TopPanelContainer from "./cnt_components/top_panel";
import Headerpanel from "./cnt_components/header_panel";
import MainPanel from "./cnt_components/main_panel";
import NewComponent from "./stany/setstate_test";
import NewClassComponents from "./stany/state_test";
import ProductList from "./json_component/json_cmp";
import TaskList from "./stany/taks_data_list";

function App() {
  return (
    <>
      <TopPanelContainer />
      <Headerpanel />
      <MainPanel />
      <NewComponent />
      <NewClassComponents />
      <ProductList />
      <TaskList />
    </>
  );
}

export default App;
