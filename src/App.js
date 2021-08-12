import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideMenu />
      <Switch>
        <Route component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
