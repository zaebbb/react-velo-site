import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import Footer from "./components/Footer";
import _404 from "./components/pages/_404";
import News from "./components/pages/News";
import OneNews from "./components/pages/oneNews";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import OneProduct from "./components/pages/oneProduct";

function App() {

    let checkToken = localStorage.getItem('authorization') === null ? localStorage.setItem('authorization', '') : ''

  return (
    <>
      <Router>
        <Navbar
        />
            <main className="widthContent">
                <Switch>
                    <Route
                        element={<Main />}
                        path="/"
                    />
                    <Route
                        element={<News />}
                        path="/news"
                    />
                    <Route
                        element={<OneNews />}
                        path="/news/:id"
                    />
                    <Route
                        element={<Contact />}
                        path="/contact"
                    />
                    <Route
                        element={<About />}
                        path="/about"
                    />
                    <Route
                        element={<Products />}
                        path="/products"
                    />
                    <Route
                        element={<OneProduct />}
                        path="/products/:id"
                    />
                    <Route
                        path="*"
                        element={<_404 />}
                    />
                </Switch>
            </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
