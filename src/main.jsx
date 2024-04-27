import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Headers from "./assets/Componentes/Headers";
import Footer from "./assets/Componentes/Footer.jsx";
import Articles from "./assets/Componentes/Articles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Headers />
      <Articles />
      <App />
      <Footer />
    </>
  </BrowserRouter>
);
