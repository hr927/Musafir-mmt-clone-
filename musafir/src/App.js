import "./App.css";

import AllRoute from "./Routes/AllRoute";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
