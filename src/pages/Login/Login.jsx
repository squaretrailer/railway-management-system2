function Login() {
  return (
    <section className="card">
      <p className="eyebrow">Access</p>
      <h2>Staff login</h2>
      <form className="stacked-form">
        <label>
          Email
          <input type="email" placeholder="staff@trainu.io" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="button" className="pill-button primary">Sign in</button>
      </form>
    </section>
  );
}

export default Login;
