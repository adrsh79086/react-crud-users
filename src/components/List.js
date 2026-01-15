import { deleteUser } from "../api/api";
import { Link } from "react-router-dom";

const List = ({ users, setUsers }) => {
  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td data-label="Name" className="cell">
              {user.name}
            </td>

            <td data-label="Email" className="cell wrap">
              {user.email}
            </td>

            <td data-label="Phone" className="cell">
              {user.phone}
            </td>

            <td data-label="Actions" className="cell">
              <div className="action-wrap">
                <Link
                  to={`/user/${user.id}`}
                  className="action-btn view"
                >
                  View
                </Link>

                <Link
                  to={`/edit/${user.id}`}
                  className="action-btn edit"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  className="action-btn delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
