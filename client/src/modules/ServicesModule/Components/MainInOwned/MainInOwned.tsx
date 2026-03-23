import React, { useRef } from "react";
import "./style/mainOnOwned_style.css";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerProvider } from "../../../Container";
import { LogOutButton } from "../../../services/Components";


function MainInOwned(): React.JSX.Element {
  const { provideDATA } = useContext(ContainerProvider.Context);
  const dropDown_Ref = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate();

  React.useEffect(() => {
    !provideDATA.isLogged && navigate('/services');
  }, [provideDATA.isLogged]);


  const handleOnDropDownClick = (): void => {
    dropDown_Ref.current?.classList.toggle("active");
  };


  return (
    <div className="services-container">
      <nav className="navigationBar">
        <div className="dropdownButton">
          <button onClick={handleOnDropDownClick}>Menu 2</button>
        </div>
        <div ref={dropDown_Ref} className="naviLocation">
          <NavLink to="education" onClick={handleOnDropDownClick} className="nav-link">Education</NavLink>
          <NavLink to="excelFirst" onClick={handleOnDropDownClick} className="nav-link">Excel one</NavLink>
          <NavLink to="excelSecond" onClick={handleOnDropDownClick} className="nav-link">Excel second</NavLink>
          <NavLink to="picsAnalyze" onClick={handleOnDropDownClick} className="nav-link">Picture analýze</NavLink>
          <NavLink to="whellSignal" onClick={handleOnDropDownClick} className="nav-link">Whell signál</NavLink>
          <NavLink to="tkzCalculate" onClick={handleOnDropDownClick} className="nav-link">Calculate Tz</NavLink>
        </div>
        <div className="logOutBar">
          <LogOutButton />
        </div>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainInOwned;