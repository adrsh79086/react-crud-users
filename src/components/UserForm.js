import { useEffect, useState } from "react";
import { createUser, updateUser, fetchUserById } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = ({ users, setUsers }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch user data when editing
  useEffect(() => {
    if (id) {
      fetchUserById(id).then((res) => setUser(res.data));
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await updateUser(id, user);
      setUsers(
        users.map((u) =>
          u.id === Number(id) ? { ...u, ...user } : u
        )
      );
    } else {
      const res = await createUser(user);
      setUsers([...users, { ...res.data, id: Date.now() }]);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit User" : "Add User"}</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Enter full name"
        value={user.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter email address"
        value={user.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        placeholder="Enter phone number"
        value={user.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {id ? "Update User" : "Save User"}
      </button>
    </form>
  );
};

export default UserForm;
