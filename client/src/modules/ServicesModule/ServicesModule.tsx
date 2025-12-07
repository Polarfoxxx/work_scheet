import React from "react";
import "./style/servicesModule_style.css";
import { useContext } from "react";
import { ContainerProvider } from "../Container";
import servicesLogin_Api from "../API/servicesLogin/servicesLogin_API";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ServicesModule(): React.JSX.Element {
  const { provideDATA, setProvideDATA } = useContext(ContainerProvider.Context);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    provideDATA.isLogged ? navigate('MainInOwned') : navigate('');
    return () => { setProvideDATA({ ...provideDATA, isLogged: false }) };   //! pri odchode nastane odhlásenie 
  }, []);


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
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const payload = {
      userName: formData.username as string,
      password: formData.password as string,
    };

    if (payload.userName && payload.password) {
      const result = await servicesLogin_Api(payload);
      console.log("Login API result:", result);
      try {
        if (result.message === "OK") {
          console.log("Login successful");
          setProvideDATA({ ...provideDATA, isLogged: true });
          navigate('/mainInOwned');
        };
      } catch {
        console.error("Login failed");
      };
      /* e.currentTarget.reset(); */ // Reset form after submission
    } else {
      alert("Chybné uživatelské jméno nebo heslo.");
    };
  };


  return (
    !provideDATA.isLogged ?
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
      </div> :
      <div className="services-module">
      </div>
  );
}

export default ServicesModule;