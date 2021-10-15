import './App.css';
import Navbar from './components/navbar';
import Features from './components/features';
// import Home from './components/home';
// import Intro from './components/intro';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <Todo/>
    </div>
  );
}

export default App;
