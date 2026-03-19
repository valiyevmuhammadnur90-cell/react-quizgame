import {
  LeftOutlined,
  DoubleRightOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();
  function navigation() {
    navigate("/sign-up");
  }

  return (
    <div>
      <button onClick={navigation}>
        Sign up <DoubleRightOutlined className="icon" />
      </button>
    </div>
  );
}

export function LoginButton() {
  const navigate = useNavigate();
  function naviLoginPage() {
    navigate("/login");
  }

  return (
    <div>
      <button className="login-btn" onClick={naviLoginPage}>
        Login <RightOutlined className="icon" />
      </button>
    </div>
  );
}

export function BackHome() {
  const navigate = useNavigate();
  function backHome() {
    navigate("/");
  }

  return (
    <div>
      <button className="backHome" onClick={backHome}>
        <LeftOutlined />
      </button>
    </div>
  );
}

export function BackHomeAuth() {
  const navigate = useNavigate();
  function backHome() {
    navigate("/");
  }

  return (
    <div>
      <button class="backHomeAuth" onClick={backHome}>
        <LeftOutlined />
      </button>
    </div>
  );
}

export function BackHomeEnd() {
  const navigate = useNavigate();
  function backHome() {
    navigate("/");
  }
  function tryAgain() {
    navigate(0)
  }

  return (
    <div className="backHomeEndDiv">
      <button className="backHomeEnd" onClick={backHome}>
        Go Back Home
      </button>
      <button className="backHomeEnd" onClick={tryAgain}>
        Try Again
      </button>
    </div>
  );
}
