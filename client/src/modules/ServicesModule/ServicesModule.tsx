import React from "react";
import "./style/servicesModule_style.css";

function ServicesModule(): React.JSX.Element {
  return (
    <div className="services-module">
      <header>
        <h2>Log In</h2>
      </header>
      <main>
        <div>
          <form className="login-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Log In</button>
          </form>
        </div>
        <p>This is the Services module. Here you can log in to access exclusive features and services.</p>
      </main>
    </div>
  );
}

export default ServicesModule;