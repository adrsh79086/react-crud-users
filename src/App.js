import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import UserForm from "./components/UserForm";
import UserDetail from "./pages/UserDetail";
import { fetchUsers } from "./api/api";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} loading={loading} />} />
        <Route path="/create" element={<UserForm users={users} setUsers={setUsers} />} />
        <Route path="/edit/:id" element={<UserForm users={users} setUsers={setUsers} />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
