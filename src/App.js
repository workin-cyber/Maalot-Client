import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import Main from './components/layout/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
