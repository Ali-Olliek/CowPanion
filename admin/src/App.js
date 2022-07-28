// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components and Pages
import MainPage from "./pages/Main/MainPage";
import UnAuth from "./pages/UnAuth";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Main" element={<MainPage />}></Route>
        <Route path="/404" element={<UnAuth />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
