import React from 'react';
import './App.css';
import ContainerProvider from './modules/Container/Container';
import Main from './modules/Main/Main';




function App(): React.JSX.Element {

  return (
    <ContainerProvider.Container>
      <div className="app">
        <Main />
      </div>
    </ContainerProvider.Container>
  );
}


export default App;
