import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SampleGame from "./pages/SampleGame";
import RandomGame from "./pages/RandomGame";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>React Three-in-a-Row Game</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/sample">Sample Game</Link>
          <Link to="/random">Random Game</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="home-page">
                <h2>Welcome</h2>
                <p>Select a game mode above.</p>
              </div>
            }
          />

          <Route path="/sample" element={<SampleGame />} />
          <Route path="/random" element={<RandomGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}