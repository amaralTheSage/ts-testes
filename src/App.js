"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
function App() {
    var _a = (0, react_1.useState)(0), numero = _a[0], setNumero = _a[1];
    return (<>
      <img src={logo_svg_1.default} alt="logo"/>
      <p>{numero}</p>
      <form>
        <input type="number" placeholder="Número" onChange={function (e) { return setNumero(Number(e.target.value)); }}/>
      </form>

      <h1>FUNCIONAAAAAAAAAAAA</h1>
    </>);
}
exports.default = App;
