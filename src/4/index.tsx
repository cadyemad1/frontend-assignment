// Style
import { FunctionComponent, useState } from "react";
import "./index.less";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form onSubmit={onSubmit}>
        <input
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
          placeholder="Email"
          className="padding"
        />
        
        <input
          name="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
          placeholder="Password"
          className="padding"
        />
     
        <button className="padding">Login</button>
      </form>
    </div>
  );
};

export default Task5;
