import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/footer";
import Cart from "./Components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        <Route path="/" render={() => <Footer />} />
        <Route path="/cart" render={() => <Cart /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
