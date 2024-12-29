import { useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router";
import { loginUser } from "../api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/host";

  function handleForm(e) {
    const { name, value } = e.currentTarget;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(form)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => {
        setStatus("idle");
        e.target.reset();
      });
  }

  return (
    <div className="login-container">
      <h1> {location.state?.message && location.state.message}</h1>
      <h1>Sign in to your account</h1>

      {error?.message && <h3>{error.message}</h3>}

      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleForm}
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </label>

        <label>
          <input
            onChange={handleForm}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>

        <button disabled={status == "submitting"}>
          {status == "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p>
        Don’t have an account?
        <span> Create one now</span>
      </p>
    </div>
  );
}

export default Login;
