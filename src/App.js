import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Header from "./Components/Header";
import {LinkButton} from "./Components/LinkButton";
import {ShopList} from "./Components/ShopList";
import {ShopListHistory} from "./Components/ShopListHistory";


function App() {
  return (
    <div className="App">
      <Header />
        <div className="container flex-column  col-12 col-lg-5">
            <BrowserRouter>
                <Link to="/shopList">
                    <LinkButton
                        title="Kolejne zakupy"
                        icon={<i className="bi bi-basket-fill"></i>}
                    />
                </Link>
                <Link to="/shopListHistory">
                    <LinkButton
                        title="Historia zakupów"
                        icon={<i className="bi bi-list-ul"></i>}
                    />
                </Link>
                <Routes>
                    <Route path="/shopList" element={<ShopList />} />
                    <Route path="/shopListHistory" element={<ShopListHistory />}/>
                </Routes>
            </BrowserRouter>
        </div>

    </div>
  );
}

export default App;
