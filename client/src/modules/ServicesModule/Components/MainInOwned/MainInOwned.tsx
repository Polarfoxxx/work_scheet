import React from "react";
import "./style/mainOnOwned_style.css";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerProvider } from "../../../Container";
import { LogOutButton } from "../../../services/LogOutButton";


function MainInOwned(): React.JSX.Element {
  const { provideDATA, setProvideDATA } = useContext(ContainerProvider.Context);
  const navigate = useNavigate();

  React.useEffect(() => {
    provideDATA.isLogged ? navigate('') : navigate('/services');
  }, [provideDATA.isLogged, navigate]);


  return (
    <div className="services-container">
      <nav className="navigationBar">
        <NavLink to="education" className="nav-link">Education</NavLink>
        <NavLink to="excelFirst" className="nav-link">Excel one</NavLink>
        <NavLink to="excelSecond" className="nav-link">Excel second</NavLink>
        <NavLink to="picsAnalyze" className="nav-link">Picture analýze</NavLink>
        <NavLink to="whellSignal" className="nav-link">Whell signál</NavLink>
      </nav>
      <div className="outlet-container">
            <div className="logOutBar">
              <LogOutButton />
            </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainInOwned;