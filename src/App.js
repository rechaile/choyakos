import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.scss';
import Header from "./components/Header/Header";
//import SideMenu from "./components/SideMenu/SideMenu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Category from "./pages/Category/Category";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/category/:categoryName/:subCategoryName?" component={Category} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
