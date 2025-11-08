import React from "react";
import "./style/servicesModule_style.css";
import { useContext } from "react";
import { ContainerProvider } from "../Container";
import servicesLogin_Api from "../API/servicesLogin/servicesLogin_API";
import { useNavigate } from "react-router-dom";

function ServicesModule(): React.JSX.Element {
  const { provideDATA, setProvideDATA } = useContext(ContainerProvider.Context);
  const navigate = useNavigate();


  const handleChangeColor = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setProvideDATA({ ...provideDATA, appColorTheme: "light" });
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setProvideDATA({ ...provideDATA, appColorTheme: "dark" });
    }
  };


  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("username");
    const password = formData.get("password");

    if (userName && password) {
      const response_userLog = await servicesLogin_Api({ userName: userName.toString(), password: password.toString() })
      try {
        console.log(response_userLog);
        if (response_userLog.status === 200) {
          navigate('/dashboard');
        }
      } catch {
      }

      e.currentTarget.reset(); // Reset form after submission
    }
  };


  return (
    <div className="services-module">
      <header>
        <h2>Log In</h2>
      </header>
      <main>
        <div>
          <button onClick={handleChangeColor}>change color {provideDATA.appColorTheme === "dark" ? "light" : "dark"}</button>
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