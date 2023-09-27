import { useLoaderData, Link } from "react-router-dom";

const User = () => {
  const data = useLoaderData();
  return (
    <div className="user">
      {data.map((d) => (
        <Link key={d.id} to={d.id.toString()}>
          {d.name}
        </Link>
      ))}
    </div>
  );
};

export const UserLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
export default User;
