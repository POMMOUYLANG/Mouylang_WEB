import { Link } from "react-router-dom";

const UserErrorPage = () => {
  return (
    <div>
      <h4>Something went wrong!</h4>
      <Link to="/user">Back</Link>
    </div>
  );
};

export default UserErrorPage;
