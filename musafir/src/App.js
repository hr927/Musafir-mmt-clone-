import "./App.css";

import AllRoute from "./Routes/AllRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoute />
    </div>
  );
}

export default App;
