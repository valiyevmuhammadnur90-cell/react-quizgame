import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import register from "../../services/service";
import { useAuth } from "../../context/AuthContext";
import { BackHomeAuth } from "../../ui/Button";

function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const regMutation = useMutation({
    mutationFn: register,
    onSuccess: (res) => {
      message.success("Account created successfully!");

      if (res?.token) {
        login(res.token);
      } else {
        login("temp-token");
      }

      navigate("/");
    },
    onError: (err) => {
      message.error(err?.response?.data?.message || "Registration failed");
    },
  });

  const onFinish = () => {
    if (!formData.username || !formData.email || !formData.password) {
      message.warning("Please fill all fields");
      return;
    }

    regMutation.mutate(formData);
  };

  return (
    <div className="signup-page">
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      <div className="signup-card">
        <h2>Create Account</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={onFinish} disabled={regMutation.isPending}>
          {regMutation.isPending ? "Creating..." : "Join the Quiz"}
        </button>

        <p className="hint">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <BackHomeAuth />
    </div>
  );
}

export default SignUp;
