import "./style/introComponent_style.css";

function IntroComponent(): React.JSX.Element {



  return (
    <div className="intro">
      <h2>Vplyv reznej rýchlosti na obrobok</h2>
      <p>
        Rezná rýchlosť je jeden zo základných parametrov pri trieskovom obrábaní.
        Udáva, akou rýchlosťou sa pohybuje rezné ostrie nástroja voči povrchu obrobku.
        Jej správna voľba má zásadný vplyv na kvalitu povrchu, životnosť nástroja,
        produktivitu obrábania aj na samotný obrobok.
      </p>
      <p>
        Nesprávne nastavenie rezn ej rýchlosti môže viesť k rôznym negatívnym dôsledkom,
        ktoré ovplyvňujú nielen kvalitu výsledného výrobku, ale aj ekonomickú efektívnosť celého procesu.
        Nižšie sú uvedené hlavné vplyvy rezn ej rýchlosti na obrobok:
      </p>
      <br />
      <ul>
        <li>
          <h3>Vplyv na kvalitu povrchu</h3>
          <p>
            Pri optimálnej reznej rýchlosti vzniká hladký povrch s menšou drsnosťou.
            Ak je rýchlosť príliš nízka, dochádza k nerovnomernému odlamovaniu triesky a povrch je hrubší.
            Naopak, pri príliš vysokej rýchlosti sa môže materiál na povrchu prehriať,
            čo vedie k zhoršeniu presnosti a k tvorbe povrchových trhlín.
          </p>
        </li>
        <li>
          <h3>Vplyv na tepelný stav obrobku</h3>
          <p>
            Vyššia rezná rýchlosť spôsobuje väčšiu tvorbu tepla v oblasti rezu.
            To môže viesť k lokálnemu prehriatiu obrobku, zmenám jeho štruktúry (napr. zakalenie, pnutia)
            a v niektorých prípadoch aj k deformáciám.
            Preto je často potrebné chladiace médium, ktoré odvádza teplo a stabilizuje proces.
          </p>
        </li>
        <li>
          <h3>Vplyv na presnosť obrábania</h3>
          <p>
            Teplo vytvorené pri vysokej rýchlosti môže spôsobiť rozťažnosť materiálu,
            čím sa znižuje rozmerová presnosť obrobku. Pri nižších rýchlostiach je tento efekt menší,
            avšak rastie riziko vibrácií a nepravidelného rezu.
          </p>
        </li>
        <li>
          <h3>Vplyv na mechanické vlastnosti povrchovej vrstvy</h3>
          <p>
            Pri nevhodne zvolenej rýchlosti môže dôjsť k spevneniu povrchovej vrstvy alebo k jej poškodeniu.
            To má priamy dopad na únavovú pevnosť súčiastky.
            Správna voľba reznej rýchlosti preto pomáha zabezpečiť dlhšiu životnosť výrobku pri jeho používaní.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default IntroComponent;



