import { useEffect, useState } from "react";
import { fetchUserById } from "../api/api";
import { useParams } from "react-router-dom";
import UserSkeleton from "../components/UserSkeleton";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(id).then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <UserSkeleton />;

  return (
    <div className="detail-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetail;
