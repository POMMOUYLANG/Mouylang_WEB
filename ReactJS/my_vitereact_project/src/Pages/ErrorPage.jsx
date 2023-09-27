import { Link } from "react-router-dom";
import errImg from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={errImg} alt="Error Page" />
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
