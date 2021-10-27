import './App.css';
import Navbar from './components/navbar';
import Features from './components/features';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <div className="container todo-app">
        <List />
      </div>
    </div>
  );
}

export default App;
