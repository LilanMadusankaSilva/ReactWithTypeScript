import * as React from "react";
import * as ReactDOM from "react-dom";

import "../../node_modules/font-awesome-scss/scss/font-awesome.scss";
import "../../node_modules/jquery/dist/jquery.min.js";
import "./assets/icon/feather/css/feather.css";
import "./scss/pages.scss";
import "./scss/style.scss";
import "./scss/widget.scss";

import { Home } from "./components/home/home";

declare let module: any;

ReactDOM.render(<Home compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
