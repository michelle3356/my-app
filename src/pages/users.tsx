import { useState, useEffect, FormEventHandler } from "react";
// import type { User } from "@prisma/client";

export default function Users() {
  // const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // fetch("/api/user")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));
  }, []);

  // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   fetch('/api/user', {
  //     method: 'post',
  //     headers:  {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: formData.get('name'),
  //       email: formData.get('email'),
  //     })
  //   }).then((res) => {
  //     return res.json()
  //   }).then(setUsers)
    
  // }

  return (
    <div>
      <h1>Users</h1>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button>submit</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} /
            {user.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
}