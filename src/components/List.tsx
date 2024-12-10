import { useEffect, useState } from "react";
import "./List.css";

interface User {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  id: string;
}

const List = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://63cdaad10f1d5967f03440e2.mockapi.io/users"
      );
      const data = await res.json();
      return data;
    };
    try {
      fetchData().then((data) => {
        setUsers(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>My List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div className="card" key={user.id}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>
                Avatar: <img src={user.avatar} alt="avatar" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
