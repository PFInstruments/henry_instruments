import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/footer";
import ProductDetail from "./Components/ProductDetails/ProductDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/productdetail/:id"
          render={() => <ProductDetail />}
        />
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        <Route path="/" render={() => <Footer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
