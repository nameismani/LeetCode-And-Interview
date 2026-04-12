import React from "react";
import { useState, useEffect } from "react";

const data = [
  { id: 1, name: "Arun", position: "Developer", isOnline: true },
  { id: 2, name: "Bala", position: "Designer", isOnline: false },
  { id: 3, name: "Charan", position: "Manager", isOnline: true },
  { id: 4, name: "Divya", position: "QA", isOnline: false },
];

export default function App() {
  // ✅ Users state
  const [users, setUsers] = useState(data);

  // ✅ Search state
  const [search, setSearch] = useState("");

  // ✅ Filtered users state
  const [filteredUsers, setFilteredUsers] = useState([]);

  // ✅ Selected user state
  const [selectedUser, setSelectedUser] = useState();

  // 🔍 Update filtered users
  useEffect(() => {
    const value = search.toLowerCase();

    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(value) ||
        user.position.toLowerCase().includes(value)
      );
    });

    setFilteredUsers(filtered);
  }, [users, search]);

  // ✅ Auto select first user
  useEffect(() => {
    if (!selectedUser && filteredUsers.length > 0) {
      setSelectedUser(filteredUsers[0]);
    }
  }, [filteredUsers, selectedUser]);

  // ✅ Select user
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // 🔥 TRUE MUTATION (direct object update)
  const handleToggleOnline = (id) => {
    const user = users.find((u) => u.id === id);

    if (user) {
      user.isOnline = !user.isOnline; // ✅ direct mutation
      setUsers([...users]); // ⚠️ trigger re-render
    }
  };

  //   const handleToggleOnline = (id) => {
  //   const updatedUsers = users.map((user) => {
  //     if (user.id === id) {
  //       return { ...user, isOnline: !user.isOnline };
  //     }
  //     return user;
  //   });

  //   setUsers(updatedUsers);
  // };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Users</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name or position"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      />

      {/* 📋 Users List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => handleSelectUser(user)}
            style={{
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background:
                selectedUser && selectedUser.id === user.id
                  ? "#e6f2ff"
                  : "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div>{user.name}</div>
              <div style={{ fontSize: "12px" }}>{user.position}</div>
              <div style={{ fontSize: "12px" }}>
                {user.isOnline ? "Online" : "Offline"}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleOnline(user.id);
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Selected User */}
      <div style={{ marginTop: "20px" }}>
        <strong>Selected User:</strong>{" "}
        {selectedUser ? selectedUser.name : "None"} DSF
        {selectedUser ? (selectedUser.isOnline ? "True" : "false") : "None"}
      </div>
    </div>
  );
}
