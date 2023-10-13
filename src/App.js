import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      <Router> 
        <main className="main">
            <Header/>
           
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />
				</Routes>

			</main>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
