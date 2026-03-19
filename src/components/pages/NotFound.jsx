import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="nf-wrapper">
      <div className="nf-card">
        <img src="/public/404-image.jpg" alt="" />

        <p className="nf-description">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="nf-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
