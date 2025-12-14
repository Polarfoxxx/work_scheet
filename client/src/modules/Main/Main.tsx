import React from "react";
import "./style/main_style.css";
import {
  SpeedCutModule,
  GrindingSchemaModule,
  WellcomeModule,
  ServicesModule,
  MainInOwned,
  ExcelFirstModule,
  ExcelSecondModule,
  CykleTimeModule,
  PicsAnalyzeModule,
  GrindWhellLifeModule,
  WhellSignalModule,
  EducationModule,
  WellcomeAdminModule
} from "../";
import {
  Route,
  Routes,
  NavLink
} from "react-router-dom";

function Main(): React.JSX.Element {


  const handleDropdownMenu = (): void => {
    const navBar = document.querySelector(".navigationBar") as HTMLElement;
    navBar.classList.toggle("active");
  };

  return (
    <div className="main_container">
      <header>
        <h1>Grinding application</h1>
        <p>This is the application for help and calculate value</p>
      </header>
      <nav>
        <div className="dropdown_button">
          <button onClick={handleDropdownMenu}>Menu</button>
        </div>
        <div className="navigationBar">
          <NavLink to="/" onClick={handleDropdownMenu} className="nav-link">Home</NavLink>
          <NavLink to="/grindingSchemaModule" onClick={handleDropdownMenu} className="nav-link">Schema</NavLink>
          <NavLink to="/speedCut" onClick={handleDropdownMenu} className="nav-link">Speed Cut</NavLink>
          <NavLink to="/cykleTime" onClick={handleDropdownMenu} className="nav-link">Cykle time</NavLink>
          <NavLink to="/grindWhellLife" onClick={handleDropdownMenu} className="nav-link">Grinding whell life</NavLink>
          <NavLink to="/services" onClick={handleDropdownMenu} className="nav-link">Services</NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<WellcomeModule />} />
          <Route path="/grindingSchemaModule" element={<GrindingSchemaModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          <Route path="/cykleTime" element={<CykleTimeModule />} />
          <Route path="/grindWhellLife" element={<GrindWhellLifeModule />} />
          <Route path="/services" element={<ServicesModule />} />
          <Route path="/mainInOwned" element={<MainInOwned />}> {/* <-- layout s navigáciou */}
            <Route index element={<WellcomeAdminModule />} />
            <Route path="education" element={<EducationModule />} />
            <Route path="excelSecond" element={<ExcelSecondModule />} />
            <Route path="excelFirst" element={<ExcelFirstModule />} />
            <Route path="picsAnalyze" element={<PicsAnalyzeModule />} />
            <Route path="whellSignal" element={<WhellSignalModule />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <p> Michal Suchovský. All rights reserved &copy; 2025.</p>
      </footer>
    </div>
  );
}

export default Main;