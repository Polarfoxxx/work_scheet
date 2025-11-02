import React from "react";
import "./style/servicesModule_style.css";
import servicesLogin_Api from "../API/servicesLogin/servicesLogin_API";

function ServicesModule(): React.JSX.Element {

  const handleChangeColor = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark")
      document.documentElement.setAttribute("data-theme", "light");
    else
      document.documentElement.setAttribute("data-theme", "dark");
  };


  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("username");
    const password = formData.get("password");

    if (userName && password) {
      servicesLogin_Api({ userName: userName.toString(), password: password.toString() })
        .then(res => {
        }).catch(err => {
        })

      e.currentTarget.reset(); // Reset form after submission
    }
  }


  return (
    <div className="services-module">
      <header>
        <h2>Log In</h2>
      </header>
      <main>
        <div>
          <button onClick={handleChangeColor}>change color</button>
        </div>
        <div>
          <form className="login-form" onSubmit={e => loginUser(e)}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" >Log In</button>
          </form>
        </div>
        <p>This is the Services module. Here you can log in to access exclusive features and services.</p>
      </main>
    </div>
  );
}

export default ServicesModule;