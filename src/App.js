import { List } from './components/List/';
import { Exchange } from './components/Exchange/';
import { History } from './components/History';
import './App.css';

export const currencies = ['EUR', 'AED', "USD", "CZK"];

function App() {
  return (
    <div className="App">
      <List />
      <Exchange />
      <History />
    </div>
  );
}

export default App;
