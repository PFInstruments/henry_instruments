import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductDetail from "./Components/ProductDetails/ProductDetail";
import Privacy from "./Components/Footer/privacy";
import Contact from "./Components/Footer/contact";
import About from "./Components/Footer/about"; 
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Cart from "./Components/Cart/Cart";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Route path="/" render={() => <NavBar />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        <Route
          exact
          path="/productdetail/:id"
          render={() => <ProductDetail />}
        />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/privacy" render={() => <Privacy />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/about" render={() => <About />} />
        <Route path="/" render={() => <Footer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
