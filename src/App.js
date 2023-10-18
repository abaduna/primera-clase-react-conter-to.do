import Header from './header/header';
import './App.css';
import Counter from './counter/Conunter';
import Work from './works/works';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Header titulo="artu es lo mas"></Header>
      <Counter></Counter>
      <Work></Work>
    </div>
  );
}

export default App;
