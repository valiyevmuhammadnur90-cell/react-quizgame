import { useNavigate } from "react-router-dom";
import Button, { LoginButton } from "../ui/Button";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();

  function navigation() {
    navigate("/");
  }

  return (
    <div className="nav">
      <h2 onClick={navigation}>Quizgame.com❓</h2>

      <div className="nav-sign">
        {!isAuth ? (
          <>
            <LoginButton />
            <Button />
          </>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
