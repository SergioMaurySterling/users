import React, { useState, useEffect } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  registrationDate: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      if (response.ok) {
        const data = await response.json();
        data.sort((a: User, b: User) => {
          return (
            new Date(b.registrationDate).getTime() -
            new Date(a.registrationDate).getTime()
          );
        });

        setUsers(data);
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
