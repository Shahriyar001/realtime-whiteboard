import "./App.css";
import Forms from "./components/Forms";
import { Route, Routes } from "react-router-dom";
import Roompage from "./pages/Romepage";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms></Forms>} />
        <Route path="/:roomId" element={<Roompage />} />
      </Routes>
    </div>
  );
};

export default App;
