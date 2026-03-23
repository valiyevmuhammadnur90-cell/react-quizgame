import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/Sign-up";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <div>
      <Navbar />

      {/* ------------ Routes ------------ */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
