import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/home/home";
declare let module: any;

ReactDOM.render(<Home compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
