import { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.currentTarget;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleForm}
            type="email"
            name="email"
            placeholder="Email address"
          />
        </label>

        <label>
          <input
            onChange={handleForm}
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>

        <button>Sign in</button>
      </form>

      <p>
        Don’t have an account?
        <span> Create one now</span>
      </p>
    </div>
  );
}

export default Login;
