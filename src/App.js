import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
// Import page components
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

function App() {

  return (
    <BrowserRouter>


      <div>

        <header>
          <h1>My React Website</h1>

          <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/About">About</Link>
            {" | "}
            <Link to="/Contacts">Contacts</Link>
          </nav>
        </header>


        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contacts"
              element={<Contacts />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;