import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Main" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
