import React from "react";
import ReactDOM from "react-dom";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Router from "./Routes";

const index = () =>
  ReactDOM.render(<Router />, document.getElementById("root"));

export default index();
