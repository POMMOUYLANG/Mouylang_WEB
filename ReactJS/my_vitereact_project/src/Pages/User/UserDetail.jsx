import { useLoaderData, Link } from "react-router-dom";

const UserDetail = () => {
  const data = useLoaderData();
  const { id, name, email, username } = data;
  return (
    <div className="user-detail">
      <article>
        <h4>user ID : #{id}</h4>
        <h4>name : {name}</h4>
        <h4>email : {email}</h4>
        <h4>username : {username}</h4>
        <Link to="/user">Back</Link>
      </article>
    </div>
  );
};
export const UserDetailLoader = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return res.json();
};
export default UserDetail;
