import { useMutation } from "@tanstack/react-query";
import { authorization } from "../../services/service";
import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { BackHomeAuth } from "../../ui/Button";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const authMutation = useMutation({
    mutationFn: authorization,
    onSuccess: (res) => {
      message.success("Login was successful!");

      if (res?.token) {
        login(res.token);
      } else {
        login("temp-token");
      }

      navigate("/");
    },
    onError: (err) => {
      message.error(err?.response?.data?.message || "Login failed");
    },
  });

  const onFinish = () => {
    if (!formData.username || !formData.password) {
      message.warning("Please fill all fields");
      return;
    }

    authMutation.mutate(formData);
  };

  return (
    <div className="login-page">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="login-card">
        <h2>Quiz Login</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={onFinish} disabled={authMutation.isPending}>
          {authMutation.isPending ? "Logging in..." : "Start Quiz"}
        </button>
      </div>
      <BackHomeAuth />
    </div>
  );
}

export default Login;
