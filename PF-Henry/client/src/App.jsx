import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductDetail from "./Components/ProductDetails/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" render={() => <NavBar />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        <Route
          exact
          path="/productdetail/:id"
          render={() => <ProductDetail />}
        />

        <Route path="/" render={() => <Footer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
