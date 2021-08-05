import React, { useState, useEffect } from "react";
import "../App.css";

function Account({ user }) {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [thisName, setThisName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");

  useEffect(() => {
    setThisName(user.name);
    setUserName(user.username);
    setPassword(user.password);
    setCompanyName(user.company_name);
    setCompanyId(user.company_Id);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9292/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: thisName,
        username: userName,
        password: password,
        companyName: companyName,
        companyId: companyId,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this account?"))
      fetch(`http://localhost:9292/users/${user.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          <span>
            Name:
            <input
              type="text"
              value={thisName}
              onChange={(e) => setThisName(e.target.value)}
            />
          </span>
          <input type="submit" value="Change" />
        </ul>
        <ul>
          <span>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </span>
          <input type="submit" value="Change" />
        </ul>
        <ul>
          <span>
            Password:
            <input
              type={isRevealPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <input type="submit" value="Change" />
          <i onClick={() => setIsRevealPwd(!isRevealPwd)}>Show Password</i>
        </ul>

        <ul className="dropdown">
          <span>
            Company:
            <select
              className="dropdown-control"
              name="company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            >
              <option value="Hopper Inc.">Hopper Inc.</option>
              <option value="Fox Corp.">Fox Corp.</option>
              <option value="Turing Org.">Turing Org.</option>
              <option value="Borg Gov.">Borg Gov.</option>
              <option value="Monsters Inc.">Monsters Inc.</option>
            </select>
          </span>
        </ul>
        <button onClick={handleDelete}>Delete Account</button>
      </form>
    </>
  );
}

export default Account;
