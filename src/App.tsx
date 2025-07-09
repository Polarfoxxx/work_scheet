import React from 'react';
import './App.css';
import { Container } from './modules';




interface Transaction_model {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
}

interface MainContextType { 
  mainData: Transaction_model[];
  setMainData: React.Dispatch<React.SetStateAction<Transaction_model[]>>;
}

//! Definuj kontext pre hlavný kontext
const mainContext = React.createContext<MainContextType>({
  mainData: [],
  setMainData: () => [],
});


function App(): React.JSX.Element {
  const [mainData, setMainData] = React.useState<Transaction_model[]>([]);

  return (
    <div className="app">
      <mainContext.Provider value={{ mainData, setMainData }}>
        <Container/>
      </mainContext.Provider>
    </div>
  );
}

const Content_app = {
  App,
  mainContext,
}

export default Content_app;
