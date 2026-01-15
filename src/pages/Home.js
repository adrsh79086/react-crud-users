import List from "../components/List";
import UserSkeleton from "../components/UserSkeleton";
import { Link } from "react-router-dom";

const Home = ({ users, setUsers, loading }) => {
  if (loading) return <UserSkeleton />;

  return (
    <div className="page">
      <div className="header responsive-header">
        <h1>User Management</h1>
        <Link to="/create" className="add-btn">+ Add User</Link>
      </div>

      <List users={users} setUsers={setUsers} />
    </div>
  );
};

export default Home;
