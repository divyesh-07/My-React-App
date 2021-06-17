import * as React from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>Users</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div id="my-div" key={document.getElementById(user.id)}>
                <a href="#" class="fill-div"></a>
                <p>
                  <a href="user.html">
                    <strong>{user.email}</strong>
                  </a>
                </p>
                <p>
                  <strong>
                    {user.first_name}&nbsp; {user.last_name}
                  </strong>
                </p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
