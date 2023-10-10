import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
      <Router>
            <Header/>
            <main>
				<Routes>
					<Route path="/" element={<Home />} />

				</Routes>
			</main>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
