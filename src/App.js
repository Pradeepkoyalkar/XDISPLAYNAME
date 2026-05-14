import React, { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setFullName(firstName + " " + lastName);
    } else {
      setFullName("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>First Name:</label>

          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Last Name:</label>

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Submit
        </button>

      </form>

      {fullName && (
        <h2>Full Name: {fullName}</h2>
      )}

    </div>
  );
}

export default App;